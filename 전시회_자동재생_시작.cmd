@echo off
setlocal
set "TV_PAGE=%~dp0output\tv-autoplay\index.html"
set "EDGE=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"

if not exist "%TV_PAGE%" (
  echo 전시회 재생 화면을 찾을 수 없습니다.
  echo %TV_PAGE%
  pause
  exit /b 1
)

if not exist "%EDGE%" set "EDGE=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"

if exist "%EDGE%" (
  start "" "%EDGE%" --new-window --start-fullscreen --disable-http-cache "%TV_PAGE%?v=%RANDOM%%RANDOM%"
) else (
  start "" "%TV_PAGE%"
)

endlocal
