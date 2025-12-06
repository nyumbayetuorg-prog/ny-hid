import { useState } from 'react';

export default function AIMeaningEngine() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function analyzeMeaning() {
    setLoading(true);
    const res = await fetch('/api/meaning', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">
        AI Meaning Compass
      </h1>

      <textarea
        className="w-full p-4 border rounded-lg h-40"
        placeholder="Share your experience this week…"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={analyzeMeaning}
        disabled={loading}
        className="bg-orange-600 text-white px-6 py-3 rounded-lg mt-4"
      >
        {loading ? 'Analyzing...' : 'Analyze Meaning'}
      </button>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Identity Themes</h2>
            <p>{result.identity}</p>
          </div>

          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Purpose Alignment</h2>
            <p>{result.purpose}</p>
          </div>

          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Existential Tensions</h2>
            <p>{result.tension}</p>
          </div>
        </div>
      )}
    </div>
  );
}
