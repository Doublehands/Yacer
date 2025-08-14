# Office Word 翻译插件

一个功能强大的Office Word翻译插件，为您的文档提供智能翻译服务。

## ✨ 主要功能

- **右键菜单集成**: 在Word文档中右键点击即可使用翻译功能
- **多语言支持**: 支持英语、中文、日语、韩语、法语、德语、西班牙语、俄语等
- **智能语言检测**: 自动识别原文语言
- **美观弹窗界面**: 现代化的翻译弹窗设计
- **一键插入**: 翻译完成后可直接插入到文档中
- **实时状态显示**: 显示翻译进度和结果

## 🚀 快速开始

### 前提条件

- Microsoft Word 2016 或更高版本
- Windows 10/11 或 macOS
- 网络连接（用于翻译API）

### 安装步骤

1. **克隆或下载项目**
   ```bash
   git clone https://github.com/your-username/word-translation-plugin.git
   cd word-translation-plugin
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动本地服务器**
   ```bash
   npm start
   ```

4. **在Word中加载插件**
   - 打开Word文档
   - 转到"插入" > "获取加载项" > "我的加载项"
   - 选择"共享文件夹"并浏览到项目目录
   - 选择 `manifest.xml` 文件

## 📖 使用方法

### 基本翻译流程

1. **选择文本**: 在Word文档中选择要翻译的文本
2. **右键菜单**: 右键点击选中的文本
3. **选择翻译**: 在右键菜单中选择"翻译选中文本"
4. **配置选项**: 在弹窗中选择目标语言
5. **执行翻译**: 点击"翻译"按钮
6. **插入结果**: 确认翻译结果后点击"插入到文档"

### 支持的语言

| 语言代码 | 语言名称 | 语言代码 | 语言名称 |
|---------|---------|---------|---------|
| en      | 英语     | ja      | 日语     |
| zh      | 中文     | ko      | 韩语     |
| fr      | 法语     | es      | 西班牙语 |
| de      | 德语     | ru      | 俄语     |

## 🛠️ 开发说明

### 项目结构

```
word-translation-plugin/
├── manifest.xml          # Office插件配置文件
├── commands.html         # 命令处理文件
├── index.html           # 主要任务窗格
├── package.json         # 项目依赖配置
└── README.md            # 项目说明文档
```

### 技术架构

- **Office.js API**: 用于与Word文档交互
- **HTML5/CSS3**: 现代化的用户界面
- **JavaScript ES6+**: 核心功能实现
- **MyMemory API**: 免费翻译服务

### 自定义配置

#### 修改翻译API

在 `commands.html` 文件中，您可以替换翻译API：

```javascript
// 当前使用的免费API
const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(originalText)}&langpair=auto|${targetLanguage}`;

// 可以替换为其他翻译服务，如：
// - Google Translate API
// - Microsoft Translator API
// - DeepL API
// - 百度翻译API
```

#### 添加新语言

在 `commands.html` 中的语言选择器添加新选项：

```html
<option value="it">意大利语</option>
<option value="pt">葡萄牙语</option>
```

## 🔧 故障排除

### 常见问题

1. **插件无法加载**
   - 确保Word版本支持加载项
   - 检查manifest.xml文件路径是否正确
   - 重启Word应用程序

2. **翻译功能不工作**
   - 检查网络连接
   - 确认本地服务器正在运行
   - 查看浏览器控制台错误信息

3. **右键菜单不显示**
   - 确保插件已正确安装
   - 检查manifest.xml中的配置
   - 尝试重新加载插件

### 调试模式

启用调试模式来查看详细日志：

1. 在Word中按 `F12` 打开开发者工具
2. 查看控制台输出
3. 检查网络请求状态

## 📝 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🤝 贡献

欢迎提交问题报告和功能请求！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📞 支持

如果您遇到问题或有建议，请：

- 提交 [Issue](https://github.com/your-username/word-translation-plugin/issues)
- 发送邮件到 support@example.com
- 查看 [Wiki](https://github.com/your-username/word-translation-plugin/wiki)

## 🔄 更新日志

### v1.0.0 (2024-01-01)
- ✨ 初始版本发布
- 🌐 支持8种语言翻译
- 🖱️ 右键菜单集成
- 🎨 现代化UI设计
- 📱 响应式弹窗界面

---

**注意**: 这是一个演示项目，在生产环境中使用前请确保：
- 使用可靠的翻译API服务
- 添加适当的错误处理
- 实现用户认证和授权
- 添加内容安全策略
- 进行充分的测试
