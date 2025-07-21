@echo off
cls
color 0A
echo ===============================================
echo    🤖 AI PORTFOLIO SITE - AUTO SETUP 🤖
echo ===============================================
echo.

echo 📋 Preparation complete! Here's what we've done:
echo ✅ Created professional portfolio site
echo ✅ Enhanced project showcase for job applications
echo ✅ Added bilingual support (Japanese/English)
echo ✅ Implemented responsive design
echo ✅ Set up GitHub Actions for auto-deploy
echo ✅ Prepared all deployment configurations
echo.

echo 🚀 AUTO-DEPLOYMENT OPTIONS:
echo.
echo [1] GitHub Pages (FREE - github.io domain)
echo     - Zero cost
echo     - Automatic HTTPS
echo     - Perfect for portfolios
echo.
echo [2] Render (RECOMMENDED)
echo     - Free tier available
echo     - Custom domain support
echo     - Faster deployment
echo.
echo [3] Vercel (FASTEST)
echo     - Premium performance
echo     - Global CDN
echo     - Best for showcasing skills
echo.

echo 🎯 QUICK START (Choose your deployment):
echo.
echo For GitHub Pages:
echo 1. Go to: https://github.com/new
echo 2. Repository name: portfolio
echo 3. Public repository
echo 4. Create repository
echo 5. Copy-paste these commands:
echo.
echo    git remote add origin https://github.com/tatsunoritojo/portfolio.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 6. Go to Settings ^> Pages ^> Deploy from branch ^> main
echo.
echo Your site will be live at: https://tatsunoritojo.github.io/portfolio
echo.

echo For Render (One-click deploy):
echo 1. Click: https://render.com/deploy?repo=https://github.com/tatsunoritojo/portfolio
echo 2. Connect GitHub account
echo 3. Click "Deploy"
echo 4. Your site goes live automatically!
echo.

echo 💡 Pro tip: Use GitHub Pages for free hosting, then upgrade to custom domain later!
echo.

echo Press any key to open GitHub in your browser...
pause > nul
start https://github.com/new
echo.
echo 📁 Current directory: %CD%
echo 📝 Run these commands after creating your GitHub repo:
echo.
echo git remote add origin [YOUR_REPO_URL]
echo git branch -M main
echo git push -u origin main
echo.
pause