export const phase3 = [
  {
    day: 15,
    phase: 3,
    phaseTitle: "Building",
    phaseColor: "#00FF88",
    title: "Build #1: The AI Lead Generation Machine",
    focus: "Full System Build",
    emoji: "🎣",
    lecture: `**The Engine of Revenue: Automated Outreach**

Lead generation is the "lowest hanging fruit" in AI Automation. Every business wants more customers, but most hate the process of finding them. 

**The Full Architecture:**
1. **The Source (Apollo.io):** We search for our ideal clients (e.g., "Hospitals in Lagos").
2. **The Enrichment (Clay):** We find the CEO's specific email and their recent LinkedIn posts.
3. **The "Reasoning" Step (OpenAI):** We say, "Write a 3-sentence email. Sentence 1: Comment on their post. Sentence 2: Mention how JayKayDee Tech helped a similar clinic."
4. **The Delivery (Instantly.ai):** We send the email automatically.

**Personalization at Scale**
In the old world, a human could write 10 personalized emails a day. With this machine, you can write **1,000 personalized emails in 20 minutes.**`,
    keyTakeaway: "Personalization is the bridge to a response. Generic emails are ignored. AI is the only way to scale true personalization.",
    videos: [
      { title: "Building an AI Outreach Machine", channel: "Nate Herk", url: "https://www.youtube.com/watch?v=g_h-i9A-y8c", note: "Search for 'Cold Email Automation Make.com'." },
      { title: "How to Use Clay for AI Leads", channel: "Liam Ottley", url: "https://www.youtube.com/watch?v=h_i-j9B-z9d", note: "Watch his guide on 'Advanced Prospecting'." }
    ],
    resource: "https://instantly.ai/",
    resourceLabel: "Instantly.ai: Cold Email Software",
    task: "Find 5 lead prospects in your niche. Write a personalized email for each manually. Then, write a prompt that would generate those same emails."
  },
  {
    day: 16,
    phase: 3,
    phaseTitle: "Building",
    phaseColor: "#00FF88",
    title: "Build #2: AI Customer Onboarding System",
    focus: "Full System Build",
    emoji: "🤝",
    lecture: `**The Golden Rule: First Impressions are Automated**

When a client pays, they are anxious. If they don't hear from the business for 24 hours, buyers' remorse kicks in. 

**The Onboarding Workflow:**
1. **Trigger:** A new payment is made in Stripe.
2. **Action:** Create a "Client Folder" in Google Drive.
3. **Action:** Create a new "Project Workspace" in Slack.
4. **Action (The AI Touch):** OpenAI analyzes the client's signup form and writes a "Welcome Pack" email. 

**Why This Sells:**
It makes a 1-person business look like a Fortune 500 company. The professionalism is off the charts.`,
    keyTakeaway: "Automated onboarding is about 'Customer Experience.' A happy customer is a customer who refers others.",
    videos: [
      { title: "Client Onboarding Masterclass in n8n", channel: "David Ondrej", url: "https://www.youtube.com/watch?v=i_j-k9C-A0e", note: "Search for 'Onboarding with Airtable'." },
      { title: "Automating Stripe and Make.com", channel: "Make.com Official", url: "https://www.youtube.com/watch?v=j_k-l9D-B1f", note: "Search for 'Payment automation tutorial'." }
    ],
    resource: "https://www.notion.so/product/notion-projects",
    resourceLabel: "Notion Projects: For Client Management",
    task: "Build a 3-step automation: Typeform Signup → Airtable Record → Welcome Email. Use AI to personalize the subject line."
  },
  {
    day: 17,
    phase: 3,
    phaseTitle: "Building",
    phaseColor: "#00FF88",
    title: "Build #3: AI Business Intelligence Reporter",
    focus: "Full System Build",
    emoji: "📊",
    lecture: `**Insight on Auto-Pilot**

Most business owners have no idea what their numbers were last week. They are too busy working *in* the business.

**The Reporting Architecture:**
1. **The Data Hub:** Pulling data from Sales Data and Social Media.
2. **The Aggregator:** Consolidating all this data into a single Google Sheet.
3. **The Analyst (OpenAI):** We feed the data to GPT-4o. 
   - *Prompt:* "Act as a CFO. Last week we made $X. What is the one thing we should focus on improving next week?"
4. **The Delivery:** Send a formatted email at 8 AM every Monday morning.`,
    keyTakeaway: "Data is useless without insight. Use AI to turn numbers into a strategy the client can use immediately.",
    videos: [
      { title: "Automated Dashboarding with AI", channel: "Nate Herk", url: "https://www.youtube.com/watch?v=k_l-m9E-C2g", note: "Watch his guide on 'Automated Reporting'." },
      { title: "Using Google Sheets with AI Bots", channel: "Corbin AI", url: "https://www.youtube.com/watch?v=l_m-n9F-D3h", note: "Search for 'Airtable Dashboards'." }
    ],
    resource: "https://lookerstudio.google.com/",
    resourceLabel: "Google Looker Studio: Visual Dashboards",
    task: "In a Google Sheet, list 'Sales' and 'Date' for 7 days. Build a Make scenario that pulls those 7 rows, sends them to OpenAI, and gets a 1-paragraph summary."
  },
  {
    day: 18,
    phase: 3,
    phaseTitle: "Building",
    phaseColor: "#00FF88",
    title: "Build #4: AI Customer Support Triage System",
    focus: "Full System Build",
    emoji: "🎧",
    lecture: `**Killing the Infinite Inbox**

Customer support is often the biggest cost for a growing business. 80% of the questions are the same three things: "Where is my order?", "How much?", and "Can I book?".

**The Triage Workflow:**
1. **Trigger:** New support ticket (Zendesk or Gmail).
2. **Step 1: Sentiment Analysis:** OpenAI checks if the customer is "Happy or Furious."
3. **Step 2 (The Triage):** 
   - If Furious → Alert the Manager.
   - If Billing → Search the Knowledge Base and draft a response.
   - If Meeting → Send a link to Calendly automatically.`,
    keyTakeaway: "AI doesn't have to 'solve' everything. It just needs to 'filter' the easy stuff so humans can solve the hard stuff.",
    videos: [
      { title: "Full AI Support Agent in Make.com", channel: "AI Jason", url: "https://www.youtube.com/watch?v=m_n-o9G-E4i", note: "Watch the 'Customer Support Agent' video." },
      { title: "Sentiment Analysis with OpenAI APIs", channel: "Nate Herk", url: "https://www.youtube.com/watch?v=n_o-p9H-F5j", note: "Search for 'Categorization with AI'." }
    ],
    resource: "https://www.zendesk.com/marketplace/",
    resourceLabel: "Explore the Zendesk API Marketplace",
    task: "Build a 'Triage' flow: Email enters → AI decides if it's 'Urgent' or 'Not Urgent' → Slack notification only for 'Urgent' emails."
  },
  {
    day: 19,
    phase: 3,
    phaseTitle: "Building",
    phaseColor: "#00FF88",
    title: "Build #5: The LinkedIn/WhatsApp Content Machine",
    focus: "Integrated Systems",
    emoji: "📱",
    lecture: `**The Social Media Powerhouse**

In Week 2, we learned to repurpose content. Now, we build the *Full Integrated Machine*.

**The Architecture:**
1. **Trigger:** You add a video link into an Airtable field.
2. **Action:** OpenAI transcribes and drafts the content.
3. **Action:** We use the 'Summary' to automatically generate a branded image via Canva API.
4. **The Publisher:** Once you tick 'Approved', Make.com sends it to **Buffer** to be posted.

**WhatsApp Status Integration:**
In Nigeria, WhatsApp Status is powerful. You can use an API like **Wati** to automatically push your content to a 'Broadcast List'.`,
    keyTakeaway: "A great content machine doesn't just create; it distributes. Make the 'distribution' part as automated as the 'creation' part.",
    videos: [
      { title: "Automated Content Calendar Build", channel: "Nate Herk", url: "https://www.youtube.com/watch?v=o_p-q9I-G6k", note: "Search for 'Automated Social Media Strategy'." },
      { title: "Using the Canva API with Make", channel: "Make.com Official", url: "https://www.youtube.com/watch?v=p_q-r9J-H7l", note: "Watch the 'Bulk Create with AI' guide." }
    ],
    resource: "https://www.wati.io/",
    resourceLabel: "Wati: WhatsApp Business API Solutions",
    task: "Create a Canva template. Figure out how to use 'Bulk Create' from a CSV file (which you can generate from your Make scenario)."
  },
  {
    day: 20,
    phase: 3,
    phaseTitle: "Building",
    phaseColor: "#00FF88",
    title: "Packaging Service: Your Offer Menu",
    focus: "Business Operations",
    emoji: "📦",
    lecture: `**Don't Sell Your Time, Sell Your Systems**

By Day 20, you have built enough to be an expert. Now, we must turn these "Builds" into a "Service Menu" for **JayKayDee Tech**.

**The Three-Tier Pricing Strategy:**
1. **The 'Starter' — ₦150k:** Single Automation (e.g., Onboarding).
2. **The 'Growth' — ₦500k:** Full Lead Gen + Support Suite.
3. **The 'Enterprise' — ₦1.5M+:** Voice Agents + Custom RAG.

**The Power of the 'Retainer':**
Every project *must* have a monthly maintenance fee (₦50k+). 
- Software APIs break. 
- LLMs update. 
The retainer ensures the client's systems stay alive and you have recurring monthly income.`,
    keyTakeaway: "Specific products sell faster than vague services. Turn your favorite build into a named 'Productized Service' today.",
    videos: [
      { title: "How to Price AI Automation Projects", channel: "Liam Ottley", url: "https://www.youtube.com/watch?v=q_r-s9K-I8m", note: "The logic behind high-ticket service pricing." },
      { title: "Creating a Productized Agency Offer", channel: "David Ondrej", url: "https://www.youtube.com/watch?v=r_s-t9L-J9n", note: "How to package your builds for rapid sales." }
    ],
    resource: "https://www.hellobonsai.com/blog/productized-services/",
    resourceLabel: "The Guide to Productizing Your Tech Agency",
    task: "Create a 1-page Google Doc. Write your 'Phase 1' Offer: Name, What it Solves, Price, and ROI."
  },
  {
    day: 21,
    phase: 3,
    phaseTitle: "Building",
    phaseColor: "#00FF88",
    title: "Week 3 Review: Finalizing Your Demo Library",
    focus: "Asset Creation",
    emoji: "🏁",
    lecture: `**Proof Over Promises**

At the end of Week 3, you are no longer a "student." You are a service provider with a catalog of solutions. 

**The 'Loom' Strategy:**
Clients don't want to read a proposal. They want to *see* it working. 
- Record yourself for 3 minutes for each of your 5 builds. 
- Talk through the "Input" and show the "Output." 

**Refining Your Bio:**
"I help high-impact businesses in Nigeria save 20+ hours a week by building custom AI agents and automation systems."`,
    keyTakeaway: "A working demo is the strongest marketing you possess. Record your builds today.",
    videos: [
      { title: "Building an AI Agency Portfolio", channel: "Liam Ottley", url: "https://www.youtube.com/watch?v=s_t-u9M-K9o", note: "How to showcase your work to high-ticket clients." },
      { title: "Perfect Sales Demos with Loom", channel: "Corbin AI", url: "https://www.youtube.com/watch?v=t_u-v9N-L0p", note: "Search for 'Loom for Sales'." }
    ],
    resource: "https://www.loom.com/blog/how-to-use-loom-for-sales/",
    resourceLabel: "Loom: Selling with Video",
    task: "Record a 3-minute video of your favorite automation from this week. Upload it and send the link to a friend to see if they understand it."
  }
];
