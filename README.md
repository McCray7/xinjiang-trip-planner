# 新疆旅行计划 Web

这是一个手机优先的静态 Web 页面，用来展示上海出发新疆伊犁落地自驾的两套旅行方案。

## 功能

- 切换 `8天7晚` 和 `6天5晚`
- 查看每日行程、住宿和驾驶强度
- 在路线示意图或高德真实地图上高亮当天路段
- 查看两套方案的核心对比
- 查看出发前执行清单

## 真实地图模式

当前版本支持两种地图模式：

- 默认：`SVG 示意图`
- 可选：`高德真实地图`

启用高德真实地图需要你自己的 `高德 Web JS API Key`。

### 获取 Key

1. 打开 [高德开放平台](https://lbs.amap.com/)
2. 注册并登录
3. 创建应用
4. 添加 `Web 端(JS API)` Key
5. 把 Key 填进页面顶部的 `高德 Key` 输入框

页面会把 Key 存在浏览器本地，不会写入仓库。

也支持通过 URL 传入：

```text
https://你的站点地址/?amapKey=你的Key
```

## 本地打开

直接双击 [index.html](./index.html) 即可，或用任意静态文件服务器打开。

## 部署到 GitHub Pages

这个项目已经是纯静态站点，直接推到 GitHub 仓库即可。

### 方式一：仓库根目录直接部署

1. 新建 GitHub 仓库
2. 把当前目录文件上传到仓库根目录
3. 在 GitHub 仓库打开 `Settings -> Pages`
4. `Build and deployment` 里选择：
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. 保存后等待发布

发布成功后，地址通常类似：

```text
https://你的用户名.github.io/仓库名/
```

### 方式二：用户主页站点

如果仓库名是 `你的用户名.github.io`，那就会直接部署到：

```text
https://你的用户名.github.io/
```

## 部署到 Vercel

### 方式一：导入 GitHub 仓库

1. 把项目推到 GitHub
2. 打开 [Vercel](https://vercel.com/)
3. 选择 `Add New -> Project`
4. 导入这个仓库
5. Vercel 会自动识别为静态站点
6. 直接点 `Deploy`

部署完成后会得到一个可直接手机访问的公网链接。

### 方式二：Vercel CLI

如果本机之后装了 Node.js，也可以运行：

```bash
vercel
```

## 文件结构

```text
.
├─ index.html
├─ styles.css
├─ app.js
├─ vercel.json
├─ .nojekyll
└─ README.md
```

## 说明

当前版本为了保证无依赖、可直接运行，使用的是 `SVG 路线示意图`，不是在线地图 SDK。

如果后续要升级，可以继续加：

- 高德地图底图
- 一键导航
- 真实公里数与耗时
- 预算估算
- 分享海报页
