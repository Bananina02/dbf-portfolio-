document.addEventListener("DOMContentLoaded", () => {
    let gallerySwiper1;

    gallerySwiper1 = new Swiper('.case-detail-stages-list-item-gallery', {
        direction: 'horizontal',
        slidesPerView: 2,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1359:{
                slidesPerView:3
            },
            768:{
                slidesPerView:2
            },
            320:{
                slidesPerView:1
            },
        }
    });


    let gallerySwiper2
    gallerySwiper2 = new Swiper('.other-service-swiper-container',{
        direction: 'horizontal',
        spaceBetween: 16,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
          prevEl: ".section-main-btn-item.prev",
          nextEl: ".section-main-btn-item.next"
        },
        breakpoints: {
            1359: {
                slidesPerView: 3
            },
            768:{
                slidesPerView:2
            },
            320:{
              slidesPerView: 1
            },
        }
        })
    let gallerySwiper3;
    gallerySwiper3 = new Swiper('.industries-slider-container',{
        direction: 'horizontal',
        spaceBetween: 16,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1359: {
                slidesPerView: 5
            },
            768:{
                slidesPerView:2
            },
            320:{
                slidesPerView: 1
            },
        }
    })

    let map;

    async function initMap() {
        // The location of Uluru
        const position = { lat: -25.344, lng: 131.031 };
        // Request needed libraries.
        //@ts-ignore
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

        // The map, centered at Uluru
        map = new Map(document.getElementById("map"), {
            zoom: 4,
            center: position,
            mapId: "DEMO_MAP_ID",
        });

        // The marker, positioned at Uluru
        const marker = new AdvancedMarkerElement({
            map: map,
            position: position,
            title: "Uluru",
        });
    }

    initMap();


    let mainSwiper;
    mainSwiper = new Swiper(".section-main-container",{
        autoHeight: true,
        slidesPerView: 1,
        parallax: true,
        speed: 600,
        navigation: {
            nextEl: ".section-main-btn-item:last-child a",
            prevEl: ".section-main-btn-item:first-child a",
        },
    })
});