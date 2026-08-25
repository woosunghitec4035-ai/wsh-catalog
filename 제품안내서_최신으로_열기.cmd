@echo off
setlocal
set "CATALOG=%~dp0index.html"
set "EDGE=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"

if not exist "%CATALOG%" (
  echo 제품안내서 index.html을 찾을 수 없습니다.
  pause
  exit /b 1
)

if not exist "%EDGE%" set "EDGE=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"

if exist "%EDGE%" (
  start "" "%EDGE%" --new-window --disable-http-cache "%CATALOG%?v=%RANDOM%%RANDOM%"
) else (
  start "" "%CATALOG%"
)

endlocal
