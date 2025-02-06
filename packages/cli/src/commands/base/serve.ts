import { logger } from "../../utils/logger";
import { Command } from "commander";
import { spawn } from "node:child_process";
export function serve(program: Command) {
  return program
    .createCommand("serve")
    .description("serve projects")
    .action((...args) => {
      //执行项目的启动命令
      //npm run dev / pnpm dev
      logger.log("启动项目", args);
      const command = args[0] === "npm" ? "npm run dev" : "pnpm dev";
      const child = spawn(command, {
        stdio: "inherit", // 将子进程的输出传递给父进程
        shell: true, // 使用shell执行命令
      });
      child.on("close", (code) => {
        logger.log(`子进程退出，退出码: ${code}`);
      });
    });
}
