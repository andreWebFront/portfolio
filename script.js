let navLink = document.querySelectorAll('.nav-links');
let headerNavContainer = document.querySelector('.header-nav__container');

for(let i = 0; i < navLink; i++){
    navLink[i].addEventListener('click', ()=>{
        let active = document.querySelector('.active');
        active[0].className.replace('active', '');
        this.ClassName += " active";
    });
}