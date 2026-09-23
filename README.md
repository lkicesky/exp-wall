# exp-wall · 个人经历墙

个人经历墙网站（React + TypeScript + Vite）：英雄区 + 照片墙 + 项目展示 + 26 个成长故事。

## 在线访问

https://lkicesky.github.io/exp-wall/

## 目录结构

| 路径 | 说明 |
|---|---|
| `hero-program/` | 网站源码（Vite/React 工程） |
| `docs/` | 构建产物（GitHub Pages 发布源，由 `hero-program` 构建后同步） |
| `images/`、`_shots/` | 素材与截图 |
| `布料按压交互演示.html` | 独立交互效果演示（未上线） |

## 本地开发

```bash
cd hero-program
npm install
npm run dev
```

## 构建

```bash
cd hero-program
npm run build      # 产物输出到 hero-program/dist
```

构建后需将 `hero-program/dist` 的内容同步到 `docs/`（Pages 发布源），提交并推送 main 分支即自动发布。

## 部署方式

当前使用 GitHub Pages **从分支发布**模式：`main` 分支 `/docs` 目录为发布源（Settings → Pages → Deploy from a branch → main /docs）。

> 说明：仓库内 `.github/workflows/deploy.yml` 预留了 GitHub Actions 自动构建方案，因当前账号 token 无 `workflow` 权限暂未启用；如需改用 Actions 自动构建，授权后在仓库启用 Pages 的 Actions 源并推送该文件即可。
