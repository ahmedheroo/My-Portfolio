import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChatbotService } from '../../services/chatbot.service';

interface Suggestion {
  label: string;
  question: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
})
export class ChatbotComponent implements AfterViewChecked {
  readonly chat = inject(ChatbotService);
  private readonly sanitizer = inject(DomSanitizer);

  isOpen = signal(false);
  draft = signal('');
  sending = computed(() => this.chat.isThinking());

  readonly suggestions: Suggestion[] = [
    { label: 'What does Ahmed specialize in?', question: 'What does Ahmed specialize in?' },
    { label: 'Show me his projects', question: 'Tell me about Ahmed’s projects.' },
    {
      label: 'Is he available for hire?',
      question: 'Is Ahmed available for hire or freelance work? How can I contact him?',
    },
    { label: 'Experience & education', question: 'Walk me through Ahmed’s experience and education.' },
  ];

  private readonly scroller = viewChild<ElementRef<HTMLElement>>('scroller');
  private readonly inputEl = viewChild<ElementRef<HTMLInputElement>>('chatInput');
  private shouldStickToBottom = true;

  open(): void {
    this.isOpen.set(true);
    queueMicrotask(() => this.inputEl()?.nativeElement.focus());
  }

  close(): void {
    this.isOpen.set(false);
  }

  toggle(): void {
    this.isOpen() ? this.close() : this.open();
  }

  async submit(): Promise<void> {
    const text = this.draft().trim();
    if (!text || this.sending()) return;
    this.draft.set('');
    this.shouldStickToBottom = true;
    await this.chat.send(text);
  }

  ask(question: string): void {
    if (this.sending()) return;
    this.shouldStickToBottom = true;
    void this.chat.send(question);
  }

  clear(): void {
    this.chat.clear();
  }

  /** Let the panel scroll internally without page hijack. */
  onScroll(event: Event): void {
    const el = event.target as HTMLElement;
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 40;
    this.shouldStickToBottom = atBottom;
  }

  onEnter(event: Event): void {
    event.preventDefault();
    void this.submit();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen()) this.close();
  }

  /** Renders chat markdown (links, bold, code) as pre-escaped, safe HTML. */
  render(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(renderRich(content));
  }

  ngAfterViewChecked(): void {
    if (!this.isOpen() || !this.shouldStickToBottom) return;
    const el = this.scroller()?.nativeElement;
    if (el) el.scrollTop = el.scrollHeight;
  }
}

/** Escapes anything HTML-dangerous in chat text. */
function escapeHtml(text: string): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/**
 * Minimal, safe markdown renderer for chat content:
 * `[label](url)` → link · `**bold**` → strong · `` `code` `` → code
 * Bare https(s) URLs and emails become clickable too.
 * Input is fully escaped first, so user/model content can never inject HTML.
 */
function renderRich(text: string): string {
  const escaped = escapeHtml(text);
  return escaped
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (_m, label: string, url: string) =>
      linkHtml(label, url),
    )
    .replace(/(^|[\s(])((?:https?:\/\/)[^\s<>()"']+)/g, (_m, pre: string, url: string) =>
      `${pre}${linkHtml(url, url)}`,
    )
    .replace(/(^|[\s(])([\w.+-]+@[\w-]+\.[\w.-]+[\w])/g, (_m, pre: string, mail: string) =>
      `${pre}${linkHtml(mail, `mailto:${mail}`)}`,
    )
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}

function linkHtml(label: string, url: string): string {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}
