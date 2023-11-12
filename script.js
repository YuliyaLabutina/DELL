//НАВИГАЦИЯ НА МОБИЛЬНОЙ ВЕРСИИ
const gamberger = document.querySelector('.main-nav-toggle');
const mainNav = document.querySelector('.main-nav')
const menu = document.querySelector('.site-navigation')
// gamberger.onclick=function(){
//     mainNav.classList.remove('main-nav-closed')
//     mainNav.classList.add('main-nav-opened')
// }
function interaction_nav() {
    if (mainNav.classList.contains('main-nav-opened')) {
        mainNav.classList.remove('main-nav-opened');
        mainNav.classList.add('main-nav-closed');
        menu.classList.remove('opened');
        menu.classList.add('closed')
    }
    else {
        mainNav.classList.remove('main-nav-closed')
        mainNav.classList.add('main-nav-opened')
        menu.classList.add('opened');
        menu.classList.remove('closed')
    }
}
gamberger.addEventListener('click', interaction_nav);
//СЛАЙДЕР
const sliderImages = document.querySelectorAll('.slider_img'),
    sliderLine = document.querySelector('.slider_line'),
    sliderDots = document.querySelectorAll('.slider_dot'),
    sliderButton = document.querySelector('.slider_button');
//переменные
let sliderCount = 0;
let sliderWidth;
//адаптивность слайдера
window.addEventListener('resize', showSlide);
//функции
//задает нужную ширину картинки и sliderLine
function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.computedStyleMap.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.computedStyleMap.width = sliderWidth + 'px');
    rollSlider();
}
showSlide();
//пролистывание слайдов
function nextSlider() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;
    thisSlider(sliderCount);
    rollSlider();
}
//задает шаг перемещения слайдов
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}
//кнопка переключения
sliderButton.addEventListener('click', nextSlider);
//указывает какой слайд по счету активен
function thisSlider(index) {
    sliderDots.forEach(item => item.classList.remove('active_dot'));
    sliderDots[index].classList.add('active_dot');
}
//вешает клик на dot
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlider(sliderCount)
    })
})
//ВАЛИДАЦИЯ
const validationBTN = document.querySelector('.button_validation');
const form = document.querySelector('.form');
const yourName = document.querySelector('.your_name');
const yourTelephone = document.querySelector('.your_telephone');
const yourComment = document.querySelector('.your_comment');
const files = document.querySelectorAll('.file');
const inputs = document.querySelector('.fieldset')
const a = document.querySelector('input:focus');
let error = document.createElement('div')


form.addEventListener('submit', function (event) {
    event.preventDefault()
    let errors = form.querySelectorAll('.error')

    for (let i = 0; i < errors.length; i++) {
        errors[i].remove()
    }
    const focus1 = yourName.onfocus
    for (let i = 0; i <= files.length; i++) {
        if (!files[i].value) {
            var error = document.createElement('div')
            error.className = 'error'
            error.style.color = 'red'
            error.style.marginTop = '22px'
            error.style.marginLeft = '10px'
            error.innerHTML = 'Обязателное поле'
            files[i].parentElement.insertBefore(error, files[i])
            files[i].style.cssText += 'border: 1px solid red;';
        }
        else {
            errors[i].remove()
            files[i].style.cssText = 'border:none;';
        }
    }
})


