import { registerCommand } from "./registerCommand";
import { serve } from "./base/serve";
import { build } from "./base/build";
import { greet } from "./base/greet";
import { info } from "./base/info";
import { create } from "./base/create";
/**
 * 定义命令协议
 */
// interface Command {
//   name: string; //命令名称
//   description: string; //命令描述
//   action: (...args: any[]) => void; //命令执行函数
// }

registerCommand(build);
registerCommand(serve);
registerCommand(info);
registerCommand(create);
registerCommand(greet);
