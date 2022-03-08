const container = document.querySelector('.container');
const layers = document.querySelectorAll('.layer');

container.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    layers[0].style.transform = 'translate('+ x/100 +'px, '+ y/100 +'px)';
    layers[1].style.transform = 'translate('+ x/100*2 +'px, '+ y/100*-2 +'px)';
    layers[2].style.transform = 'translate('+ x/100*4 +'px, '+ y/100*-4 +'px)';
    layers[3].style.transform = 'translate('+ x/100*6 +'px, '+ y/100*-6 +'px)';
    layers[4].style.transform = 'translate('+ x/100*8 +'px, '+ y/100*-8 +'px)';
    layers[5].style.transform = 'translate('+ x/100*10 +'px, '+ y/100*-10 +'px)';
    layers[6].style.transform = 'translate('+ x/100*12 +'px, '+ y/100*-12 +'px)';
});
