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
- **Trigger:** The event that starts the engine (e.g., a "New Row" in Google Sheets).
- **Action:** A step the automation takes (e.g., "Send WhatsApp Message").
- **LLM (Large Language Model):** The AI engine (OpenAI, Anthropic, Google).
- **Token:** The currency of AI. Think of it as fragments of words. Managing tokens = managing costs.
- **Payload:** The data being carried from one step to another.`,
    keyTakeaway: "AI Automation isn't just about saving time; it's about adding a layer of intelligence to every business process to eliminate human error and scale operations infinitely.",
    videos: [
      { title: "AI Automation Agency Explained", channel: "Liam Ottley", url: "https://www.youtube.com/@LiamOttley", note: "Watch the 'What is AAA' video to understand the business model." },
      { title: "The Future of Work and AI", channel: "Corbin AI", url: "https://www.youtube.com/@CorbinBrown", note: "Search for 'Why AI Automation is the next big thing'." }
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
  *Pros:* 1,500+ integrations, visually intuitive, easy to hand over to clients.
  *Cons:* Can get expensive if you have millions of "Operations."

- **n8n (The Developer's Choice):** Open-source and self-hostable. If you know even basic JavaScript, n8n becomes a superpower. 
  *Pros:* Free if you host it yourself (on a server like Railway), handles code nodes beautifully, no "per-operation" costs.
  *Cons:* Steeper learning curve for non-technical users.

- **Zapier (The Entry Level):** Great for simple 2-step automations. 
  *Pros:* Simplest set-up. 
  *Cons:* Extremely expensive for complex AI workflows. Avoid for professional agency work.

**The AI Brains: OpenAI, Claude, and Gemini**

- **OpenAI (GPT-4o/mini):** The industry standard. Most reliable for structured data output (JSON).
- **Anthropic (Claude 3.5 Sonnet):** The "Writer." Best for content generation and coding tasks.
- **Google (Gemini 1.5 Pro):** Massive context window. Use this if you need the AI to read an entire 500-page book in one go.

**The Specialist Toolkit**
Beyond the engines and brains, you'll use specialized tools for specific niches:
- **Airtable:** The ultimate "Smart Database." Much better than Google Sheets for complex automation.
- **Voiceflow:** For building website chatbots.
- **VAPI/Bland AI:** For AI phone agents.
- **Eden AI:** A "Swiss Army Knife" for OCR (reading invoices) and translation.

**Professional Tip: Standardize Your Stack**
When selling to clients, don't ask them what tool they want. Tell them: "We build on Make.com because it's reliable and scaleable." This reduces your maintenance headache.`,
    keyTakeaway: "Master the logic of Make.com first. Once you understand 'Triggers' and 'Actions' there, you can switch to any other tool easily.",
    videos: [
      { title: "The Best AI Automation Stack", channel: "Nate Herk", url: "https://www.youtube.com/@NateHerk", note: "Watch his comparison of Make vs n8n." },
      { title: "Make.com Beginner's Course", channel: "Make.com Official", url: "https://www.youtube.com/@make_hq", note: "Search for 'Make.com 101'." }
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
- Staff cost: ₦3,000/hour.
- Total Monthly Cost: 15 hours * 4 weeks * ₦3,000 = ₦180,000.
- Annual Cost: ₦2.16 Million just for typing!

*Your Solution:*
- You build an automation that reads the lab CSV and sends the emails automatically.
- Your Price: ₦300,000 setup fee + ₦50,000/month maintenance.
- **Year 1 Client Savings: ₦1,260,000.**

**High-Value Use Cases by Industry:**
- **Real Estate:** Lead qualification (AI asking if they have the budget before a agent calls them).
- **Law Firms:** Automated contract drafting from intake forms.
- **E-commerce:** Sentiment-based review responses on Google Maps.
- **Healthcare:** Appointment reminders and result delivery (your niche!).

**The 'Audit' Strategy**
Never go into a meeting saying "I will build you X." Instead, say "I'll perform a 60-minute Workflow Audit to find your biggest time-wasters." This builds trust and positions you as a consultant, not just a freelancer.`,
    keyTakeaway: "Every minute a high-value employee spends on a low-value task is money leaving the client's pocket. Your job is to stop that leak.",
    videos: [
      { title: "How to Find Automation Leads", channel: "David Ondrej", url: "https://www.youtube.com/@DavidOndrej", note: "Search for 'AI Automation Business Ideas'." },
      { title: "The ROI of AI", channel: "Liam Ottley", url: "https://www.youtube.com/@LiamOttley", note: "Watch his video on 'Pricing your services'." }
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
*Example:* You take the "Sender Email" from a Gmail trigger and put it into the "Recipient" field of an Outlook module.
Make uses a "pill-based" system. You click the field you want, and a list of available data from previous steps appears.

**4. Testing: The 'Run Once' Button**
Never build the whole thing at once. 
- Build Step 1 → Run Once → Check output.
- Build Step 2 → Run Once → Check mapping.
Professional builders test every single module before moving to the next.

**Your First Build: The Lead Capture System**
1. Trigger: Google Forms (New Response).
2. Action: Airtable (Create record).
3. Action: Gmail (Send thank you email).
*Crucial:* In the Gmail step, use the name from the Google Form to say "Hi [Name]!" instead of "Hi there."`,
    keyTakeaway: "A scenario is just a series of instructions. Be clinical. If the data isn't moving, check your mapping.",
    videos: [
      { title: "Make.com for Beginners - 2024 Guide", channel: "Nate Herk", url: "https://www.youtube.com/@NateHerk", note: "Essential watching for the UI walkthrough." },
      { title: "Everything you need to know about Modules", channel: "Make.com Official", url: "https://www.youtube.com/@make_hq", note: "Search 'Make tutorials modules'." }
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
*Pro Tip:* Use Routers to organize complex scenarios.

**2. Filters (The Gatekeepers)**
Filters sit *on* the connection between modules. They only let data through if certain conditions are met. 
- *Condition Examples:* "Subject contains 'Urgent'", "Price is greater than 100", "Email is not empty."
Always use filters to stop your automation from processing junk data (saving you money on operations).

**3. Data Transformation with Functions**
Make.com has built-in formulas, just like Excel.
- **formatDate:** Change '01-01-2024' to 'January 1st'.
- **upper:** Make 'jude' into 'JUDE'.
- **ifempty:** If the user didn't provide a last name, use 'Friend'.
Learning these functions makes your automations look professional rather than robotic.

**4. Error Handling: The 'Safety Net'**
What if the Internet goes down while Make is trying to send an email?
By default, the scenario stops.
*Professional solution:* Right-click a module → Add Error Handler.
- **Ignore:** Just skip this step.
- **Rollback:** Stop everything and act like it never started.
- **Break:** Attempt to fix it and try again later.
High-ticket clients pay for "reliable" systems. Reliability comes from good error handling.`,
    keyTakeaway: "Routers and Filters turn a 'simple' automation into a 'business system' that can handle complex rules.",
    videos: [
      { title: "Make.com Routers and Filters Explained", channel: "Nate Herk", url: "https://www.youtube.com/@NateHerk", note: "Watch how he builds conditional logic." },
      { title: "Error Handling for Professionals", channel: "Make.com Official", url: "https://www.youtube.com/@make_hq", note: "Search for 'Error directive types'." }
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
- **The 'Code Node':** In Make, you are limited to their modules. In n8n, you can drop a block of JavaScript code anywhere. This allows you to manipulate data in ways Make can't.
- **Self-Hosting:** You can install n8n on your own computer or a $5/month server. You never have to worry about "Operation limits" again.
- **AI Integration:** n8n's AI nodes (LangChain) are currently superior for building advanced AI agents that can "remember" conversations.

**Key Concepts in n8n:**
- **Nodes:** Same as Make modules, but often more powerful.
- **JSON Data Structure:** n8n shows you the data in its raw JSON format. This helps you understand exactly what information is being passed around.
- **Credentials:** n8n handles security carefully. You'll need to learn how to connect APIs using "OAuth2" or "API Keys."

**The 'Fair Practice' License:**
n8n is "Source Available." This means you can use it for free, but if you start making millions selling a hosted version of it, you need to pay them. For 99% of agency work, it's virtually free.

**Practical Exercise: The HTTP Request**
Most beginners are scared of the 'HTTP Request' node. In n8n, this is your best friend. It lets you connect to *any* software that has an API, even if n8n doesn't have a "pre-built" module for it. If you learn n8n and HTTP requests, you are no longer a 'No-Coder'—you are an 'Automation Engineer.'`,
    keyTakeaway: "Use Make.com for speed and client hand-offs. Use n8n for your internal operations and high-volume data tasks.",
    videos: [
      { title: "n8n for Complete Beginners", channel: "n8n Official", url: "https://www.youtube.com/@n8n-io", note: "Watch the 'Getting Started' playlist." },
      { title: "n8n vs Make.com", channel: "Corbin AI", url: "https://www.youtube.com/@CorbinBrown", note: "Search for 'Why I switched to n8n'." }
    ],
    resource: "https://docs.n8n.io/getting-started/",
    resourceLabel: "Official n8n Quickstart Guide",
    task: "Install the desktop version of n8n or sign up for a cloud trial. Create a simple 'Webhook' trigger and send it data using a tool like 'Postman' or a simple browser link."
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
1. **Automation Logic:** Trigger → Logic (Filters/Routers) → Action. This is universal across all tools.
2. **Business Value:** Solving an ₦180,000/month manual problem is worth a ₦300,000 setup fee.
3. **Tool Selection:** Make.com for clients, n8n for scale, AI for the 'brain.'

**The 'Agency Owner' Mindset**
To succeed in Nigeria (or globally), you must be **JayKayDee Tech**, not just "Jude the freelancer." 
*What's the difference?*
- A freelancer waits for work. An Agency Owner identifies a niche (Healthcare), builds a demo, and shows the value.
- A freelancer prices by the hour. An Agency Owner prices by the **Value** (ROI).

**Your Action Plan for the Weekend:**
- **Optimize Your Profile:** Update your LinkedIn/WhatsApp status. "I help businesses eliminate repetitive manual tasks with AI Automation."
- **Document Your Builds:** Take screenshots of your Day 4 and Day 5 scenarios. These are your first portfolio pieces.
- **The 'Why':** Why are you doing this? To build a software empire? To free up your time for medical research? To provide jobs for other Nigerians? Write this down. It will sustain you when Phase 3 gets difficult.

**Preview of Week 2: AI Integration**
Next week, we stop just 'moving data' and start 'processing thoughts.' We will connect OpenAI to our flows, build chatbots, and make AI read complex PDFs. Get ready for the 'Magic' phase.`,
    keyTakeaway: "Expertise is built in public. Start telling people what you are learning today. Your first client will likely come from your existing network.",
    videos: [
      { title: "How to Build a 6-Figure AI Agency", channel: "Liam Ottley", url: "https://www.youtube.com/@LiamOttley", note: "Watch the 'Roadmap to $10k/month' video." },
      { title: "Structuring Your Automation Business", channel: "David Ondrej", url: "https://www.youtube.com/@DavidOndrej", note: "Search for 'Agency setup guide'." }
    ],
    resource: "https://www.skool.com/ai-automation-society",
    resourceLabel: "Join the AI Automation Community",
    task: "Create a 'Portfolio' folder on your computer. Inside, save screenshots of your Make.com flows and a 1-page PDF explaining the 'Niche' you want to focus on (e.g., Medical Labs)."
  }
];
