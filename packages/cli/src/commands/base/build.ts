import { Command } from "commander";
import { logger } from "../../utils/logger";

export function build(program: Command) {
  return program
    .createCommand("build")
    .description("build projects")
    .action((...args) => {
      logger.log("构建项目", args);
    });
}
