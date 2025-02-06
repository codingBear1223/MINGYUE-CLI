import { Command } from "commander";
import { logger } from "../../utils/logger";
import { spawn } from "node:child_process";
export function build(program: Command) {
  return program
    .createCommand("build")
    .description("build projects")
    .action((...args) => {
      logger.log("构建项目", args);
      const command = args[0] === "npm" ? "npm run build" : "pnpm build";
      const child = spawn(command, {
        stdio: "inherit", // 将子进程的输出传递给父进程
        shell: true, // 使用shell执行命令
      });
      child.on("close", (code) => {
        logger.log(`子进程退出，退出码: ${code}`);
      });
    });
}
