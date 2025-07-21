
function getCurrentLanguage() {
    return window.location.pathname.includes('/en/') ? 'en' : 'ja';
}
