// pages/api/ny-brain.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { role, action } = req.body;

  // Safety
  if (!role || !action) {
    return res.status(400).json({ error: "Missing role or action" });
  }

  // --- DEFINE BRAIN RESPONSES ---
  let output = "";

  if (role === "founder") {
    switch (action) {
      case "generate_weekly_narrative":
        output = `
WEEKLY NARRATIVE — NATIONAL EMOTIONAL TEMPERATURE
--------------------------------------------------
This week Kenya shows patterns of:
• Hidden anxiety in men  
• Emotional exhaustion in women  
• Academic pressure in youth  
• Gambling spikes driven by silence and shame  

Message to the Movement:
Nyumba Yetu must hold space for truth, courage, and meaning.
        `;
        break;

      case "analyse_ecq_patterns":
        output = `
ECQ PATTERN ANALYSIS
--------------------
• Gambling ECQ submissions show rising avoidance triggers  
• Family ECQ reveals high emotional disconnection  
• Student ECQ highlights burnout + self-worth struggles  
• Alcohol ECQ shows weekend spikes  

Key Insight:
This is NOT addiction — it is emotional overwhelm.
        `;
        break;

      case "founder_strategy_summary":
        output = `
FOUNDER STRATEGY SUMMARY
------------------------
• Prioritize ECQ distribution  
• Strengthen content engine  
• Prepare county partnership kits  
• Build automated NY Brain workflows  

Your role:
Set direction. Protect energy. Hold the vision.
        `;
        break;

      case "national_trend_signals":
        output = `
NATIONAL TREND SIGNALS
----------------------
• Masculinity crisis deepening  
• Youth escapism rising  
• Family emotional fatigue  
• Economic fear driving risk-taking behaviors  

Opportunity:
Nyumba Yetu becomes the Healing OS for the nation.
        `;
        break;
    }
  }

  if (role === "creative") {
    switch (action) {
      case "generate_short_scripts":
        output = `
SHORT-FORM SCRIPTS
------------------
1. "Why men shut down emotionally"  
2. "Gambling is not a money problem — it's an emotional escape"  
3. "Students are drowning in expectations"  
4. "The real reason couples disconnect"  
        `;
        break;

      case "thumbnail_concepts":
        output = `
THUMBNAIL IDEAS
---------------
• Bold faces with emotional contrast  
• Kenya map with emotional heat zones  
• Minimalist text: "MEN ARE BREAKING"  
• Red-black-white colour palette for impact  
        `;
        break;

      case "content_calendar":
        output = `
WEEKLY CONTENT CALENDAR
-----------------------
Mon — Men's emotional insights  
Tue — ECQ story  
Wed — Gambling myth-busting  
Thu — Family healing clip  
Fri — Student mental load story  
Sat — Radio segment repurposing  
Sun — Founder narrative  
        `;
        break;

      case "creative_brief":
        output = `
CREATIVE BRIEF
--------------
Objective:
Create content that shifts identity, not just behaviour.

Tone:
Empathetic. Direct. Transformational.

Audience:
Men, students, families, gamblers, partners.

Distribution:
YouTube Shorts, TikTok, FB Reels.
        `;
        break;
    }
  }

  if (role === "ops") {
    switch (action) {
      case "ops_daily_plan":
        output = `
DAILY OPS PLAN
--------------
• Update Airtable pipelines  
• Publish scheduled videos  
• Prepare ECQ export  
• Validate support cases  
• Sync creative files  
        `;
        break;

      case "content_upload_checklist":
        output = `
UPLOAD CHECKLIST
----------------
✓ Captions added  
✓ Hashtags optimized  
✓ Thumbnail ready  
✓ Scheduled in YouTube + TikTok  
✓ Crossposted to FB + IG  
        `;
        break;

      case "support_pipeline_map":
        output = `
SUPPORT PIPELINE MAP
--------------------
1. Raw ECQ Submission  
2. Risk Segmentation  
3. High-risk escalation  
4. Support assignment  
5. Follow-up tracking  
        `;
        break;

      case "ops_priority_summary":
        output = `
OPS PRIORITY SUMMARY
--------------------
• ECQ automations  
• Content posting  
• Retreat logistics  
• Support response time  
• Data hygiene  
        `;
        break;
    }
  }

  return res.status(200).json({ success: true, output });
}
