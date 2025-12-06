import { useState } from 'react';

export default function AIBreathingCoach() {
  const [exercise, setExercise] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);
    const res = await fetch('/api/ai-breathing', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ exercise }),
    });
    const data = await res.json();
    setResponse(data.message);
    setLoading(false);
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">
        AI Breathing Coach
      </h1>

      <label className="block font-semibold mb-2">
        Enter breathing technique (e.g. “4-7-8”, “box breathing”)
      </label>
      <input
        type="text"
        className="w-full p-3 rounded border mb-4"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-indigo-700 text-white px-6 py-3 rounded-lg"
      >
        {loading ? 'Generating...' : 'Generate Guidance'}
      </button>

      {response && (
        <div className="mt-6 bg-white shadow p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Your Guided Practice</h2>
          <p className="whitespace-pre-line">{response}</p>
        </div>
      )}
    </div>
  );
}
