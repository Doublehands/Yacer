# 项目结构说明

```
word-translation-plugin/
├── 📁 核心文件
│   ├── manifest.xml          # Office插件配置文件 (必需)
│   ├── commands.html         # 命令处理文件 (必需)
│   └── index.html           # 主要任务窗格 (必需)
│
├── 📁 配置文件
│   ├── package.json         # 项目依赖配置
│   ├── config.js            # 插件配置文件
│   └── PROJECT_STRUCTURE.md # 项目结构说明
│
├── 📁 安装脚本
│   ├── install.bat          # Windows安装脚本
│   └── install.sh           # macOS/Linux安装脚本
│
├── 📁 文档
│   ├── README.md            # 项目说明文档
│   └── LICENSE              # 许可证文件 (可选)
│
└── 📁 资源文件 (可选)
    ├── assets/              # 图标和样式文件
    │   ├── icons/          # 插件图标
    │   ├── css/            # 样式文件
    │   └── js/             # 工具函数
    └── tests/              # 测试文件
```

## 文件说明

### 核心文件 (必需)

#### 1. manifest.xml
- **作用**: Office插件的配置文件
- **内容**: 定义插件的基本信息、权限、右键菜单等
- **重要性**: ⭐⭐⭐⭐⭐ (必须存在且正确配置)

#### 2. commands.html
- **作用**: 处理右键菜单命令和翻译逻辑
- **内容**: 翻译功能实现、弹窗显示、内容插入等
- **重要性**: ⭐⭐⭐⭐⭐ (核心功能文件)

#### 3. index.html
- **作用**: 主要任务窗格界面
- **内容**: 插件介绍、使用说明、功能展示等
- **重要性**: ⭐⭐⭐⭐ (用户界面文件)

### 配置文件

#### 4. package.json
- **作用**: 管理项目依赖和脚本
- **内容**: 项目信息、依赖列表、启动脚本等
- **重要性**: ⭐⭐⭐ (开发环境配置)

#### 5. config.js
- **作用**: 插件功能配置
- **内容**: 翻译API设置、UI配置、功能开关等
- **重要性**: ⭐⭐⭐ (功能配置)

### 安装脚本

#### 6. install.bat (Windows)
- **作用**: Windows环境下的自动安装脚本
- **功能**: 检查环境、安装依赖、启动服务器
- **重要性**: ⭐⭐ (Windows用户便利性)

#### 7. install.sh (macOS/Linux)
- **作用**: Unix环境下的自动安装脚本
- **功能**: 检查环境、安装依赖、启动服务器
- **重要性**: ⭐⭐ (Unix用户便利性)

### 文档文件

#### 8. README.md
- **作用**: 项目说明和使用指南
- **内容**: 功能介绍、安装步骤、使用方法等
- **重要性**: ⭐⭐⭐ (用户指南)

#### 9. PROJECT_STRUCTURE.md
- **作用**: 项目结构说明文档
- **内容**: 文件组织、功能说明、重要性评级等
- **重要性**: ⭐⭐ (开发者参考)

## 部署说明

### 最小部署
如果只需要基本功能，以下文件是必需的：
```
word-translation-plugin/
├── manifest.xml
├── commands.html
└── index.html
```

### 完整部署
包含所有功能和配置：
```
word-translation-plugin/
├── manifest.xml
├── commands.html
├── index.html
├── package.json
├── config.js
├── install.bat (Windows)
├── install.sh (Unix)
└── README.md
```

## 自定义建议

### 1. 修改翻译API
编辑 `config.js` 文件中的API配置部分

### 2. 添加新语言
在 `commands.html` 和 `config.js` 中添加语言选项

### 3. 修改UI样式
编辑 `index.html` 和 `commands.html` 中的CSS样式

### 4. 添加新功能
在 `commands.html` 中扩展JavaScript功能

## 注意事项

1. **manifest.xml** 必须保持正确的XML格式
2. **commands.html** 中的Office.js API调用必须正确
3. 所有HTML文件必须包含必要的Office.js引用
4. 配置文件中的API密钥需要妥善保管
5. 本地服务器必须运行在配置的端口上
