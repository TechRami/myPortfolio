const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar')



const animateBtn = () =>{
    menuBtn.classList.toggle('active');
    
}

const navbarBgcolor = () =>{
    navbar.classList.toggle('bgc-dark');
}

menuBtn.addEventListener('click', animateBtn)

navbar.addEventListener('click', navbarBgcolor);
