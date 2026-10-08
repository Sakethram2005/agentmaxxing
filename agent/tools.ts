/**
 * YOUR AGENT'S TOOLS
 *
 * A tool is just a function the agent is allowed to call.
 * Gemini reads description to decide WHEN to use it,
 * parameters to know WHAT to pass in.
 * Add your own tool: copy one of objects below, change it,
 * and save. It shows up in "Tools" list.
 */

import { getWalletAddress, getWalletBalance, payAndFetch } from "./wallet";

export type Tool = {
  name: string;
  description: string;
  parameters: object;
  run: (args: any, ctx: { baseUrl: string }) => Promise<unknown>;
};

export const tools: Tool[] = [
  // 1. Paid API
  {
    name: "get_weather",
    description:
      "Get the current weather for a city. Costs 0.01 USDC, paid automatically from the agent's wallet.",
    parameters: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "City name, e.g. Mumbai",
        },
      },
      required: ["city"],
    },
    run: async ({ city }, { baseUrl }) => {
      return payAndFetch(
        `${baseUrl}/api/weather?city=${encodeURIComponent(city)}`
      );
    },
  },

  // 2. Wallet
  {
    name: "get_my_wallet",
    description:
      "Get the agent's own wallet address and its ETH balance on Base Sepolia (testnet).",
    parameters: {
      type: "object",
      properties: {},
    },
    run: async () => ({
      address: getWalletAddress(),
      balance: await getWalletBalance(),
      network: "Base Sepolia (testnet)",
    }),
  },

  // 3. Plain dice tool
  {
    name: "roll_dice",
    description: "Roll a dice with the given number of sides.",
    parameters: {
      type: "object",
      properties: {
        sides: {
          type: "number",
          description: "How many sides the dice has. Default 6.",
        },
      },
    },
    run: async ({ sides = 6 }) => ({
      rolled: Math.floor(Math.random() * sides) + 1,
      sides,
    }),
  },

  // 4. Custom study planner
  {
    name: "study_planner",
    description:
      "Create a structured study plan based on the subject, number of days, available hours per day, and topics to study.",
    parameters: {
      type: "object",
      properties: {
        subject: {
          type: "string",
          description: "The subject being studied, e.g. Machine Learning.",
        },
        days: {
          type: "number",
          description: "Number of days available for studying.",
        },
        hours_per_day: {
          type: "number",
          description: "Number of hours available per day.",
        },
        topics: {
          type: "array",
          items: {
            type: "string",
          },
          description: "List of topics that need to be studied.",
        },
      },
      required: ["subject", "days", "hours_per_day", "topics"],
    },
    run: async ({ subject, days, hours_per_day, topics }) => {
      const totalHours = days * hours_per_day;

      const plan = topics.map((topic: string, index: number) => {
        const day = (index % days) + 1;

        return {
          day,
          topic,
          hours: hours_per_day,
        };
      });

      return {
        subject,
        total_days: days,
        hours_per_day,
        total_hours: totalHours,
        plan,
      };
    },
  },
];