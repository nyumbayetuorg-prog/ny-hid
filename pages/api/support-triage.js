import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  try {
    const { challenge, need, urgency } = req.body;

    const prompt = `
      User challenge: ${challenge}
      User need: ${need}
      Urgency: ${urgency}

      Act as a trauma-informed mental health triage assistant.
      Provide:

      1. Recommended module (breathing / journaling / grounding)
      2. If human support is needed
      3. If escalation is required
      4. A compassionate grounding message
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }],
    });

    res.status(200).json({ triage: completion.choices[0].message.content });
  } catch {
    res.status(500).json({ error: "Triage failed" });
  }
}
