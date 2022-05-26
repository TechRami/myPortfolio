const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar')
// const darkModeBtn = document.querySelector('.darkModeBtn')
const pageBody = document.getElementById('pageBody')



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
    if (window.scrollY > 150) {
        navCon.classList.add('scrolled');
    } else {
        navCon.classList.remove('scrolled');
    }
};