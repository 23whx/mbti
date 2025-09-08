# MBTI性格测试网站

基于 Astro + React + TypeScript + TailwindCSS 构建的现代化 MBTI 性格测试网站。

## ✨ 特色功能

- **🏝️ 岛屿架构**: Astro 静态优先 + React 按需交互
- **📱 响应式设计**: 完美适配手机和PC端
- **🎨 简约美观**: 淡雅的红绿配色方案
- **💾 智能缓存**: 24小时答题进度保护
- **📊 专业分析**: 68道题目 + 详细结果解析
- **⚡ 极致性能**: 静态生成 + 按需加载

## 🚀 快速开始

### 环境要求

- Node.js 18.x 或更高版本
- npm 8.x / pnpm 8.x / yarn 3.x

### 安装和运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

### 项目命令

| 命令 | 功能 | 描述 |
|------|------|------|
| `npm run dev` | 开发服务 | 启动开发服务器，支持热重载 |
| `npm run build` | 生产构建 | 构建优化后的静态站点 |
| `npm run preview` | 本地预览 | 本地预览构建结果 |
| `npm run check` | 类型检查 | 检查 TypeScript 类型错误 |

## 📁 项目结构

```
mbti-test/
├── public/                    # 静态资源
│   └── favicon.svg           # 网站图标
├── src/
│   ├── components/           # 组件目录
│   │   └── react/            # React 交互组件
│   │       ├── Questionnaire.tsx  # 核心答题组件
│   │       ├── ProgressBar.tsx    # 进度条组件
│   │       └── ResultChart.tsx    # 结果图表组件
│   ├── layouts/              # 布局模板
│   │   └── BaseLayout.astro  # 基础页面布局
│   ├── pages/                # 路由页面
│   │   ├── index.astro       # 首页 (/)
│   │   ├── test.astro        # 测试页 (/test)
│   │   └── result.astro      # 结果页 (/result)
│   ├── data/                 # 数据目录
│   │   └── questions.ts      # 68道测试题目
│   ├── utils/                # 工具函数
│   │   ├── scoring.ts        # 计分算法
│   │   └── storage.ts        # 本地存储管理
│   ├── styles/               # 样式文件
│   │   └── global.css        # 全局样式和组件类
│   └── env.d.ts              # 环境类型定义
├── astro.config.mjs          # Astro 配置
├── tailwind.config.mjs       # TailwindCSS 配置
├── tsconfig.json             # TypeScript 配置
└── package.json              # 项目依赖
```

## 🎨 设计特色

### 配色方案
- **主色调**: 温暖的珊瑚红 (#dc2626) - 代表热情与活力
- **辅助色**: 清新的森林绿 (#16a34a) - 象征平静与成长
- **渐变背景**: 红绿和谐渐变营造舒适的视觉体验

### 响应式设计
- **移动端优化**: 44px 最小触控区域，适配各种屏幕尺寸
- **触控友好**: 充足的按钮间距，防止误触
- **流体布局**: 内容自适应，保持最佳阅读体验

## 🧮 核心算法

### 对称计分法
采用科学的对称计分算法，确保四个维度的平衡性：

```typescript
// 例：E向题目，用户选择值为value
E_score = value;           // 1-5分
I_score = 6 - value;       // 对称分数
```

### MBTI维度
- **E/I**: 外向性 vs 内向性
- **S/N**: 感觉型 vs 直觉型
- **T/F**: 思维型 vs 情感型
- **J/P**: 判断型 vs 知觉型

## 💾 缓存机制

### 24小时智能保护
- 自动保存答题进度到 localStorage
- 意外关闭页面后可恢复到上次位置
- 过期自动清理，不占用过多存储空间

### 存储结构
```typescript
interface CachedAnswers {
  answers: Record<number, number>;  // 答题数据
  timestamp: number;                // 时间戳
  currentQuestion: number;          // 当前题目
  progress: number;                 // 进度数量
}
```

## 🚀 部署指南

### Vercel 部署
```bash
# 自动检测 Astro 项目
# 构建命令: npm run build
# 输出目录: dist
```

### Netlify 部署
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### 自定义服务器
```bash
# 构建静态文件
npm run build

# 部署 dist 目录中的内容
```

## 🔧 自定义配置

### 修改题目
编辑 `src/data/questions.ts` 文件，添加或修改测试题目。

### 调整样式
修改 `tailwind.config.mjs` 中的颜色配置，或编辑 `src/styles/global.css`。

### 扩展功能
在 `src/components/react/` 目录下添加新的 React 组件。

## 📝 开发注意事项

### Astro 岛屿架构
```astro
<!-- 静态内容使用 Astro 组件 -->
<Header />

<!-- 交互功能使用 React 岛屿 -->
<Questionnaire client:load />
```

### 性能优化
- 静态内容预渲染，零 JavaScript 负担
- React 组件按需加载
- 图片懒加载和代码分割

### 浏览器兼容性
- 现代浏览器 (Chrome 88+, Firefox 85+, Safari 14+)
- 移动端浏览器完全支持
- 渐进增强设计，基础功能降级兼容

## 📄 许可证

本项目仅供学习和参考使用。MBTI 理论版权归相关权利人所有。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进项目。

---

**注意**: 本测试结果仅供参考，不构成专业心理学诊断。
