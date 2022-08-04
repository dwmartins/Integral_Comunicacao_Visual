const btn = document.querySelectorAll('.btn-to-top');

btn.forEach(item => {
    item.addEventListener('click', scrollToTop);
})

function scrollToTop(event) {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
};