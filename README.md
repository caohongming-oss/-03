# 🌐 语音翻译 · Voice Translator

中英双向实时语音翻译 Android App，基于 Claude AI。

## 功能
- 🎙 中文 → 英文 / 英文 → 中文 实时翻译
- 💬 对话模式：双方交替说话，自动翻译朗读
- 🔊 朗读翻译结果
- 📋 历史记录

---

## 上传到 GitHub 后自动打包 APK

### 第一步：创建 GitHub 仓库

1. 登录 [github.com](https://github.com)
2. 右上角点击 **+** → **New repository**
3. 仓库名填：`voice-translator`
4. 选择 **Public**（免费账户需要公开才能用 Actions）
5. 点击 **Create repository**

### 第二步：上传文件

把本项目所有文件上传到仓库：

```bash
# 方法A：命令行（如果你有 Git）
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/你的用户名/voice-translator.git
git push -u origin main
```

或者直接在 GitHub 网页上点击 **uploading an existing file** 拖拽上传。

### 第三步：等待自动打包

上传完成后，GitHub 会自动开始打包。

1. 点击仓库顶部的 **Actions** 标签页
2. 可以看到 **Build Android APK** 任务正在运行（约 5-10 分钟）
3. 完成后点击任务 → 在 **Artifacts** 区域下载 `语音翻译-debug.apk`

### 第四步：安装到手机

1. 将 APK 文件发送到安卓手机（微信/QQ/数据线）
2. 手机上点击 APK 文件
3. 如提示"未知来源"，去设置 → 安全 → 允许安装未知应用
4. 安装完成，桌面找到"语音翻译"图标

---

## 常见问题

**Q: Actions 运行失败怎么办？**  
A: 点击失败的任务查看日志，常见原因是 Android SDK 许可证问题，重新触发一次通常可以解决。

**Q: 安装时提示"解析软件包时出现问题"**  
A: 下载的 APK 可能不完整，重新下载后安装。

**Q: 语音识别不工作？**  
A: 确保已授予麦克风权限；安卓需要 Chrome 内核支持 Web Speech API。

---

## 技术栈

- **前端**：原生 HTML/CSS/JS，Web Speech API
- **翻译**：Claude AI API（claude-sonnet-4）
- **打包**：Capacitor 6 + GitHub Actions
- **最低安卓版本**：Android 7.0+
