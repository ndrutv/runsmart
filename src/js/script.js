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


// Slider
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => {
    slider.goTo('prev');
});

next.addEventListener('click', () => {
    slider.goTo('next');
});


// Catalog
// -- Tabs
const tabs = document.querySelectorAll('.catalog__tab');
const catalog = document.querySelectorAll('.catalog__content');

const hideCatalog = () => {
    tabs.forEach(tab => {
        tab.classList.remove('catalog__tab_active');
    });

    catalog.forEach(item => {
        item.classList.remove('catalog__content_active');
    });
}

const showCatalog = (i = 0) => {
    catalog[i].classList.add('catalog__content_active');
    tabs[i].classList.add('catalog__tab_active');
}

tabs.forEach((tab, i) => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        hideCatalog();
        showCatalog(i);
    })
});


// -- Items
const content = document.querySelectorAll('.catalog-item__content');
const list = document.querySelectorAll('.catalog-item__list');
const links = document.querySelectorAll('.catalog-item__link');
const backs = document.querySelectorAll('.catalog-item__back');

const toggleContent = (i) => {
    content[i].classList.toggle('catalog-item__content_active');
    list[i].classList.toggle('catalog-item__list_active');
}

links.forEach((link, i) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        toggleContent(i);
    })
})

backs.forEach((back, i) => {
    back.addEventListener('click', (e) => {
        e.preventDefault();
        toggleContent(i);
    })
})