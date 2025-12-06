import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  try {
    const { entry } = req.body;

    const prompt = `
      Analyze the following journal entry:

      "${entry}"

      Return:
      - Emotional tone summary
      - Cognitive distortions (if any)
      - Underlying needs or values
      - Personal strengths showing up
      - One reflective question to guide growth
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4.1",
      messages: [{ role: "user", content: prompt }],
    });

    res.status(200).json({ analysis: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Journal AI failed" });
  }
}
