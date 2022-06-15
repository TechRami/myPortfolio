const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar')
// const darkModeBtn = document.querySelector('.darkModeBtn')
const pageBody = document.getElementById('pageBody')
const aboutmeAnim = document.querySelector('.aboutme-section')
const experienceAnim = document.querySelector('.experience-section')
const myworkAnim = document.querySelector('.mywork-section')
const contactmeAnim = document.querySelector('.contactme-section')
const navLinks = document.getElementsByClassName('nav-link')
const logo = document.getElementsByClassName('logo')[0]

console.log(navLinks)



const animateBtn = () =>{
    menuBtn.classList.toggle('active');
    navbar.classList.toggle('bgc-dark');
}

menuBtn.addEventListener('click', animateBtn)


//  DARKMODE FUNCTION: Wroking on this later. //
// const darkMode = () => {
//     pageBody.classList.toggle('darkMode')
// }
// darkModeBtn.addEventListener('click', darkMode);


// ----------  Navbar animation on scroll ----------  //
const navCon = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY >= 150 && window.scrollY <= 249) {
        navCon.classList.add('scrolled');
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = '#7963FF'
        }
        logo.style.fill = '#7963FF'
        
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
        navCon.classList.remove('scrolled');
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