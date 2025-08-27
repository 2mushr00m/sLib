
document.querySelectorAll('.header-menu > li').forEach(item => {
    item.addEventListener('click', () => {
        const othersHaveActive = Array.from(document.querySelectorAll('.header-menu > li')).some(
            i => i !== item && i.classList.contains('active')
        );
        if (othersHaveActive)
            document.querySelectorAll('.header-menu > li').forEach(i => i.classList.remove('active'));

        item.classList.toggle('active');
    });
});