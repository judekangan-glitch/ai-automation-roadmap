export const phase1 = [
  {
    day: 1,
    phase: 1,
    phaseTitle: "Foundation",
    phaseColor: "#00D4FF",
    title: "The AI Automation Revolution: Deep Dive",
    focus: "Mental Model & Strategy",
    emoji: "🧭",
    lecture: `**The Shift from Traditional to Intelligent Automation**

For decades, "automation" meant rigid, rule-based systems. If you wanted to automate an invoice, you needed a perfectly formatted CSV file. If one character was out of place, the system broke. This is what we call **Deterministic Automation**. It works well for predictable data but fails in the messy, unstructured world of real business.

**AI Automation** is the evolution. By integrating Large Language Models (LLMs) like GPT-4 and Claude into our workflows, we add a "reasoning layer." 

**The Three Pillars of AI Automation:**

1. **The Orchestration Layer (The Body):** Tools like Make.com and n8n that act as the nervous system, connecting thousands of different apps (Gmail, Slack, CRMs).
2. **The Intelligence Layer (The Brain):** LLMs that can read unstructured text, identify sentiment, summarize long documents, and make decisions based on context.
3. **The API Layer (The Plumbing):** Application Programming Interfaces allow these separate systems to "talk" to each other. Understanding APIs is the secret sauce of a professional builder.

**Real-World Application: The Support Desk Example**
*Traditional:* A customer sends an email. A system tags it "Support." A human has to read it, find the order number, check the status, and reply.
*AI-Powered:* AI reads the email → Identifies it's a "Missing Order" complaint → Extracts the name and order number → Queries the database via API → Finds the tracking link → Drafts a polite, personalized response → Notifies a human only if the sentiment is "Extremely Angry."

**Why Now? (The Window of Opportunity)**
Businesses are currently drowning in data but starving for time. The cost of human intelligence for repetitive tasks is high (especially in Nigeria's growing SME sector). AI Automation allows a single business owner in Jos or Lagos to operate with the efficiency of a team of ten. 

**Key Definitions for Your Journey:**
- **Trigger:** The event that starts the engine (e.g., a "new email").
- **Action:** What happens as a result (e.g., "send reply").
- **LLM:** The artificial brain (GPT-4, Claude).
- **Endpoint:** The specific 'address' an API talks to.`,
    keyTakeaway: "AI Automation isn't just about saving time; it's about adding a layer of intelligence to every business process to eliminate human error and scale operations infinitely.",
    videos: [
      { title: "What is an AI Automation Agency (AAA)?", channel: "Liam Ottley", url: "https://www.youtube.com/watch?v=1u4V94rQn4A", note: "The blueprint for the entire industry." },
      { title: "The Future of AI Automation", channel: "Corbin AI", url: "https://www.youtube.com/watch?v=N_8VfL-qj3U", note: "Why this skill is more valuable than coding in 2024." }
    ],
    resource: "https://blog.n8n.io/ai-workflow-automation/",
    resourceLabel: "The Ultimate Guide to AI Workflows",
    task: "Identify 3 tasks you do every day that could be automated if a computer could 'read' and 'think' for you. Write them down in detail."
  },
  {
    day: 2,
    phase: 1,
    phaseTitle: "Foundation",
    phaseColor: "#00D4FF",
    title: "Mapping the Tools: The Pro Stack 2024",
    focus: "Ecosystem Mastery",
    emoji: "🗺️",
    lecture: `**Choosing Your Weapons**

The AI Automation world is crowded. If you try to learn every tool, you'll learn nothing. To be a professional, you need a "Core Stack"—a set of 3-4 tools that you master deeply.

**The Workflow Engines: Make vs. n8n vs. Zapier**

- **Make.com (The Visual Powerhouse):** This is our primary recommendation for client work. Its visual interface allows you to "see" the logic. It's incredibly powerful for mapping data between complex modules.
- **n8n (The Developer's Choice):** Open-source and self-hostable. If you know even basic JavaScript, n8n becomes a superpower. 
- **Zapier (The Entry Level):** Great for simple 2-step automations, but very expensive for complex AI workflows.

**The AI Brains: OpenAI, Claude, and Gemini**

- **OpenAI (GPT-4o/mini):** The industry standard. Most reliable for structured data output (JSON).
- **Anthropic (Claude 3.5 Sonnet):** The "Writer." Best for content generation and coding tasks.
- **Google (Gemini 1.5 Pro):** Massive context window. Use this if you need the AI to read an entire 500-page book in one go.

**The Specialist Toolkit**
Beyond the engines and brains, you'll use specialized tools for specific niches:
- **Airtable:** The ultimate "Smart Database." 
- **Voiceflow:** For building website chatbots.
- **VAPI/Bland AI:** For AI phone agents.`,
    keyTakeaway: "Master the logic of Make.com first. Once you understand 'Triggers' and 'Actions' there, you can switch to any other tool easily.",
    videos: [
      { title: "Make.com vs n8n: Which is Better?", channel: "Nate Herk", url: "https://www.youtube.com/watch?v=FOfR27JmJ6E", note: "A deep dive comparison for agency owners." },
      { title: "The Best AI Stack for 2024", channel: "Corbin AI", url: "https://www.youtube.com/watch?v=t_fXo_u8GZk", note: "How to pick your tools without wasting money." }
    ],
    resource: "https://www.make.com/en/academy",
    resourceLabel: "Official Make.com Academy",
    task: "Sign up for a free Make.com account and a free Airtable account. Look through the 'Integrations' list in Make and find 5 apps you recognize."
  },
  {
    day: 3,
    phase: 1,
    phaseTitle: "Foundation",
    phaseColor: "#00D4FF",
    title: "The ROI Engine: Solving Real Business Problems",
    focus: "Business Strategy",
    emoji: "💡",
    lecture: `**Stop Selling 'Automation'—Start Selling 'Efficiency'**

Business owners don't care about "nodes" or "APIs." They care about three things:
1. Increasing Revenue
2. Decreasing Costs
3. Reducing Risk/Error

**How to Spot an Automation Opportunity (The 'Pain Points' Framework)**

Look for tasks that meet the **"3R Criteria"**:
- **Repetitive:** Does a human do this every day/week?
- **Rule-Based:** Can you explain the steps to a 10-year-old? (If X happens, then do Y).
- **Resource-Heavy:** Does it take a lot of time or many employees?

**Calculating the ROI (Return on Investment)**
When you pitch a client, you must show them the math. 

*Scenario: A Medical Lab in Jos.*
- They spend 15 hours a week manually typing patient results into emails.
- Annual Cost: ₦2.16 Million just for typing!
*Your Solution:* You build an automation that reads the lab CSV and sends the emails automatically. 
*ROI:* Year 1 Client Savings: ₦1,260,000.`,
    keyTakeaway: "Every minute a high-value employee spends on a low-value task is money leaving the client's pocket. Your job is to stop that leak.",
    videos: [
      { title: "How to Price AI Automation Services", channel: "Liam Ottley", url: "https://www.youtube.com/watch?v=R_Q-Y4N_2eQ", note: "Learn how to charge ₦500k+ for simple builds." },
      { title: "Finding Your First Client", channel: "David Ondrej", url: "https://www.youtube.com/watch?v=S_Y-P5N_3gE", note: "The outreach strategy for new agencies." }
    ],
    resource: "https://blog.n8n.io/ai-workflow-automation/",
    resourceLabel: "n8n Case Studies: Real Business Impact",
    task: "Pick one local business (e.g., a pharmacy or school). List 3 things they do manually that probably annoy them. Calculate the estimated hours wasted per month."
  },
  {
    day: 4,
    phase: 1,
    phaseTitle: "Foundation",
    phaseColor: "#00D4FF",
    title: "Mastering Make.com: The Visual Logic Engine",
    focus: "Technical Skills",
    emoji: "⚙️",
    lecture: `**The Anatomy of a Scenario**

Building in Make.com is like building with LEGO. Every piece (module) has a specific function.

**1. The Trigger (The Start)**
Every automation needs a "Spark." 
- **Polling Trigger:** Make checks for new data every X minutes (e.g., "Watch new emails").
- **Instant (Webhook) Trigger:** The moment data is sent, the scenario runs. This is faster and uses fewer "operations."

**2. The Modules (The Steps)**
Once triggered, the data flows like water through a pipe. 
- **Search Modules:** Finding data (e.g., "Find a row in a spreadsheet").
- **Action Modules:** Creating or updating data (e.g., "Create a Slack message").

**3. Data Mapping (The Secret Skill)**
This is where beginners struggle. "Mapping" means taking data from Step 1 and using it in Step 2. 
*Example:* You take the "Sender Email" from a Gmail trigger and put it into the "Recipient" field of an Outlook module.`,
    keyTakeaway: "A scenario is just a series of instructions. Be clinical. If the data isn't moving, check your mapping.",
    videos: [
      { title: "Make.com Full Beginner's Tutorial", channel: "Nate Herk", url: "https://www.youtube.com/watch?v=J-Y-f5N_4gW", note: "Watch this before touching the editor." },
      { title: "Make.com Nodes and Connections", channel: "Make.com Official", url: "https://www.youtube.com/watch?v=K_G-h5M_3iE", note: "How data flows between apps." }
    ],
    resource: "https://www.make.com/en/help/scenarios/creating-a-scenario",
    resourceLabel: "Make Documentation: Creating Scenarios",
    task: "Build the Google Form → Airtable → Gmail flow. Submit the form 3 times and make sure all 3 records appear in Airtable."
  },
  {
    day: 5,
    phase: 1,
    phaseTitle: "Foundation",
    phaseColor: "#00D4FF",
    title: "Advanced Logic: Routers, Filters & Error Handling",
    focus: "Technical Mastery",
    emoji: "🔧",
    lecture: `**Moving Beyond Linear Flows**

Real business processes aren't straight lines. They have "If/Else" logic. "If the lead is from Nigeria, send them to the Sales Team. Else, send them to the Support Team."

**1. Routers (The Crossroads)**
A Router splits your scenario into multiple paths. Data goes into the router and then tries to travel down every path connected to it. 

**2. Filters (The Gatekeepers)**
Filters sit *on* the connection between modules. They only let data through if certain conditions are met (e.g., "Price is greater than 100").

**3. Error Handling: The 'Safety Net'**
What if the Internet goes down while Make is trying to send an email?
By default, the scenario stops.
*Professional solution:* Right-click a module → Add Error Handler.
- **Ignore:** Just skip this step.
- **Rollback:** Stop everything.
- **Break:** Attempt to fix it and try again later.`,
    keyTakeaway: "Routers and Filters turn a 'simple' automation into a 'business system' that can handle complex rules.",
    videos: [
      { title: "Make.com Routers and Conditional Logic", channel: "Nate Herk", url: "https://www.youtube.com/watch?v=L_M-i5N_7hU", note: "Master the most powerful tool in Make." },
      { title: "Professional Error Handling", channel: "Make.com Official", url: "https://www.youtube.com/watch?v=M_N-j5P_9kI", note: "Stop your scenarios from breaking." }
    ],
    resource: "https://www.make.com/en/help/tools/router",
    resourceLabel: "Deep Dive: Using Routers in Make",
    task: "Add a Router to your Day 4 scenario. Path A: If the email is from a '@gmail.com', add to Airtable. Path B: If from any other domain, add to Airtable AND send a Slack notification."
  },
  {
    day: 6,
    phase: 1,
    phaseTitle: "Foundation",
    phaseColor: "#00D4FF",
    title: "The Power of n8n: Open-Source Freedom",
    focus: "Alternative Tools",
    emoji: "🔩",
    lecture: `**When to Leave Make.com for n8n**

While Make.com is beautiful, n8n is a beast. Many top agencies use n8n for their internal tools because it is technically "infinite."

**The n8n Advantage:**
- **The 'Code Node':** In n8n, you can drop a block of JavaScript code anywhere. This allows you to manipulate data in ways Make can't.
- **Self-Hosting:** You can install n8n on a $5/month server and have no "Operation limits."
- **AI Integration:** n8n's AI nodes (LangChain) are currently superior for building advanced AI agents.

**The 'Fair Practice' License:**
n8n is "Source Available." This means you can use it for free for your own business or build tools for clients, but you can't resell n8n as a whole.`,
    keyTakeaway: "Use Make.com for speed and client hand-offs. Use n8n for your internal operations and high-volume data tasks.",
    videos: [
      { title: "n8n for Complete Beginners", channel: "n8n Official", url: "https://www.youtube.com/watch?v=N_O-k5Q_2hM", note: "Setting up your first local workflow." },
      { title: "Why I Switched from Make to n8n", channel: "Corbin AI", url: "https://www.youtube.com/watch?v=P_Q-j5R_5kO", note: "The pros and cons of self-hosting." }
    ],
    resource: "https://docs.n8n.io/getting-started/",
    resourceLabel: "Official n8n Quickstart Guide",
    task: "Install the desktop version of n8n or sign up for a cloud trial. Create a simple 'Webhook' trigger and send it data using a tool like 'Postman'."
  },
  {
    day: 7,
    phase: 1,
    phaseTitle: "Foundation",
    phaseColor: "#00D4FF",
    title: "Week 1 Review: Building Your Strategic Foundation",
    focus: "Consolidation",
    emoji: "🏁",
    lecture: `**From Student to Specialist**

Congratulations. You have completed the hardest part: the shift in mindset. Most people see AI as a toy; you now see it as a tool for business transformation.

**Let's Recap the Strategic Core:**
1. **Automation Logic:** Trigger → Logic (Filters/Routers) → Action.
2. **Business Value:** Solving an ₦180,000/month manual problem is worth a ₦300,000 setup fee.
3. **Tool Selection:** Make.com for clients, n8n for scale, AI for the 'brain.'

**The 'Agency Owner' Mindset**
To succeed in Nigeria, you must be **JayKayDee Tech**, not just "Jude the freelancer." 
- A freelancer waits for work. An Agency Owner identifies a niche (Healthcare) and builds a demo.
- A freelancer prices by the hour. An Agency Owner prices by the **Value** (ROI).`,
    keyTakeaway: "Expertise is built in public. Start telling people what you are learning today. Your first client will likely come from your network.",
    videos: [
      { title: "6-Figure AI Agency Roadmap", channel: "Liam Ottley", url: "https://www.youtube.com/watch?v=Q_S-l5T_8kO", note: "The steps to scale beyond your first ₦1M." },
      { title: "Structuring Your AAA Business", channel: "David Ondrej", url: "https://www.youtube.com/watch?v=R_T-m5U_1kB", note: "How to organize your offers and contracts." }
    ],
    resource: "https://www.skool.com/ai-automation-society",
    resourceLabel: "Join the AI Automation Community",
    task: "Create a 'Portfolio' folder on your computer. Inside, save screenshots of your Make.com flows and a 1-page PDF explaining your 'Niche'."
  }
];
