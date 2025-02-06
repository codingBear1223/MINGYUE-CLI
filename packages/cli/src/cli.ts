// import { create } from "./commands/base/create";
// import { serve } from "./commands/base/serve";
// import { build } from "./commands/base/build";
// import { greet } from "./commands/base/greet";
// import { info } from "./commands/base/info";
import { program } from "commander";
import "./commands"; //完成脚手架命令插件的注册
import "./utils/loadTemplate";
//cli 脚手架实现
//怎么获取用户输入

program.version("0.0.1").name("mingyues");
// /**
//  * 创建项目
//  */
// program.command("create").description("创建项目").action(create);
// /**
//  * 打包项目
//  */
// program.command("build").description("打包项目").action(build);
// /**
//  * 启动项目
//  */
// program.command("serve").description("启动项目").action(serve);

// /***
//  * 欢迎语
//  */
// program.command("greet").description("欢迎语").action(greet);

// /**
//  * 项目信息
//  */
// program.command("info").action(info);
export const run = (args: string[]) => {
  program.parse(args);
};
