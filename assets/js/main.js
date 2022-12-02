var swiper = new Swiper(".main_slide", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".bsSlide", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".ltSlide", {
    slidesPerView: "auto",
    spaceBetween: 30,
});

var swiper = new Swiper(".ltSlide_mo", {

});

(() => {
    const prevBtn2 = document.querySelector('.prevBtn2');
    const nextBtn2 = document.querySelector('.nextBtn2');
    const first = document.querySelector('.first');
    const second = document.querySelector('.second');
    const third = document.querySelector('.third');
    const ftImg = document.querySelectorAll('.first img');
    const scImg = document.querySelectorAll('.second img');
    const trImg = document.querySelectorAll('.third img');
    let setToggle = 0;
    let prevToggle = 0;
    
    nextBtn2.addEventListener('click', function () {
        for (let i = 0; i < ftImg.length; i++) {
            ftImg[i].classList.remove('now', 'prev');
            scImg[i].classList.remove('now', 'prev');
            trImg[i].classList.remove('now', 'prev');
        }
        if (setToggle == ftImg.length - 1) {
            setToggle = 0;
        } else {
            setToggle++;
        }
        ftImg[setToggle].classList.add('now');
        scImg[setToggle].classList.add('now');
        trImg[setToggle].classList.add('now');

        if (setToggle == 0) {
            prevToggle = ftImg.length - 1;
        } else {
            prevToggle = setToggle - 1;
        }
        ftImg[prevToggle].classList.add('prev');
        scImg[prevToggle].classList.add('prev');
        trImg[prevToggle].classList.add('prev');
    });

    

})();