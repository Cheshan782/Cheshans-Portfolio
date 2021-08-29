const handleFirstTab = (e) => {
    if(e.key==='Tab'){
        document.body.classList.add('user-is-tabbing')
        window.removeEventListener('keydown', handleFirstTab)
        window.addEventListener('mousedown', handleMouseDownOnce)
    }
}