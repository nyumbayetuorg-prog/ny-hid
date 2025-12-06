import { useState } from 'react';

export default function AISupportTriage() {
  const [challenge, setChallenge] = useState('');
  const [support, setSupport] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleTriage() {
    setLoading(true);
    const res = await fetch('/api/support-triage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ challenge, support }),
    });
    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">
        AI Support Triage
      </h1>

      <textarea
        className="w-full p-4 border rounded-lg h-32"
        placeholder="Describe your challenge..."
        value={challenge}
        onChange={(e) => setChallenge(e.target.value)}
      />

      <textarea
        className="w-full p-4 border rounded-lg h-32 mt-4"
        placeholder="What support do you feel you need?"
        value={support}
        onChange={(e) => setSupport(e.target.value)}
      />

      <button
        onClick={handleTriage}
        disabled={loading}
        className="bg-red-600 text-white px-6 py-3 rounded-lg mt-4"
      >
        {loading ? 'Analyzing...' : 'Run Triage'}
      </button>

      {result && (
        <div className="mt-6 bg-white shadow p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Recommended Action</h2>
          <p className="whitespace-pre-line">{result.recommendation}</p>
        </div>
      )}
    </div>
  );
}
