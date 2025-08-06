@echo off
echo Starting local server...
echo Open your browser and go to: http://localhost:8080
echo Press Ctrl+C to stop the server
cd /d "%~dp0"
python -m http.server 8080
pause