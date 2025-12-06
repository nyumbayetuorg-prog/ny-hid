import JournalPrompt from "../components/JournalPrompt";

export default function Journal() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Journaling Space</h1>
      <p>Use these prompts to explore your inner world.</p>

      <JournalPrompt
        title="Daily Reflection"
        prompt="What emotion did you feel the strongest today?"
        color="#0F4C81"
      />

      <JournalPrompt
        title="Gratitude"
        prompt="What are you grateful for that you often overlook?"
        color="#22C55E"
      />

      <JournalPrompt
        title="Meaning Exploration"
        prompt="Where did you feel most like yourself this week?"
        color="#F97316"
      />

      <JournalPrompt
        title="Stress Deconstruction"
        prompt="What belief felt heavy today? Why?"
        color="#A21CAF"
      />
    </div>
  );
}
