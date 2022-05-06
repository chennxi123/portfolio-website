const hamburger = document.querySelector('.hamburger-container')
const navLinks = document.querySelector('.navbar-links')

let hamburgerAnimate = false

hamburger.addEventListener('click' , () => {
  if(!hamburgerAnimate){
    navLinks.classList.add('show')
    hamburger.classList.add('animate')
    hamburgerAnimate = true
  }

  else{
    navLinks.classList.remove('show')
    hamburger.classList.remove('animate')
    hamburgerAnimate = false
  }
})


// DARK MODE

const dark = document.querySelector('.switch-container')
const ball = document.querySelector('.ball')
const hero = document.querySelector('.hero')
const about = document.querySelector('.about')
const services = document.querySelector('.service')
const projects = document.querySelector('.projects')
const contact = document.querySelector('.contact')
const navbar = document.querySelector('.navbar')
let darkValue = false


dark.addEventListener('click' , () => {
  if(darkValue === false){
    ball.classList.add('right')
    hero.classList.add('darkMode')
    about.classList.add('darkMode')
    services.classList.add('darkMode')
    projects.classList.add('darkMode')
    contact.classList.add('darkMode')
    navbar.classList.add('darkMode')

    darkValue = true
  }
  else{
    ball.classList.remove('right')
    hero.classList.remove('darkMode')
    about.classList.remove('darkMode')
    services.classList.remove('darkMode')
    projects.classList.remove('darkMode')
    contact.classList.remove('darkMode')
    navbar.classList.remove('darkMode')

    darkValue = false
  }
})