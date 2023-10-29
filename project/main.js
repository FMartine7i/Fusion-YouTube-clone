// variables
const menuOpen = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar')
const showSubs = document.querySelector('.show-subs')
const showSideBar = document.querySelector('.menu-sidebar')
const subsList = document.querySelector('.subscription-list')
const mainContainer = document.querySelector('.main-container')
const navBar = document.querySelector('.flex-nav')
const vidLists = document.querySelectorAll('.vid-list');

//dark light mode toggle
const toggleTheme = document.querySelector('.options-container-hidden')
const toggleButton = document.querySelector('.theme-toggle')
const lightModeBtn = document.querySelector('.light-mode-box')
const darkModeBtn = document.querySelector('.dark-mode-box')


// events
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
    subsList.classList.toggle('show-subs-list');
})

toggleButton.addEventListener('click', () => {
    toggleTheme.classList.toggle('options-container')
})

lightModeBtn.addEventListener('click', () => {
    darkModeBtn.style.background = "transparent"
    lightModeBtn.style.background = "rgb(105, 13, 180)"
    document.body.style.background = "#fff"
    document.body.style.color = "#272327"
    navBar.style.background = "transparent"
    sidebar.style.border = "none"
    sidebar.style.background = "#f0f0f0"
    
    vidLists.forEach((vidList) => {
        vidList.style.background = "#e0e0e0";
    });
})

darkModeBtn.addEventListener('click', () => {
    darkModeBtn.style.background = "rgb(105, 13, 180)"
    lightModeBtn.style.background = "transparent"
    document.body.style.background = "#272327"
    document.body.style.color = "#fff"
    navBar.style.background = "#00000028"
    sidebar.style.background = "#242024"
    
    vidLists.forEach((vidList) => {
        vidList.style.background = "#151516";
    });
})

