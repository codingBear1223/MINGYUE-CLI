# mingyue-cli

## 项目架构

`mingyue-cli` 是一个基于 React 和 TypeScript 的命令行工具，旨在提供快速的开发体验和高效的构建流程。项目采用模块化架构，便于扩展和维护。

## 功能

- **代码检查**：集成 ESLint 和 Prettier，确保代码质量和一致性。
- **构建工具**：使用 Turbo 进行高效的构建和发布流程。
- **类型支持**：使用 TypeScript 提供静态类型检查，提升代码可靠性。

## 工程化规则配置

- **ESLint**：使用 `@eslint/js` 和相关插件进行代码检查，配置文件位于 `eslint.config.mjs`。
- **TypeScript**：项目使用 TypeScript，配置文件位于 `tsconfig.json`。
- **Commit 检查规则**：使用 `commitlint` 和 `husky` 进行提交信息检查，确保提交信息符合规范。

## 如何使用

1. **安装依赖**：

   ```bash
   pnpm install
   ```

2. **开发模式**：

   ```bash
   pnpm run dev:cli
   ```

   这将启动开发服务器，并在浏览器中打开应用。

3. **构建项目**：

   ```bash
   pnpm run build:cli
   ```

   这将生成生产环境的构建文件，输出到 `dist` 目录。

4. **运行代码检查**：

   ```bash
   pnpm run lint
   ```

5. **发布到 NPM**：

   ```bash
   pnpm run publish:npm
   ```

6. **命令行使用**：

   使用 `mingyues` 命令行工具创建新项目或执行其他操作。

   - 创建新项目：

     ```bash
     mingyues create demo
     ```

   - 其他可用命令：

     ```bash
     mingyues <command>
     ```

   具体命令和参数可以通过 `mingyues --help` 查看。

## 贡献

欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证

本项目采用 MIT 许可证，详细信息请查看 `LICENSE` 文件。
