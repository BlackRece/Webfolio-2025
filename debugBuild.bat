@echo off
echo npm run dev <--- alt method
echo Building the project...
call next build

if %errorlevel% equ 0 (
    echo Build successful. Serving the out folder...
    start npx serve out
) else (
    echo Build failed. Check the logs for errors.
)