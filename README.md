<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1ITuz--9qMF7wdvMJ0LsZ9WViJvtcNXxl

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Translation and listening

Set `VITE_GEMINI_API_KEY` in `.env.local` for local testing, or enter a Gemini key in Translate (session-only storage). Translation runs automatically after a short typing pause. Sorani audio uses Gemini TTS; pronunciation quality should be checked with native speakers. English playback uses browser speech synthesis. Microphone recognition requires a supported browser and microphone permission; Sorani recognition support varies.

For a public production deployment, route Gemini requests through an authenticated server endpoint rather than exposing an app-owned API key in the browser bundle.
