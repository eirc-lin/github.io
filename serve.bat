@echo off
echo ============================================
echo   诗词永流传 - 本地服务器
echo ============================================
echo.
echo 启动后，请在 iOS 设备的 Safari 浏览器中访问:
echo.
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /C:"IPv4"') do (
    set IP=%%a
    echo   http:%%a:8080
)
echo.
echo 然后点击 Safari 底部分享按钮 → "添加到主屏幕"
echo 即可像原生 App 一样使用（支持离线）
echo.
echo 按 Ctrl+C 停止服务器
echo ============================================
echo.
python -m http.server 8080 2>nul || (
    echo Python未找到，尝试使用npx...
    npx -y http-server -p 8080 -c-1 2>nul || (
        echo.
        echo 请安装 Python 或 Node.js 后重试
        echo 或者将 poetry-app 文件夹部署到任意 Web 服务器
        pause
    )
)

