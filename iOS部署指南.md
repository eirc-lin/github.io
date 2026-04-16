# 诗词永流传 — iOS 部署指南

## 📱 在 iPhone / iPad 上使用

本应用是一个 **PWA（渐进式 Web 应用）**，无需上架 App Store，只需通过 Safari 浏览器即可安装到 iOS 主屏幕，像原生 App 一样使用，**支持离线运行**。

---

### 方式一：本地局域网部署（推荐，最简单）

#### 步骤：

1. **在电脑上启动本地服务器**  
   双击运行 `serve.bat`，它会显示本机 IP 地址，例如 `http://192.168.1.100:8080`

2. **确保手机和电脑在同一 WiFi 网络**

3. **在 iPhone/iPad 上打开 Safari 浏览器**（必须是 Safari，不能用 Chrome）  
   输入电脑显示的地址，例如 `http://192.168.1.100:8080`

4. **添加到主屏幕**  
   - 点击 Safari 底部的 **分享按钮**（方框+向上箭头 ⬆️）
   - 向下滚动，点击 **「添加到主屏幕」**
   - 点击 **「添加」**

5. **完成！** 主屏幕上会出现「诗词永流传」图标，点击即可全屏使用，之后**无需网络也能运行**。

---

### 方式二：部署到公网服务器

将 `poetry-app` 文件夹中的以下文件上传到任意 Web 服务器（需 HTTPS）：

```
index.html
icon.svg  
manifest.json
sw.js
```

然后用 Safari 访问该地址，同样按上述步骤「添加到主屏幕」即可。

> ⚠️ PWA 的 Service Worker 需要 HTTPS 才能工作（localhost 除外）

---

### 方式三：使用 GitHub Pages（免费）

1. 创建一个 GitHub 仓库
2. 将上述 4 个文件推送到仓库
3. 在仓库 Settings → Pages 中启用 GitHub Pages
4. 用 Safari 访问 `https://你的用户名.github.io/仓库名/`
5. 添加到主屏幕

---

## 📁 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | 应用主体（HTML/CSS/JS 全部内联） |
| `icon.svg` | 应用图标 |
| `manifest.json` | PWA 配置文件 |
| `sw.js` | Service Worker（离线缓存） |
| `serve.bat` | 本地服务器启动脚本 |

## ✅ 特性

- ✅ 全屏运行，无浏览器地址栏
- ✅ 离线可用（首次加载后自动缓存）
- ✅ 支持 iPhone 刘海屏 / 灵动岛安全区域
- ✅ 主屏幕图标
- ✅ 无需安装任何 App
- ✅ 所有数据本地存储，无需服务器

