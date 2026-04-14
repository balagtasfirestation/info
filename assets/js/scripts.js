let heroprint = '';

herodata.forEach(item => {
    heroprint += `
        <div class="item">
            <div class="main-slider-one__item">
                <div class="main-slider-one__bg" style="background-image: url(assets/images/background/${item.img});"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="main-slider-one__content">
                                <h2 class="main-slider-one__title fire-text">${item.title}</h2>
                                <p class="main-slider-one__text">${item.description}</p>
                                <div class="main-slider-one__btn"> <a href="services.html" class="firdip-btn main-slider-one__btn__link">Discover More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
});

document.getElementById('mainSlider_print').innerHTML = heroprint;