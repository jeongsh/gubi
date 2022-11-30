(() => {
    const now = document.querySelector('.now');
    const next = document.querySelector('.next');
    const prevBtn = document.querySelector('.prevBtn');
    const nextBtn = document.querySelector('.nextBtn');
    let dataIndex = 0;

    let slideAuto = setInterval(function(){}, 200);
    
    function slideNext() {
        if (dataIndex == 3) {
            dataIndex = 0;
            now.dataset.index = dataIndex;
            next.dataset.index = dataIndex + 1;
        } else if (dataIndex == 2) {
            dataIndex++;
            now.dataset.index = dataIndex;
            next.dataset.index = 0;
        } else {
            dataIndex++;
            now.dataset.index = dataIndex;
            next.dataset.index = dataIndex + 1;
        }
    }

    function slidePrev() {
        if (dataIndex == 0) {
            dataIndex = 3;
            now.dataset.index = dataIndex;
            next.dataset.index = 0;

        } else {
            dataIndex--;
            now.dataset.index = dataIndex;
            next.dataset.index = dataIndex + 1;
        }
    }
    
    function start(){
        slideAuto = setInterval(slideNext, 4000);
    }


    next.addEventListener('click', function(){
        slideNext();
    })
    nextBtn.addEventListener('click', function () {
        slideNext();
    })

    prevBtn.addEventListener('click', function () {
        slidePrev();
    })
    


})();