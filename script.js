const navBtn = document.querySelector("#nav-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const sideNav = document.querySelector("#sidenav");
const modal = document.querySelector("#modal");

navBtn.addEventListener('click', () =>{
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', () =>{
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', (event) =>{
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal')
    }
});