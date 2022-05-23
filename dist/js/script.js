const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar')
// const darkModeBtn = document.querySelector('.darkModeBtn')
const pageBody = document.getElementById('pageBody')

// const darkMode = () => {
//     pageBody.classList.toggle('darkMode')
// }


const animateBtn = () =>{
    menuBtn.classList.toggle('active');
    navbar.classList.toggle('bgc-dark');
}



menuBtn.addEventListener('click', animateBtn)


// darkModeBtn.addEventListener('click', darkMode);
