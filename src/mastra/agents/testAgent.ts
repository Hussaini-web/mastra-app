import { Agent } from "@mastra/core";

// Minimal example agent
export const testAgent = new Agent({
  name: "testAgent",
  description: "A simple test AI agent",
  instructions: "You are a helpful assistant that responds to user messages.",
  model: "openai/gpt-4o-mini"
});
