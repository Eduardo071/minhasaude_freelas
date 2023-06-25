let menuIcon = document.querySelector('.menuOpen')
let menuOptions = document.querySelector('#burguerMenuItens')
let bodyOfPage = document.querySelector('#container')

menuIcon.addEventListener('click', () => {
    if (!menuOptions.classList.contains('opened')) {
        menuOptions.classList.add('opened')
        menuOptions.style.display = 'flex'
        menuIcon.classList.remove('menuOpen')
        menuIcon.classList.add('menuClose')
    }else{
        menuOptions.style.animation = 'slideRightToDefault 0.7s'
        setTimeout(() => {
            menuOptions.style.display = 'none'
            menuOptions.style.animation = ''
        }, 700)
        menuOptions.classList.remove('opened')
        menuIcon.classList.remove('menuClose')
        menuIcon.classList.add('menuOpen')
    }
})

