import { Mastra } from "@mastra/core";
import { testAgent } from "./agents/testAgent";

const mastra = new Mastra({
  agents: {
    testAgent
  }
});

console.log("Mastra app initialized with testAgent!");
