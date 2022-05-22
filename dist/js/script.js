const menuBtn = document.querySelector('.menu-btn');
const animateBtn = () =>{
    menuBtn.classList.toggle('active');
}

menuBtn.addEventListener('click', animateBtn)
