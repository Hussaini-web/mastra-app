import { Mastra } from "@mastra/core";
import { testAgent } from "./agents/testAgent";

export const mastra = new Mastra({
  agents: {
    testAgent
  }
});
