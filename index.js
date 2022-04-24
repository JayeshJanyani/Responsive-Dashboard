const menuBtn = document.querySelector('#menu-btn')
const sideMenu = document.querySelector('aside')
const closeBtn = document.querySelector('#close-btn')
const themeToggler = document.querySelector('.theme-toggler')


menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'

})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span').classList.toggle('active')
})