navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
navright = document.querySelector('.rightnav')
tap_view = document.querySelector('.tap-to-view')
linkTouch1 = document.querySelector('#link-to-touch1')
linkTouch2 = document.querySelector('#link-to-touch2')
linkTouch3 = document.querySelector('#link-to-touch3')
linkTouch4 = document.querySelector('#link-to-touch4')
searchbtn = document.querySelector('.btn-small')

// tap_view.addEventListener('click', () => {
//     navbar.classList.toggle('res-navbar')
// })
tap_view.addEventListener('click', () => {
    navbar.classList.toggle('res-navbar')
    navlist.classList.toggle('res-navlist')
    navright.classList.toggle('res-navlist')
})

// To go home 
linkTouch1.addEventListener('click', () => {
    navbar.classList.toggle('res-navbar')
    navlist.classList.toggle('res-navlist')
    navright.classList.toggle('res-navlist')
})

// To Go About
linkTouch2.addEventListener('click', () => {
    navbar.classList.toggle('res-navbar')
    navlist.classList.toggle('res-navlist')
    navright.classList.toggle('res-navlist')
})

// To Go Services
linkTouch3.addEventListener('click', () => {
    navbar.classList.toggle('res-navbar')
    navlist.classList.toggle('res-navlist')
    navright.classList.toggle('res-navlist')
    alert('Services section is not available yet. Thank you for your understanding.')
})

// To Go Contact
linkTouch4.addEventListener('click', () => {
    navbar.classList.toggle('res-navbar')
    navlist.classList.toggle('res-navlist')
    navright.classList.toggle('res-navlist')
})

searchbtn.addEventListener('click', () => {
    alert('The search function is not available yet. Thank you for your understanding.')
})