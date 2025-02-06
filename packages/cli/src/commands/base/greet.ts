import { logger } from "../../utils/logger";
import prompts from "prompts";
import { Command } from "commander";

export const greet = (program: Command) => {
  return program
    .createCommand("greet")
    .description("greet")
    .action(async () => {
      const nameRes = await prompts({
        type: "text",
        name: "username",
        message: "What's your name?",
      });
      const hobbyRes = await prompts({
        type: "select",
        name: "hobby",
        message: "What's your hobby?",
        choices: [
          { title: "Game", value: "game" },
          { title: "Drawing", value: "drawing" },
        ],
      });
      logger.log(`欢迎你, ${nameRes.username}, 你的爱好是${hobbyRes.hobby}`);
    });
};
