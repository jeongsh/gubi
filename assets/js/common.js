(()=>{
    const section = document.querySelectorAll('section');
    const up = document.querySelector('.up');
    const menuBtn = document.querySelector('.menuBtn');
    const nav = document.querySelector('nav');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('on');
        nav.classList.toggle('on');
        menu.classList.toggle('on');
        
    });

    [].forEach.call(section, function (col) {
        window.addEventListener('scroll', function (e) {
            let scroll = this.scrollY;
            if (scroll >= col.offsetTop - (window.outerHeight) / 2.5) {
                col.classList.add('on')
            }
        })
    });

    up.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
})();