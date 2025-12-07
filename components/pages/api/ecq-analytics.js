// pages/api/ecq-analytics.js

export default function handler(req, res) {
  // MOCK ANALYTICS DATA (replace with Airtable in Part 5)

  const data = {
    submissionsTrend: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      values: [42, 51, 63, 48, 70, 80, 95],
    },
    gamblingRisk: {
      labels: ["Nairobi", "Kiambu", "Nakuru", "Mombasa", "Eldoret"],
      values: [72, 65, 59, 81, 55],
    },
    emotionalLoad: {
      labels: ["Low", "Moderate", "High", "Critical"],
      values: [120, 240, 180, 60],
    },
  };

  return res.status(200).json({ success: true, data });
}
