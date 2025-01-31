import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node", // Caso esteja rodando testes para backend (Express, por exemplo)
  globals: {
    "ts-jest": {
      useESM: true, // Habilita o uso de ESM no ts-jest
      tsconfig: "tsconfig.json",
    },
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transforma arquivos .ts e .tsx
  },
  moduleNameMapper: {
    // Se necessário, adicione qualquer mapeamento de módulos específico do seu projeto
    // Exemplo: "^@src/(.*)$": "<rootDir>/src/$1"
  },
  extensionsToTreatAsEsm: [".ts"], // Faz com que o Jest trate arquivos .ts como ESM
  testMatch: [
    "**/__tests__/**/*.(ts|tsx|js)", // Arquivos de teste
    "**/?(*.)+(spec|test).(ts|tsx|js)", // Identifica arquivos de teste com sufixo .test.ts ou .spec.ts
  ],
  transformIgnorePatterns: [
    "/node_modules/(?!your-esm-module-to-transform).+\\.js$", // Caso precise transpilar algum módulo específico
  ],
  // Caso esteja utilizando importação de arquivos de tipo .json, adicione esse bloco
  moduleFileExtensions: ["js", "json", "ts"],
};

export default config;
