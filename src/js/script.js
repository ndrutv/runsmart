document.addEventListener('DOMContentLoaded', () => {
    // Slider
    const carouselWrapper = document.querySelector('.carousel__slide-wrapper');
    const carouselInner = document.querySelector('.carousel__inner');
    const slides = document.querySelectorAll('.carousel__item');
    const width = window.getComputedStyle(carouselWrapper).width;
    const prev = document.querySelector('.carousel__prev');
    const next = document.querySelector('.carousel__next');
    
    let offset = 0;
    let slideIndex = 1;

    carouselInner.style.width = 100 * slides.length + '%';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    next.addEventListener('click', () => {
        if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2); 
        }

        carouselInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        carouselInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
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

    showCatalog();

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            hideCatalog();
            showCatalog(i);
        })
    });


    // Catalog
    // -- Items
    const content = document.querySelectorAll('.catalog-item__content');
    const list = document.querySelectorAll('.catalog-item__list');
    const links = document.querySelectorAll('.catalog-item__link');
    const backs = document.querySelectorAll('.catalog-item__back');

    content.forEach((item) => {
        item.classList.add('catalog-item__content_active');
    })

    const toggleItemContent = (block, i) => {
        block.addEventListener('click', (e) => {
            e.preventDefault();
            
            content[i].classList.toggle('catalog-item__content_active');
            list[i].classList.toggle('catalog-item__list_active');
        })
    }

    links.forEach((link, i) => {
        toggleItemContent(link, i);
    })

    backs.forEach((back, i) => {
        toggleItemContent(back, i);
    })
})