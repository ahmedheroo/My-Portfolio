/**
 * Central app configuration.
 *
 * 🔑 Paste your Cohere API key below (from https://dashboard.cohere.com/api-keys).
 * While the placeholder remains, the chat widget runs in "demo mode" — it answers
 * from a small built-in FAQ so the UI still works, and no network calls are made.
 */
export const environment = {
  cohere: {
    apiKey: '7e8qO0XLk42NKjrZHbvwRaRREUcCa8zu6x8Ihohq',
    apiBase: 'https://api.cohere.com/v2',
    // Cohere's flagship model. Alternatives if needed: 'command-r-plus-08-2024', 'command-r7b-12-2024' (cheaper/faster).
    model: 'command-a-03-2025',
    maxTokens: 700,
    temperature: 0.4,
  },
};
