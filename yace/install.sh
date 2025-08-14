#!/bin/bash

echo "========================================"
echo "Office Word 翻译插件安装程序"
echo "========================================"
echo

echo "正在检查Node.js环境..."
if ! command -v node &> /dev/null; then
    echo "错误: 未检测到Node.js环境"
    echo "请先安装Node.js: https://nodejs.org/"
    exit 1
fi

echo "Node.js环境检查通过"
echo

echo "正在安装项目依赖..."
npm install
if [ $? -ne 0 ]; then
    echo "错误: 依赖安装失败"
    exit 1
fi

echo "依赖安装完成"
echo

echo "正在启动本地服务器..."
echo "服务器将在 http://localhost:3000 启动"
echo
echo "请按照以下步骤在Word中加载插件:"
echo "1. 打开Word文档"
echo "2. 转到'插入' > '获取加载项' > '我的加载项'"
echo "3. 选择'共享文件夹'并浏览到此项目目录"
echo "4. 选择 manifest.xml 文件"
echo
echo "按任意键启动服务器..."
read -n 1 -s

echo "启动服务器..."
npm start
