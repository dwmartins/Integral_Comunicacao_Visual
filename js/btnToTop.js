// Aqui vai fazer com que a pagina volte ao topo ao clicar no botão
const btn = document.querySelectorAll('.btn-scroll');

btn.forEach(item => {
    item.addEventListener('click', scrollToTop);
})

function scrollToTop(event) {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
};

//Aqui vai fazer o botão aparecer assim que rolar a página
window.onscroll = function () {
    btnDisplayNone()
};
function btnDisplayNone() {

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.querySelector('.btn-scroll').style.display = 'block'
    } else {
        document.querySelector('.btn-scroll').style.display = 'none';
    } 
}
