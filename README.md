# 🎓 StudyPilot AI

**Your AI-powered study planner and quiz assistant**

> Plan smarter. Practise better. Learn with AI.

<p align="center">
  <img src="product_image.jpg" alt="StudyPilot AI Product Image" width="220">
</p>

<h1 align="center">StudyPilot AI</h1>

<p align="center">
  Your AI-powered study planner and quiz assistant
</p>

<p align="center">
  Plan smarter. Practise better. Learn with AI.
</p>

<p align="center">
  <a href="https://skills-invited-deleted-baghdad.trycloudflare.com">Live Demo</a> ·
  <a href="https://github.com/Sakethram2005/agentmaxxing">GitHub</a> ·
</p>

<p align="center">
  <a href="https://x.com/StudyPilotAI_">Product on X</a> ·
  <a href="https://x.com/SakethRam311820">Personal X</a>
</p>

## 🚀 About the Project

StudyPilot AI is a Gemini-powered AI agent designed to help students organize their learning. Students can generate structured study schedules, create multiple-choice quizzes, check their agent wallet, roll dice, and retrieve weather information through a paid API demonstration.

**Problem it solves:** Students often struggle to divide a syllabus into manageable daily tasks and create practice questions for revision. StudyPilot AI brings these study utilities together through a conversational AI agent that selects and invokes tools based on user requests.

## ✨ Key Features

- **AI Study Planning:** Generate study schedules from a subject, available days, daily study hours, and topics.
- **Quiz Generation:** Generate multiple-choice questions with four options, correct answers, and explanations.
- **Wallet Integration:** Check the agent's wallet address and ETH balance on Base Sepolia.
- **Dice Rolling:** Roll dice with a configurable number of sides.
- **Paid Weather API Demo:** Demonstrates the x402-style payment flow for weather requests.
- **Tool Calling:** Gemini selects tools, supplies structured arguments, and uses their results to formulate responses.
- **Interactive Web Interface:** Chat with the agent and inspect tool activity.

## 🛠️ Tech Stack

Versions below reflect the project's package configuration and deployment environment. The listed package versions may be ranges in `package.json`.

| Technology | Version |
|---|---|
| Node.js | 24.21.0 (EC2 environment) |
| npm | 11.19.0 (EC2 environment) |
| Next.js | 16.3.8 (deployed build) |
| React | 19.3.x |
| TypeScript | 5.9.x |
| Tailwind CSS | 4.3.x |
| Google Gen AI SDK | `@google/genai` 2.24.x |
| viem | 2.56.x |
| AI model | Gemini, configured as `gemini-flash-latest` |
| Deployment | AWS EC2 + Cloudflare Quick Tunnel |
| Network | Base Sepolia testnet |

The configured Gemini model identifier is an alias, not a pinned model snapshot. This project currently uses one configured model and does not provide a model-switching feature.

## 🧰 Supported Tools

1. **`get_weather`** — Fetch weather information for a city through the paid API demonstration.
2. **`get_my_wallet`** — Retrieve the agent's wallet address and ETH balance on Base Sepolia.
3. **`roll_dice`** — Roll a dice with a specified number of sides.
4. **`study_planner`** — Create a study schedule using a subject, number of days, daily hours, and topics.
5. **`quiz_generator`** — Generate structured multiple-choice quizzes with answer options and explanations.

## 🏗️ How It Works

1. The user sends a request through the web interface.
2. The agent sends the request and available tool definitions to Gemini.
3. Gemini selects an appropriate tool and provides its arguments.
4. The corresponding TypeScript function executes and returns its result.
5. The agent uses the tool result to generate a natural-language response.

## 🎬 Demo

**Live Demo:** [Open StudyPilot AI](https://skills-invited-deleted-baghdad.trycloudflare.com)

**Week 1 Demo Video:** Add your publicly accessible demo-video URL here.

### Weekly Demo Links

- Week 1 (studypilot-ai.v1): Add your demo-video link
- Week 2 (studypilot-ai.v2): Planned
- Week 3 (studypilot-ai.v3): Planned

## 🔮 Future Scope

- **Week 2:** Improve quiz generation, add difficulty customization, improve study-plan scheduling, and explore more x402-enabled API integrations.
- **Week 3:** Explore Zero-Knowledge (ZK) integration, persistent learning preferences, progress tracking, and additional agent tools.
- Improve deployment reliability with a stable public domain and persistent hosting configuration.
- Add automated tests and stronger input validation.

These are planned improvements, not features currently claimed as implemented.

## 🔐 Security Notes

- Keep `GEMINI_API_KEY` in your environment configuration.
- Never commit `.env` or `.agent-wallet.json`.
- Use test wallets and Base Sepolia test assets only.
- The weather payment flow demonstrates signed payment handling; it does not represent a real on-chain transfer of funds.

## 💻 Run Locally

### Prerequisites

- Node.js 20 or newer
- npm
- A Google Gemini API key

### Setup

```bash
git clone https://github.com/Sakethram2005/agentmaxxing.git
cd agentmaxxing
npm install
```

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-flash-latest
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

```text
agentmaxxing/
├── agent/
│   ├── agent.ts
│   ├── tools.ts
│   └── wallet.ts
├── app/
│   ├── api/
│   └── page.tsx
├── components/
├── public/
├── .env
├── package.json
└── README.md
```

## 🌐 Links

- **GitHub Repository:** https://github.com/Sakethram2005/agentmaxxing
- **Live Demo:** https://skills-invited-deleted-baghdad.trycloudflare.com
- **Product X/Twitter:** Add your dedicated product account URL
- **Builder X/Twitter:** Add your personal profile URL

## 🙌 Acknowledgements

Built using the Agentmaxxing starter kit as part of the Rise In Agentmaxxing program.

