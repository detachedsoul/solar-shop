let preloaderContainer = document.querySelector('.preloader-container');
window.onload = () => {
    setTimeout(() => {
        preloaderContainer.classList.add('d-none');
    }, 1000);
};

let toTopBtn = document.querySelector('.to-top');
let header = document.querySelector('header');
window.onscroll = () => {

    if (document.documentElement.scrollTop >= 200 || document.body.scrollTop > 200) {
        toTopBtn.classList.add('show-to-top');
        header.classList.add('shadow');
    } else {
        toTopBtn.classList.remove('show-to-top');
        header.classList.remove('shadow');
    }

};


toTopBtn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

});


function toggleElement(toggleBtn, elementToToggle, classToToggle, secondaryBtn = null) {

    let toggler = document.querySelector(toggleBtn);
    let element = document.querySelector(elementToToggle);

    toggler.addEventListener('click', () => {
        element.classList.toggle(classToToggle);
        if (secondaryBtn !== null) {
            toggler.classList.toggle(secondaryBtn);
        }
    });

}

let dropdownToggle = document.querySelector('.dropdown-toggle');
let dropdownToggleLastChild = document.querySelector('.dropdown-toggle').lastElementChild;
dropdownToggle.addEventListener('click', () => {
    if (!dropdownToggleLastChild.classList.contains('fi-rr-angle-small-up')) {
        dropdownToggleLastChild.classList.remove('fi-rr-angle-small-down');
        dropdownToggleLastChild.classList.add('fi-rr-angle-small-up');
        dropdownToggle.classList.add('active');
    } else {
        dropdownToggleLastChild.classList.remove('fi-rr-angle-small-up');
        dropdownToggleLastChild.classList.add('fi-rr-angle-small-down');
        dropdownToggle.classList.remove('active');
    }
});


toggleElement('.nav-toggle', '.nav-link-container', 'nav-link-open', 'nav-toggle-close');
toggleElement('.search-toggle', '.searchbar-container', 'show-searchbar');
toggleElement('.dropdown-toggle', '.dropdown', 'd-block');