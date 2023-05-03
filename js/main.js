var sliderImage = document.querySelector('.slider__image');
var mainSocial = document.querySelector('.main__social');
var body = document.querySelector('body');
var sliderImage = document.querySelector('.slider__image');
var latestProjects = document.querySelector('.latestProjects');


function socialResize () {
    if (body.offsetWidth >= 1000) {
        let a = sliderImage.height - (sliderImage.height * 2 - 130);

        mainSocial.style.display = 'flex';
        
        mainSocial.style.marginTop = a + 'px';
    } else if(body.offsetWidth > 600 && body.offsetWidth < 1000) {
        let a = sliderImage.height - (sliderImage.height * 2 - 60);

        mainSocial.style.display = 'flex';

        mainSocial.style.marginTop = a + 'px';
    } else {
        mainSocial.style.display = 'none';
    }
};

socialResize();

window.addEventListener('resize', socialResize);

//смена image взависимости от ширины body

function sliderFunction() {
    if (body.offsetWidth >= 321) {
        sliderImage.src = 'i/main-slider.png';
    } else {
        sliderImage.src = 'i/main-slider_phone.jpg';
    };

    latestProjects.style.marginTop = sliderImage.height - 100 + 'px';
};

sliderFunction();

window.addEventListener('resize', sliderFunction);