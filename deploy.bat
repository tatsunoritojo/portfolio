@echo off
echo 🚀 AI Portfolio Site - Auto Deploy Script
echo =====================================
echo.

:: Check if git is initialized
if not exist ".git" (
    echo Initializing git repository...
    git init
    git add .
    git commit -m "🚀 Initial commit: AI-driven portfolio website"
)

:: Add and commit any new changes
echo Adding new changes...
git add .
git status

:: Check if there are changes to commit
git diff-index --quiet HEAD --
if %ERRORLEVEL% NEQ 0 (
    echo Committing changes...
    git commit -m "✨ Update portfolio content - %date% %time%"
) else (
    echo No changes to commit
)

echo.
echo 📝 Next steps:
echo 1. Create GitHub repository at: https://github.com/new
echo 2. Repository name: portfolio
echo 3. Make it Public
echo 4. DO NOT add README, .gitignore, or license (already created)
echo 5. Copy the commands shown after creating the repo
echo.
echo Example commands you'll need to run:
echo   git remote add origin https://github.com/yourusername/portfolio.git
echo   git branch -M main  
echo   git push -u origin main
echo.
echo 🎯 After pushing to GitHub:
echo - Go to render.com
echo - Connect your GitHub repository
echo - Select 'Static Site'
echo - Auto-deploy will be configured!
echo.
pause