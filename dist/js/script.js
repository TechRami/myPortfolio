const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar')
// const darkModeBtn = document.querySelector('.darkModeBtn')
const pageBody = document.getElementById('pageBody')
const aboutmeAnim = document.querySelector('.aboutme-section')
const experienceAnim = document.querySelector('.experience-section')
const myworkAnim = document.querySelector('.mywork-section')
const contactmeAnim = document.querySelector('.contactme-section')
const navLinks = document.getElementsByClassName('nav-link')
const menuLines = document.getElementsByClassName('line')
const logo = document.getElementsByClassName('logo')[0]
// const navCon = document.querySelector('.navbar');


const animateBtn = () =>{
    menuBtn.classList.toggle('active');
    navbar.classList.toggle('bgc-dark');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('active-navLink')
    }
    for (let i = 0; i < menuLines.length; i++) {
        menuLines[i].classList.toggle('active-menuButton')
    }
    logo.classList.toggle('active-logo')
}

menuBtn.addEventListener('click', animateBtn)


//  DARKMODE FUNCTION: Wroking on this later. //
// const darkMode = () => {
//     pageBody.classList.toggle('darkMode')
// }
// darkModeBtn.addEventListener('click', darkMode);


// ----------  Navbar animation on scroll ----------  //
window.onscroll = () => {
    if (window.scrollY >= 150 && window.scrollY <= 249) {
        navbar.classList.add('scrolled');
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = '#7963FF'
        }
        logo.style.fill = '#7963FF'
        for (let i = 0; i < menuLines.length; i++) {
            menuLines[i].style.backgroundColor = '#696969'
        }
        
    }
    else if (window.scrollY >= 250 && window.scrollY <= 999) {
        aboutmeAnim.style.opacity = '100';
        aboutmeAnim.style.transform = "translate(0)"
        // 
    }
    else if (window.scrollY >= 1000 && window.scrollY <= 1800) {
        experienceAnim.style.opacity = '100';
        experienceAnim.style.transform = "translate(0)"
        // 
    }
    else if (window.scrollY >= 1801 && window.scrollY <= 2599) {
        myworkAnim.style.opacity = '100';
        myworkAnim.style.transform = "translate(0)"
        // 
    }
    else if (window.scrollY >= 2600) {
        contactmeAnim.style.opacity = '100';
        // 
    }

    else {
        navbar.classList.remove('scrolled');
        aboutmeAnim.style.opacity = '0';
        aboutmeAnim.style.transform = "translate(-20%)"
        // 
        experienceAnim.style.opacity = '0';
        experienceAnim.style.transform = "translateY(20%)"
        // 
        myworkAnim.style.opacity = '0';
        myworkAnim.style.transform = "translate(-20%)"
        // 
        contactmeAnim.style.opacity = '0';
        // 
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = '#fff'
        }
        logo.style.fill = '#ffffff'
        for (let i = 0; i < menuLines.length; i++) {
            menuLines[i].style.backgroundColor = '#ffffff'
        }
    }
};



document.querySelector(".scroll-btn").addEventListener("click", () => {
    event.preventDefault();
    window.scrollTo(0, 0);
   })

document.querySelector(".aboutme").addEventListener("click", () => {
    event.preventDefault();
    window.scrollTo(0, 520);
   })

document.querySelector(".mywork").addEventListener("click", () => {
    event.preventDefault();
    window.scrollTo(0, 2050);
   })

document.querySelector(".contact").addEventListener("click", () => {
    event.preventDefault();
    window.scrollTo(0, 2900);
   }) 