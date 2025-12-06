import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  try {
    const { exercise } = req.body;

    const prompt = `
    Act as an expert breathing coach.

    User selected: ${exercise}

    Provide:
    - A calming introduction
    - Step-by-step breathing instructions
    - Pacing guidance (timing)
    - Body awareness reminders
    - A closing grounding message
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }],
    });

    res.status(200).json({ coaching: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "AI breathing coach failed" });
  }
}
