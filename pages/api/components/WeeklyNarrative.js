// components/WeeklyNarrative.js

import { useEffect, useState } from "react";

export default function WeeklyNarrative() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/narrative")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  if (!data) {
    return (
      <div className="p-6 bg-blue-50 rounded-lg mb-6">
        <p className="text-blue-800 font-medium">Generating Kenya’s Weekly Healing Narrative…</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-blue-50 rounded-lg shadow mb-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-3">
        Weekly Healing Narrative
      </h2>

      <p className="text-blue-800 whitespace-pre-line leading-relaxed">
        {data.narrative}
      </p>

      <div className="mt-4 text-sm text-blue-700">
        <strong>Total ECQs Reviewed:</strong> {data.total}
      </div>
    </div>
  );
}
