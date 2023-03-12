const slider = tns({
    container: '.carousel__inner',
    controls: false,
    nav: false,
    center: true,
    autoWidth: true,
    items: 1,
    responsive: [
        
    ]
});

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => {
    slider.goTo('prev');
});

next.addEventListener('click', () => {
    slider.goTo('next');
});