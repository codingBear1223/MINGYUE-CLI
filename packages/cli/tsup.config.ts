import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  entry: ["./index.ts"],
  format: ["cjs"], //在 node 环境下执行
  outDir: "dist",
});
