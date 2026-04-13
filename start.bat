@echo off
echo ========================================================
echo Starting the Aharam Food Delivery Website...
echo Please wait a moment while the server starts up.
echo ========================================================

:: Wait 3 seconds, then open the browser automatically
start "" /b cmd /c "ping localhost -n 4 > nul & start http://localhost:5173"

:: Start the development server
npm run dev

pause
