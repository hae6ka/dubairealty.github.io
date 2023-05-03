const mainSlider = document.querySelector('.main__slider');
const textBlock = document.querySelector('.main__text');
const body = document.querySelector('body');


function mainSliderHeight () {

    mainSlider.src = 'i/services/main-slider.png';


    mainSlider.src = 'i/services/main-slider.png';

    mainSlider.style.height = mainSlider.width / 2.3 + 'px';


    if (body.offsetWidth <= 500) {
        var mTop = mainSlider.height - mainSlider.height * 2 + mainSlider.height * 0.3 + 10;
    } else {
        var mTop = (mainSlider.height - mainSlider.height * 2) + (mainSlider.height * 0.4);
    }

    textBlock.style.marginTop = mTop + 'px';
};

mainSliderHeight();

window.addEventListener('resize', mainSliderHeight);