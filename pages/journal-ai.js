import { useState } from 'react';

export default function AIJournalAssistant() {
  const [entry, setEntry] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  async function analyzeEntry() {
    setLoading(true);
    const res = await fetch('/api/ai-journal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ entry }),
    });
    const data = await res.json();
    setAnalysis(data);
    setLoading(false);
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">
        AI Journal Assistant
      </h1>

      <textarea
        className="w-full p-4 border rounded-lg h-40"
        placeholder="Write your thoughts here..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />

      <button
        onClick={analyzeEntry}
        disabled={loading}
        className="bg-green-600 text-white px-6 py-3 rounded-lg mt-4"
      >
        {loading ? 'Analyzing...' : 'Analyze Entry'}
      </button>

      {analysis && (
        <div className="mt-6 space-y-4">
          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Emotional Summary</h2>
            <p>{analysis.summary}</p>
          </div>

          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Cognitive Distortions</h2>
            <p>{analysis.distortions}</p>
          </div>

          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Meaning Extraction</h2>
            <p>{analysis.meaning}</p>
          </div>
        </div>
      )}
    </div>
  );
}
