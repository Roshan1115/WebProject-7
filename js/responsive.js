navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
navright = document.querySelector('.rightnav')
tap_view = document.querySelector('.tap-to-view')

// tap_view.addEventListener('click', () => {
//     navbar.classList.toggle('res-navbar')
// })
tap_view.addEventListener('click', () => {
    navbar.classList.toggle('res-navbar')
    navlist.classList.toggle('res-navlist')
    navright.classList.toggle('res-navlist')
})