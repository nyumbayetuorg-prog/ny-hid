import BreathingExerciseCard from "../components/BreathingExerciseCard";

export default function Breathing() {
  const startExercise = (name) => {
    alert(`Starting: ${name}`);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Breathing Sanctuary</h1>
      <p>Select a breathing practice to begin.</p>

      <BreathingExerciseCard
        title="Box Breathing (4–4–4–4)"
        duration="4 minutes"
        color="#0F4C81"
        onStart={() => startExercise("Box Breathing")}
      />

      <BreathingExerciseCard
        title="4–7–8 Relaxation Breathing"
        duration="5 minutes"
        color="#F97316"
        onStart={() => startExercise("4–7–8 Breathing")}
      />

      <BreathingExerciseCard
        title="Coherence Breathing (6 breaths/min)"
        duration="6 minutes"
        color="#22C55E"
        onStart={() => startExercise("Coherence Breathing")}
      />
    </div>
  );
}
