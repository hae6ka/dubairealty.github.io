const hr = document.querySelectorAll('.hrtask');
const footerArrow = document.querySelectorAll('.block__arrow');
const blockUl = document.querySelectorAll('.block__ul');

footer();

window.addEventListener('resize', function () {
    footer();
});

function footer () {
    if (window.innerWidth <= 900) {   
        hr.forEach(function (el) {
            el.classList.add('hr');
        });

        blockUl.forEach(function (el) {
            el.classList.add('_isNotActive');
        });
    } else {
        hr.forEach(function (el) {
            el.classList.remove('hr');
        });

        blockUl.forEach(function (el) {
            el.classList.remove('_isNotActive');
        });
    }
};

footerBtn1.addEventListener('click', function () {
    const navBlock = document.querySelector('#footerNav1');


    footerBtn1.classList.toggle('_faqBtn-animation');
    navBlock.classList.toggle('_isNotActive');
});

footerBtn2.addEventListener('click', function () {
    const navBlock = document.querySelector('#footerNav2');


    footerBtn2.classList.toggle('_faqBtn-animation');
    navBlock.classList.toggle('_isNotActive');
});

footerBtn3.addEventListener('click', function () {
    const navBlock = document.querySelector('#footerNav3');


    footerBtn3.classList.toggle('_faqBtn-animation');
    navBlock.classList.toggle('_isNotActive');
});

footerBtn4.addEventListener('click', function () {
    const navBlock = document.querySelector('#footerNav4');


    footerBtn4.classList.toggle('_faqBtn-animation');
    navBlock.classList.toggle('_isNotActive');
});

footerBtn5.addEventListener('click', function () {
    const navBlock = document.querySelector('#footerNav5');


    footerBtn5.classList.toggle('_faqBtn-animation');
    navBlock.classList.toggle('_isNotActive');
});