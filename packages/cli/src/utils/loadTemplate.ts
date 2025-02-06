//本地模板就是 fs 操作
import { copy } from "fs-extra";
import { join } from "node:path";
import { downloadTemplate } from "giget";

//esm 模块规范中不能使用 __dirname
// readFile(join(import.meta.dirname, "./logger.ts"));

interface LoadTemplateOptions {
  templateName: string;
  name: string;
  local?: boolean;
}
export const loadLocalTemplate = (
  params: Omit<LoadTemplateOptions, "local">
) => {
  //copy 函数将模板文件从源路径复制到目标路径。
  copy(
    join(__dirname, `../templates/${params.templateName}`),
    `${process.cwd()}/${params.name}`
  );
};

export const loadRemoteTemplate = async (
  params: Omit<LoadTemplateOptions, "local">
) => {
  console.log("loadRemoteTemplate", params.templateName, params.name);
  const { dir } = await downloadTemplate(
    "https://codeload.github.com/design-sparx/antd-multipurpose-dashboard/tar.gz/refs/heads/main"
  );
  await copy(dir, `${process.cwd()}/${params.name}`);
};

export const loadTemplate = (params: LoadTemplateOptions) => {
  const { local = true, ...rest } = params;
  if (local) {
    loadLocalTemplate(rest);
  } else {
    loadRemoteTemplate(rest);
  }
};
