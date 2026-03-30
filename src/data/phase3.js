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

Lead generation is the "lowest hanging fruit" in AI Automation. Every business wants more customers, but most hate the process of finding and messaging them. 

**The Full Architecture (The Workflow):**
1. **The Source (Apollo.io / LinkedIn):** We search for our ideal clients. 
   - *Example:* "Hospitals in Lagos with 50+ employees."
2. **The Enrichment (Clay / Waterfall Scrapers):** We take that list and find the CEO's specific email address and their recent LinkedIn posts.
3. **The "Reasoning" Step (OpenAI):** We give the AI the CEO's recent post and say, "Write a 3-sentence email. Sentence 1: Comment on their post. Sentence 2: Mention how JayKayDee Tech helped a similar hospital. Sentence 3: Ask for a 15-min call."
4. **The Delivery (Instantly.ai / Smartlead):** We send the email through a specialized "Cold Email" platform to ensure it lands in the Inbox, not the Spam folder.

**Personalization at Scale (The AI Advantage)**
In the old world, a human could write 10 personalized emails a day. With this machine, you can write **1,000 personalized emails in 20 minutes.** 

**Technical Configuration Tip:**
In Make.com, use a "Sleep" module (found under Tools) to wait 2-3 minutes between each email. Sending too many emails at once can get your Gmail/Outlook account banned. 

**The ROI for the Client:**
If a salesperson spends 40 hours a month on lead gen, that's a cost of ₦120,000+. Your system costs ₦30k in software + your setup fee. You are saving the client time and increasing their sales pipeline.`,
    keyTakeaway: "Personalization is the bridge to a response. Generic emails are ignored. AI is the only way to scale true personalization.",
    videos: [
      { title: "Building an AI Lead Gen System", channel: "Nate Herk", url: "https://www.youtube.com/@NateHerk", note: "Watch the 'Cold Email Automation' guide." },
      { title: "How to use Apollo.io with Make", channel: "Liam Ottley", url: "https://www.youtube.com/@LiamOttley", note: "Search for 'Prospecting with AI'." }
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

When a client pays, they are anxious. "Did I make a mistake?" If they don't hear from the business for 24 hours, buyers' remorse kicks in. 

**The Onboarding Workflow:**
1. **Trigger:** A new payment is made in Stripe, or a contract is signed in DocuSign.
2. **Action:** Create a "Client Folder" in Google Drive.
3. **Action:** Create a new "Project Workspace" in Notion/Slack.
4. **Action (The AI Touch):** OpenAI analyzes the client's signup form (from Day 4) and writes a "Welcome Pack" email. 
   - *Example:* "Hi Dr. Emeka, I see your lab is focusing on Hematology this month. I've attached a special onboarding guide for Lab result automation."
5. **Action:** Schedule a follow-up email 7 days later: "How is the setup going? Here is a video tutorial."

**Why This Sells:**
It makes a 1-person business look like a Fortune 500 company. The professionalism is off the charts. 

**Technical Implementation:**
Use **Airtable** as your "Source of Truth." When the payment is triggered, the status in Airtable changes from "Lead" to "Active Client." This change in status triggers the entire onboarding sequence. 

**The Healthcare Twist:**
For a Medical Lab, the "Client" is the patient. 
*Onboarding:* After the test is taken → Send WhatsApp "Welcome to JayKayDee Lab. Here is a video explaining our testing process. You will receive your results in 48 hours." This reduces patient anxiety and phone calls to the front desk.`,
    keyTakeaway: "Automated onboarding is about 'Customer Experience.' A happy customer is a customer who refers others.",
    videos: [
      { title: "Client Onboarding Masterclass", channel: "David Ondrej", url: "https://www.youtube.com/@DavidOndrej", note: "Search for 'Onboarding with Airtable'." },
      { title: "Using Stripe with Make.com", channel: "Make.com Official", url: "https://www.youtube.com/@make_hq", note: "Search for 'Payment automation tutorial'." }
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

Most business owners have no idea what their numbers were last week. They are too busy working *in* the business to work *on* the business.

**The Reporting Architecture:**
1. **The Data Hub:** Pulling data from 3 sources (Google Analytics, Quickbooks/Sales Data, and Social Media Meta Business Suite).
2. **The Aggregator:** Consolidating all this data into a single Google Sheet.
3. **The Analyst (OpenAI):** We feed the last 7 days of data to GPT-4o. 
   - *Prompt:* "Act as a CFO. Last week we made $X, spent $Y on ads, and got Z leads. Compare this to the previous week. What is the one thing we should focus on improving next week?"
4. **The Delivery:** Send a formatted email or a Slack message at 8 AM every Monday morning.

**Anomaly Detection (Advanced):**
You can add a step that says: "If Website Traffic drops by more than 20% compared to last week, send an URGENT alert to the CEO." This is "Predictive Support."

**Pricing Model:**
This is perfect for **Retainers**. ₦150k setup + ₦50k/month to keep the reports running. You are providing "Brainpower" as a service.

**The Medical Lab Context:**
- *Weekly Report:* How many tests were conducted? Which test was most popular (Malaria vs Typhoid)? What was the average turnaround time? 
This helps the lab manager decide whether to buy more reagents or hire more staff.`,
    keyTakeaway: "Data is useless without insight. Use AI to turn numbers into a strategy the client can use immediately.",
    videos: [
      { title: "Automated Dashboarding with AI", channel: "Nate Herk", url: "https://www.youtube.com/@NateHerk", note: "Watch his guide on 'Automated Reporting'." },
      { title: "Google Sheets Functions for Automation", channel: "Corbin AI", url: "https://www.youtube.com/@CorbinBrown", note: "Search for 'Airtable Dashboards'." }
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

Customer support is often the biggest cost for a growing business. 80% of the questions are the same three things: "Where is my order?", "How much do you charge?", and "Can I book a meeting?".

**The Triage Workflow:**
1. **Trigger:** New support ticket (Zendesk, Freshdesk, or a simple Gmail).
2. **Step 1: Sentiment Analysis:** OpenAI checks if the customer is "Happy, Neutral, or Furious."
3. **Step 2: Category Search:** "Is this about Billing, Technical Support, or General info?"
4. **Step 3 (The Triage):** 
   - If Furious → Alert the Manager immediately.
   - If Billing → Search the Knowledge Base (RAG from Day 9) and draft a response.
   - If Meeting → Send a link to the Calendly page automatically.

**Confidence Scoring (Professional Grade):**
In your Prompt, ask the AI to provide a "Confidence Score" from 1-10. 
- *If Score > 9:* Send the response automatically. 
- *If Score < 9:* Send it to a human for "Review" before it goes to the customer.

**Why Businesses Buy This:**
It reduces the need for expensive customer service staff. You can tell a client: "Instead of hiring two virtual assistants at ₦100k/month each, pay me ₦150k once, and this system will do 80% of their work."

**The Laboratory Success Story:**
Support Triage for a Lab: "When will my result be ready?" → AI checks Airtable → Sees result is still 'Pending' → AI replies "Your Hematology test normally takes 24 hours. We expect it by 4 PM today." No human needed!`,
    keyTakeaway: "AI doesn't have to 'solve' everything. It just needs to 'filter' the easy stuff so humans can solve the hard stuff.",
    videos: [
      { title: "Full AI Support Build in Make.com", channel: "AI Jason", url: "https://www.youtube.com/@AIJasonZ", note: "Watch the 'Customer Support Agent' video." },
      { title: "Sentiment Analysis with OpenAI", channel: "Nate Herk", url: "https://www.youtube.com/@NateHerk", note: "Search for 'Categorization with AI'." }
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
1. **Trigger:** You add a video link or a new "Topic" into an Airtable field called 'Raw Content'.
2. **Action:** OpenAI transcribes and drafts the content (Day 10).
3. **The Image Generator (Midjourney / Canva API):** We use the 'Summary' to automatically generate a branded image or a quote card. 
   - *Example:* "Top 3 tips for health in Jos."
4. **The Scheduling Queue:** All posts (Text + Image) go to an 'Approval Queue' in Airtable.
5. **The Publisher:** Once you tick a box called 'Approved', Make.com sends it to **Buffer** or **Publer** to be posted at 6 PM.

**WhatsApp Status Integration (The Nigerian Special):**
In Nigeria, WhatsApp Status is as powerful as LinkedIn. You can use an API like **Wati** or **Wa.me** to automatically push your new content to a 'Broadcast List' of your clients. 

**Pricing This:**
"Content Engine Setup" — ₦250,000. 
"Monthly Content Support (15 posts/month)" — ₦80,000/month. 
You are saving the client from hiring a standard social media manager who might not understand the niche as well as your AI (trained on their custom data) does.`,
    keyTakeaway: "A great content machine doesn't just create; it distributes. Make the 'distribution' part as automated as the 'creation' part.",
    videos: [
      { title: "Automated Content Calendar Build", channel: "Nate Herk", url: "https://www.youtube.com/@NateHerk", note: "Search for 'Automated Social Media Strategy'." },
      { title: "Canva API and Make.com", channel: "Make.com Official", url: "https://www.youtube.com/@make_hq", note: "Watch the 'Bulk Create with AI' guide." }
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

1. **The 'Starter' (The Hook) — ₦150k - ₦250k:**
   - Single Automation (e.g., Lead Capture or Onboarding).
   - "Workflow Audit" (Free with setup).
   - 30 days of free bug-fixing.
   - *Goal:* Get your foot in the door.

2. **The 'Growth' (The Suite) — ₦400k - ₦600k:**
   - The Lead Gen Machine + Triage Support System.
   - Reporting Dashboard.
   - Training for the client's staff.
   - *Goal:* This is your core profit.

3. **The 'Enterprise/Custom' — ₦1.5M+:**
   - Full AI Voice Agent Deployment.
   - Custom RAG Knowledge Base for internal staff.
   - Weekly high-level strategy calls.
   - *Goal:* High-value, long-term partners.

**The Power of the 'Retainer' (Maintenance):**
Every project *must* have a monthly maintenance fee (₦50k - ₦150k). 
- Software APIs break. 
- LLMs update. 
- Clients want small changes.
The retainer ensures the client's systems stay alive and you have a predictable, recurring monthly income.

**Naming Your Services:**
Don't call it "Make.com scenario." Call it the "Instant Patient Notification System" or the "Law Firm Intake Engine." Use names that describe the **Benefit**.`,
    keyTakeaway: "Specific products sell faster than vague services. Turn your favorite build into a named 'Productized Service' today.",
    videos: [
      { title: "How to Price your Agency Work", channel: "Liam Ottley", url: "https://www.youtube.com/@LiamOttley", note: "Watch his video on 'Subscription based agency model'." },
      { title: "Creating a Productized Service", channel: "Greg Isenberg", url: "https://www.youtube.com/@GregIsenberg", note: "Search for 'Low-frequency, high-value' services." }
    ],
    resource: "https://www.hellobonsai.com/blog/productized-services/",
    resourceLabel: "The Guide to Productizing Your Tech Agency",
    task: "Create a 1-page Google Doc. Write your 'Phase 1' Offer: Name, What it Solve, Price, and ROI."
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

**The 'Loom' Strategy (Your Secret Weapon):**
Clients don't want to read a proposal. They want to *see* it working. 
- Using a tool called **Loom**, record yourself for 3 minutes for each of your 5 builds. 
- Talk through the "Input" and show the "Output." 
- *Example:* "Hi, I'm Jude. Watch how this hospital lead gem machine finds 5 hospitals and writes personalized emails..." 

**Your Portfolio structure:**
- **Build 1:** Lead Gen (The Revenue Engine).
- **Build 2:** Onboarding (The Customer Experience).
- **Build 3:** Support Triage (The Time Saver).
- **Build 4:** Content Repurposer (The Brand Builder).
- **Build 5:** The Health-Niche Demo (Your Competitive Edge).

**Refining Your Bio:**
"I am Jude, founder of JayKayDee Tech. We help high-impact businesses in Nigeria and beyond save 20+ hours a week by building custom AI agents and automation systems."

**The Bridge to Week 4:**
Next week is **Sals Mastery**. We stop building and start hunting. I will teach you how to get into the DMs of CEOs, how to run a discovery call, and how to get your first ₦250k deposit. 

Rest well this weekend. You have built an incredible foundation.`,
    keyTakeaway: "A working demo is the strongest marketing you possess. Record your builds today.",
    videos: [
      { title: "How to Build a Portfolio that Sells", channel: "Liam Ottley", url: "https://www.youtube.com/@LiamOttley", note: "Watch the 'Value-based portfolio' video." },
      { title: "Recording Professional Demo Videos", channel: "Corbin AI", url: "https://www.youtube.com/@CorbinBrown", note: "Search for 'Loom for Sales'." }
    ],
    resource: "https://www.loom.com/blog/how-to-use-loom-for-sales/",
    resourceLabel: "Loom: Selling with Video",
    task: "Record a 3-minute video of your favorite automation from this week. Upload it and send the link to a friend to see if they understand it."
  }
];
