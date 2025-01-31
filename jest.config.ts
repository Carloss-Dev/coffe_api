import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",

  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },

  extensionsToTreatAsEsm: [".ts"],
  testMatch: ["**/__tests__/**/*.(ts|js)", "**/?(*.)+(spec|test).(ts|js)"],
  transformIgnorePatterns: [
    "/node_modules/(?!your-esm-module-to-transform).+\\.js$",
  ],
  moduleFileExtensions: ["js", "json", "ts"],
};

export default config;
