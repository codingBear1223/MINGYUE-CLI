import { logger } from "../../utils/logger";
import { Command } from "commander";

export function serve(program: Command) {
  return program
    .createCommand("serve")
    .description("serve projects")
    .action((...args) => {
      logger.log("启动项目", args);
    });
}
