export const phase2 = [
  {
    day: 8,
    phase: 2,
    phaseTitle: "AI Integration",
    phaseColor: "#FFB800",
    title: "The AI Brain: Connecting LLMs to Your Flows",
    focus: "AI Core & APIs",
    emoji: "🧠",
    lecture: `**Integrating Intelligence: The API-First Mindset**

In Phase 1, we learned to move data. In Phase 2, we learn to *think* with it. To do this, we use the OpenAI API (or similar from Anthropic/Google). 

**What is an API exactly?**
Think of an API (Application Programming Interface) as a waiter in a restaurant. You (the client) give an order (the prompt) to the waiter (the API), who takes it to the kitchen (the LLM server). The kitchen cooks the food (generates text) and the waiter brings it back to your table.

**Connecting OpenAI to Make.com/n8n**
1. **The API Key:** This is your password to the 'kitchen.' Never share this.
2. **The Prompt:** This is your instruction. 
3. **The System Prompt (Role):** This is the most important part. You tell the AI: "You are an expert medical lab technician in Jos, Nigeria." This sets the context and tone.
4. **The User Prompt (Task):** "Here is a lab result: [DATA]. Summarize it for a patient in plain English."

**Understanding 'Parameters' for Professional Output:**
- **Temperature (0 to 1):** 0 = Strict and predictable (use for data extraction). 1 = Creative and varied (use for blog writing).
- **Model Choice:** 
  - *gpt-4o-mini:* Extremely fast and cheap. Use for 90% of basic tasks.
  - *gpt-4o:* High reasoning. Use for complex logic and deep analysis.
- **Max Tokens:** Setting a limit prevents the AI from 'rambling' and saves you money.

**Practical Build: The Intelligent Email Classifier**
Imagine a business getting 100 emails a day. 
*Trigger:* New Email. 
*Action:* Send email text to OpenAI. 
*Prompt:* "Is this a billing issue, a support request, or a sales lead? Respond with only one word."
*Action:* Router based on that word. 

Suddenly, your 'simple' automation is a 'smart' triage system.`,
    keyTakeaway: "Prompt engineering is the new programming language. The more specific your instructions, the more consistent the AI's performance.",
    videos: [
      { title: "Connecting OpenAI to Make.com", channel: "Nate Herk", url: "https://www.youtube.com/@NateHerk", note: "Search for 'OpenAI Make.com 2024'." },
      { title: "System Prompts vs User Prompts", channel: "Corbin AI", url: "https://www.youtube.com/@CorbinBrown", note: "Watch his guide on 'Better Prompting'." }
    ],
    resource: "https://platform.openai.com/docs/guides/prompt-engineering",
    resourceLabel: "The Official OpenAI Prompt Engineering Guide",
    task: "Get an OpenAI API key (add $5 credit). Create a Make.com scenario that takes a 'Company Name' and uses AI to write a 1-sentence 'Value Proposition' for them."
  },
  {
    day: 9,
    phase: 2,
    phaseTitle: "AI Integration",
    phaseColor: "#FFB800",
    title: "RAG Systems: Giving AI Your Client's Data",
    focus: "Knowledge Bases",
    emoji: "🤖",
    lecture: `**The Problem with 'Raw' AI**
If you ask ChatGPT, "What are the lab hours at JayKayDee Clinic in Jos?", it won't know. It will likely 'hallucinate' (make up an answer). 

**The Solution: RAG (Retrieval-Augmented Generation)**
RAG is the gold standard for business chatbots. It works in three steps:
1. **The Library:** You upload the client's documents (PDFs, FAQs, prices) to a database.
2. **The Search:** When a customer asks a question, the system searches the library for the relevant 1-2 paragraphs.
3. **The Answer:** The system gives those paragraphs to the AI and says, "Answer the customer's question ONLY using this information."

**Tools for No-Code RAG:**
- **Relevance AI:** The absolute fastest way to build a RAG chatbot. You upload a PDF, and it handles the rest.
- **Voiceflow:** Best for building visual 'conversational' bots for websites or WhatsApp.
- **Botpress:** Extremely powerful, but has a higher learning curve.

**Why RAG is a High-Ticket Service:**
A standard chatbot is a commodity. A "Knowledge-Base Chatbot" that can answer specific questions about a clinic's services or a law firm's caseload is a specialized business tool. 
*Pricing Tip:* You can charge a ₦150k setup fee and a ₦40k monthly 'Knowledge Maintenance' fee to keep the library updated.

**Practical Exercise:**
1. Create a fake FAQ document for a school in Plateau State.
2. Upload it to Relevance AI.
3. Ask the chatbot three questions. Ensure it only answers based on your document.`,
    keyTakeaway: "RAG eliminates hallucinations. It makes the AI reliable enough for customer-facing business tasks.",
    videos: [
      { title: "Building a RAG Bot with Relevance AI", channel: "Liam Ottley", url: "https://www.youtube.com/@LiamOttley", note: "This video is essential for beginners." },
      { title: "Voiceflow vs Botpress", channel: "AI Jason", url: "https://www.youtube.com/@AIJasonZ", note: "Search for his 2024 comparison." }
    ],
    resource: "https://relevanceai.com/library/",
    resourceLabel: "Relevance AI: Example Templates",
    task: "Build a mini-Knowledge Base in Relevance AI for a 'Medical Lab.' Upload a sample price list and test the bot."
  },
  {
    day: 10,
    phase: 2,
    phaseTitle: "AI Integration",
    phaseColor: "#FFB800",
    title: "Content Pipelines: The Repurposing Machine",
    focus: "Content Automation",
    emoji: "✍️",
    lecture: `**From One Input to Thirty Outputs**

Every business knows content is king, but most businesses are too busy to create it. This is a massive opportunity for you to sell "Content-as-a-Service" using AI.

**The Master-Repurposing Workflow:**
1. **Input:** The client records a 10-minute voice note on their phone (WhatsApp) or uploads a YouTube link.
2. **Transcription:** We use OpenAI's **Whisper API** to turn that audio into perfect text.
3. **Drafting:** We send the text to Claude 3.5 Sonnet (the best writer) with instructions to:
   - "Write 5 Twitter/X threads based on Part A."
   - "Write a LinkedIn article for the CEO's profile."
   - "Create 3 Instagram captions with emojis."
   - "Write a weekly newsletter summarizing the main points."

**Dynamic Scraping with Apify**
Sometimes your 'input' isn't a voice note, but a competitor's website or a news feed. 
- Tools like **Apify** allow you to "scrape" the web automatically. 
- You can build a system that watches for news about "Health Tech in Africa" → Summarizes it → Posts it to the client's social media with an automated comment.

**The 'Human-in-the-Loop' Rule**
Never automate 100% of social media content. It looks robotic and can damage a brand.
*The Agency Standard:* Automation generates the drafts in an Airtable queue. The client gets a Slack alert. The client clicks 'Approve' or 'Edit' before it actually goes live. 
*You are selling the system, not just the AI.*`,
    keyTakeaway: "Automate the formatting and the drafting, but leave the high-level approval to the human. Quality over quantity.",
    videos: [
      { title: "Full Content Repurposing Suite Build", channel: "Nate Herk", url: "https://www.youtube.com/@NateHerk", note: "Search for 'Content Flywheel Make.com'." },
      { title: "Using Apify with Make.com", channel: "Corbin AI", url: "https://www.youtube.com/@CorbinBrown", note: "Watch his 'Automated News Site' tutorial." }
    ],
    resource: "https://apify.com/store",
    resourceLabel: "Explore the Apify Store",
    task: "Build a flow: Send a news article URL to OpenAI → Get back a 3-sentence summary + 5 relevant hashtags → Save to Airtable."
  },
  {
    day: 11,
    phase: 2,
    phaseTitle: "AI Integration",
    phaseColor: "#FFB800",
    title: "Document Intelligence: Making AI Read PDFs",
    focus: "OCR & Data Extraction",
    emoji: "📄",
    lecture: `**The End of Manual Data Entry**

Document Intelligence is where "Automation" turns into "Value." 
Imagine a hospital in Jos receiving 500 supplier invoices a month. A staff member currently types all that data into Excel. This takes weeks and is full of errors.

**How Document AI Works:**
1. **OCR (Optical Character Recognition):** Turning a picture/PDF into text.
2. **Parsing:** The AI identifies the Vendor Name, Total Amount, Due Date, and the specific items purchased.
3. **Mapping:** Sending that data to the accounting software.

**Tools for Document AI:**
- **OpenAI Vision:** GPT-4o can literally 'view' an image and extract data. This is cheap and effective for simple PDFs.
- **Eden AI:** Connects to 10+ different OCR providers (Google, AWS, Azure). Use this for high-volume or messy documents.
- **Nanonets:** High-end enterprise tool for document extraction.

**The Structured Output Prompt (Crucial for Builders):**
When asking AI to read a document, always ask for **JSON**. 
*Why?* JSON is a format that computers understand perfectly. 
*Prompt snippet:* "Extract the 'Total Amount'. Respond ONLY with a JSON object like this: {'total': 500}."
Now, your Make.com scenario can use that '500' without any extra cleaning.

**The Medical Opportunity:**
You can build a system that reads lab results (PDF or handwritten) and extracts patient names, tests conducted, and abnormal values to alert the doctor immediately. This is high-value healthcare tech.`,
    keyTakeaway: "If it can be scanned, it can be automated. Document intelligence is the fastest way to prove ROI to a technical client.",
    videos: [
      { title: "AI Invoice Processor Build", channel: "AI Jason", url: "https://www.youtube.com/@AIJasonZ", note: "Watch him use GPT-4o Vision for extraction." },
      { title: "Everything you need to know about JSON", channel: "Programming with Mosh", url: "https://www.youtube.com/@programmingwithmosh", note: "Search for 'JSON in 2 minutes'." }
    ],
    resource: "https://edenai.run/ocr-data-extraction",
    resourceLabel: "Eden AI: OCR Documentation",
    task: "Download a sample invoice. Upload it to a Make.com scenario using GPT-4o Vision. Extract the 'Total Amount' and name the output 'Invoice_Value'."
  },
  {
    day: 12,
    phase: 2,
    phaseTitle: "AI Integration",
    phaseColor: "#FFB800",
    title: "Voice Agents: The Next Frontier",
    focus: "Voice AI & Telephony",
    emoji: "📞",
    lecture: `**AI That Can Talk on the Phone**

Voice AI is the 'trending' topic of 2024. Most business owners are terrified of answering the phone all day. You can build AI agents that answer the phone 24/7.

**The Stack of a Voice Agent:**
1. **STT (Speech-to-Text):** Turning what the caller says into text (Deepgram).
2. **The LLM (Brain):** GPT-4o-mini decidirng what to say next.
3. **TTS (Text-to-Speech):** Turning the AI's response into a human-sounding voice (ElevenLabs or PlayHT).
4. **Telephony:** Connecting this to a real phone number (Twilio).

**The Magic Short-Cut: VAPI.ai and Bland.ai**
Building this stack manually is hard. Platforms like **VAPI** allow you to build an agent in 10 minutes.
- You pick a voice (make it sound like a friendly Nigerian professional).
- You give it a script: "You are an assistant for JayKayDee Lab. Ask the patient for their name and reference number."
- You connect a phone number.

**Use Cases That Sell:**
- **Inbound Support:** "I want to check if my results are ready."
- **Outbound Appointment Confirmation:** "Hi, this is Jude's AI assistant. Are you still coming for your 2 PM appointment tomorrow?"
- **Real Estate Qualifier:** "What is your budget for a 2-bedroom in Rayfield?"

**Price Strategy:**
Clients pay per minute. In Nigeria, human call centers are cheap, but the AI never gets tired, never goes on break, and never forgets to ask a question. 
*Agency Pricing:* ₦200k Setup + ₦50k/month platform management + Client pays for usage.`,
    keyTakeaway: "Voice AI is the most 'impressive' demo you can show a client. Seeing is believing, but *hearing* is buying.",
    videos: [
      { title: "Building your first VAPI Agent", channel: "Liam Ottley", url: "https://www.youtube.com/@LiamOttley", note: "Watch the 'AI Phone Agent' live build." },
      { title: "ElevenLabs Voice Cloning Guide", channel: "David Ondrej", url: "https://www.youtube.com/@DavidOndrej", note: "Search for 'ElevenLabs 2024 Tutorial'." }
    ],
    resource: "https://vapi.ai/",
    resourceLabel: "VAPI AI: Getting Started",
    task: "Create a VAPI account. Create an 'Inbound Assistant' for a fictional clinic and 'Talk' to it using the web demo tool."
  },
  {
    day: 13,
    phase: 2,
    phaseTitle: "AI Integration",
    phaseColor: "#FFB800",
    title: "AI Agents: Automations That Act",
    focus: "Autonomous AI",
    emoji: "🕵️",
    lecture: `**From Workflows to Agents**

A "Workflow" is a fixed sequence (A → B → C). An "Agent" is an AI that has **Tools** and a **Goal**. 

**The Agent Model:**
- **Goal:** "Find 10 hospitals in Jos and get the CEO's contact info."
- **Tools:** Web Search, Website Scraper, CRM Search.
- **Thinking:** The agent looks at the goal, uses the Search tool, finds a hospital, uses the Scraper tool, finds the name, and repeats until the goal is met.

**Why Agents Choose Their Own Path:**
In a standard Make.com scenario, if a website has a pop-up, the automation might break. An Agent sees the pop-up, realizes it needs to "Close the pop-up" or "Try another page," and adapts. 

**Building Agents No-Code:**
- **Relevance AI (Multi-Agent Systems):** You can build one agent to 'Research' and another agent to 'Write' and have them talk to each other.
- **n8n AI Node:** n8n's agent node allows you to connect other workflows as "Tools." 
*Example:* You give the agent a tool called 'Email_Sender'. The agent only uses it when it feels it has a good enough draft.

**The Sales Value of Agents:**
Agents are "Executive Assistants." They save hours of high-level research. 
*Use Case:* An agent that monitors a client's industry news, finds potential partnership opportunities, and drafts a research brief every morning. This is "white-glove" service that justifies high retainers (₦100k+/month).`,
    keyTakeaway: "Workflows are for repetitive data tasks. Agents are for complex research and decision-making tasks.",
    videos: [
      { title: "Building AI Agents in n8n", channel: "n8n Official", url: "https://www.youtube.com/@n8n-io", note: "Search for 'n8n LangChain agent tutorial'." },
      { title: "The Rise of Autonomous AI", channel: "AI Jason", url: "https://www.youtube.com/@AIJasonZ", note: "Watch his video on 'Custom GPTs vs Agents'." }
    ],
    resource: "https://docs.n8n.io/advanced-ai/langchain/agents-and-tools/",
    resourceLabel: "n8n: Agent & Tooling Documentation",
    task: "In n8n or Relevance AI, create an agent that has ONE tool (Serper/Google Search). Give it the goal: 'Find the current exchange rate of Naira to USD'."
  },
  {
    day: 14,
    phase: 2,
    phaseTitle: "AI Integration",
    phaseColor: "#FFB800",
    title: "Week 2 Review: Finding Your Niche",
    focus: "Strategic Dominance",
    emoji: "🎯",
    lecture: `**The Power of Specialization**

We have spent two weeks learning the technical 'What.' Now we focus on the 'Who.' 

**Why You Must Niche Down:**
If you tell a business, "I am an AI Automation specialist," they think "That sounds expensive and technical."
If you tell a Medical Lab, "I specialize in automating Patient Result Delivery and Lab-Doctor workflows," they think "Jude understands my specific pain."

**The 'Healthcare Niche' Blueprint (Your Primary Strength):**
You have an MLS background. This is your "Competitive Advantage."
- You know the terminology (Hematology, PCR, Electrolytes).
- You know the privacy concerns (HIPAA / Patient Secrecy).
- You know the workflow (Order → Sample → Test → Result).

**Your Niche Pitch:**
"I help busy medical labs in Nigeria eliminate the 15+ hours a week staff spend manually notifying patients of results. We do this with HIPAA-compliant AI systems that deliver results instantly via WhatsApp or Email, reducing errors by 99%."

**How to Dominate a Niche:**
1. **Case Study:** Build one perfect demo for a clinic (even if it's fake).
2. **Outreach:** Connect with Lab Managers on LinkedIn or at local medical associations.
3. **Packaging:** Create a "Clinic Automation Bundle" with a fixed price.

**Closing the Week:**
By now, you should have a basic portfolio of 3-4 'Smart' automations. 
- A lead classifier (Day 8).
- A Knowledge-base bot (Day 9).
- A PDF data extractor (Day 11).
You are ready for **Phase 3: The Build Phase**, where we create full, professional systems for real clients.`,
    keyTakeaway: "A generalist is a commodity. A specialist is a partner. Use your medical background to become the #1 Health-Automation expert in Nigeria.",
    videos: [
      { title: "How to Choose an AI Automation Niche", channel: "Liam Ottley", url: "https://www.youtube.com/@LiamOttley", note: "Watch the 'Highest Paying Niches' video." },
      { title: "Sales Strategy for Niche Experts", channel: "David Ondrej", url: "https://www.youtube.com/@DavidOndrej", note: "Search for 'Niche Dominance'." }
    ],
    resource: "https://www.forbes.com/advisor/business/how-to-start-ai-automation-agency/",
    resourceLabel: "Forbes: Growing a Tech Agency",
    task: "Write your 'Niche Statement' (2 sentences). List 5 potential local clients in your target niche. Research what software they currently use."
  }
];
