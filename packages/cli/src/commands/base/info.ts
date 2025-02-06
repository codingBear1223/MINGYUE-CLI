import { logger } from "../../utils/logger";
import pc from "picocolors";
import pkg from "../../../package.json";
import { Command } from "commander";

export const info = (program: Command) => {
  return program
    .createCommand("info")
    .description("projects info")
    .action(() => {
      logger.start("building project");
      logger.success("project built!");
      logger.warn("$$$$$");
      logger.log(pc.green("Author: MingYue"));
      logger.log(pc.underline(`Project version: ${pkg.version}`));
    });
};
