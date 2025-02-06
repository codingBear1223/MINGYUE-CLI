import { run } from "./cli"; // 移除 .ts 扩展名

export const defineConfig = () => {};
export const runCli = () => {
  run(process.argv);
};
