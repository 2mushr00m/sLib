
document.querySelector('.header-popup-close').addEventListener('click', function () {
    document.querySelector('.header-popup').classList.add('hide');
    document.querySelectorAll('.header-sub-category-desc').forEach(desc => {
        desc.classList.add('popup-hide');
    });
    document.querySelector('main').style.paddingTop = '130px';
});

let lastScroll = 0;
let initialLoad = true;
window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (initialLoad) {
        initialLoad = false;
        lastScroll = currentScroll;
        return;
    }
    if (currentScroll > lastScroll) {
        document.querySelector('.header-popup').classList.add('hide');
        document.querySelectorAll('.header-sub-category-desc').forEach(desc => {
            desc.classList.add('popup-hide');
        });
        document.querySelector('main').style.paddingTop = '130px';
    }

    lastScroll = currentScroll;
});
