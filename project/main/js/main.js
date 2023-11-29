// variables
const menuOpen = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar')
const showSubs = document.querySelector('.show-subs')
const subsList = document.querySelector('.subscription-list')
const mainContainer = document.querySelector('.main-container')
const navBar = document.querySelector('.flex-nav')
const vidLists = document.querySelectorAll('.vid-list');
const closeBtn = document.querySelector('.close__btn')
const banner = document.querySelector('.banner')

//dark light mode toggle
const toggleTheme = document.querySelector('.options-container-hidden')
const toggleButton = document.querySelector('.theme-toggle')
const lightModeBtn = document.querySelector('.light-mode-box')
const darkModeBtn = document.querySelector('.dark-mode-box')
const shortCutLinks = document.querySelector('.shortcut-links')
const aLinks = document.querySelectorAll('a')
const bar = document.querySelectorAll('.bar')
const searchInput = document.querySelector('.search-input')
const searchIconDark = document.querySelector('.search')

// events
menuOpen.addEventListener('click', () => {
    sidebar.classList.toggle("small-sidebar");
    menuOpen.classList.toggle('open__menu');

    if(sidebar.classList.contains('small-sidebar')) {
        mainContainer.style.paddingLeft = "7%";
    }
    else{
        mainContainer.style.paddingLeft = "17%";
    }
})

closeBtn.addEventListener('click', () => {
    banner.style.display = "none";
})

showSubs.addEventListener('click', () => {
    showSubs.classList.toggle('title-change');
    subsList.classList.toggle('show-subs-list');
    if(subsList.classList.contains('show-subs-list')) {
        subsList.style.marginTop = "10px";
    }
    else{
        subsList.style.marginTop = "0px";
    }
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
    sidebar.style.background = "#f0f0f0"

    searchInput.style.background = "#fff"
    searchInput.style.color = "#242024"

    bar.forEach((bar) => {
        bar.style.background = "#000"
    })

    aLinks.forEach((aLink) => {
        aLink.style.color = "#242024"
    })

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

    aLinks.forEach((aLink) => {
        aLink.style.color = "#242024"
    })
})
