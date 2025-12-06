import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  try {
    const { answers } = req.body;

    const prompt = `
      You are an existential psychologist.

      Analyze the user's responses:
      ${JSON.stringify(answers)}

      Return:
      - Identity themes
      - Purpose alignment score (1–10)
      - Signs of misalignment
      - Strengths emerging this week
      - A meaning-based affirmation
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4.1",
      messages: [{ role: "user", content: prompt }],
    });

    res.status(200).json({ insights: completion.choices[0].message.content });
  } catch {
    res.status(500).json({ error: "Meaning analysis failed" });
  }
}
