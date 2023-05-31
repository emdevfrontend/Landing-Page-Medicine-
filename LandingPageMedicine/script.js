const menu = document.querySelector('.menu');
const btnResponsive = document.querySelector('.responsive-btn');

// Navbar

btnResponsive.addEventListener("click", () => {
    btnResponsive.classList.toggle('active');
    menu.classList.toggle('active');

    if(menu.className.endsWith('active')){
        btnResponsive.innerHTML = "<i class='bx bx-x-circle'></i>"
    }
    else{
        btnResponsive.innerHTML = "<i class='bx bx-menu-alt-right'></i>"
    }
});

// Slide

