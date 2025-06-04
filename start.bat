@echo off

rem --- پنجرهٔ اول: اجرای React (npm run start) ---
start "React App" cmd /k "npm run start"

rem --- پنجرهٔ دوم: اجرای JSON Server ---
start "JSON Server" cmd /k "npx json-server --watch db.json --port 3001"