import { Command } from "commander";
import { logger } from "../../utils/logger";
import { loadTemplate } from "../../utils/loadTemplate";
import picocolors from "picocolors";
import prompts from "prompts";

export const create = (program: Command) => {
  return program
    .createCommand("create")
    .description("create projects")
    .arguments("<name>")
    .option("-t --template <template>", "template name")
    .action(async (name, { template }) => {
      logger.log(picocolors.bgCyan("创建项目"), name, template);
      if (!template) {
        const tpltRes = await prompts({
          type: "select",
          name: "template",
          message: "请选择一个模版",
          choices: [
            { title: "react", value: "template-react" },
            { title: "react-ts", value: "template-react-ts" },
            { title: "vue", value: "template-vue" },
            { title: "vue-ts", value: "template-vue-ts" },
            { title: "vanilla", value: "template-vanilla" },
            { title: "vanilla-ts", value: "template-vanilla-ts" },
          ],
        });
        template = tpltRes.template;
      }
      loadTemplate({ templateName: template, name, local: true });
    });
};
