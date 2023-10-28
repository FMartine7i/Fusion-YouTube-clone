const menuOpen = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar')
const showSubs = document.querySelector('.show-subs')
const showSideBar = document.querySelector('.menu-sidebar')
const subsList = document.querySelector('.subscription-list')
const mainContainer = document.querySelector('.main-container')


showSideBar.addEventListener('click', () => {
    sidebar.classList.toggle("small-sidebar");

    if(sidebar.classList.contains('small-sidebar')) {
        mainContainer.style.paddingLeft = "7%";
    }
    else{
        mainContainer.style.paddingLeft = "17%";
    }
})

showSubs.addEventListener('click', () => {
    showSubs.classList.toggle('title-change');
    subsList.classList.toggle("show-subs-list");
})

