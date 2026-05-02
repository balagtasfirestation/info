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
                                <div class="main-slider-one__btn"> <a href="${item.video}" target="_blank" class="firdip-btn main-slider-one__btn__link">Discover More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
});

document.getElementById('mainSlider_print').innerHTML = heroprint;

let newsPrint = '';

newsData.forEach(item => {
    newsPrint += `
        <div class="col-md-6 col-lg-4">
            <div class="blog-card wow fadeInUp" data-wow-duration="1500ms">
                
                <a href="${item.link}" class="blog-card__image">
                    <img src="assets/images/news/${item.img}" alt="${item.title}">
                </a>

                <div class="blog-card__content">
                    <p class="blog-card__date">${item.date}</p>
                    <h3 class="blog-card__title">${item.title}</h3>
                    
                    <a href="${item.link}" class="blog-card__link">
                        Read More <i class="icon-arrow-left"></i>
                    </a>
                </div>

            </div>
        </div>
    `;
});

document.getElementById('news_print').innerHTML = newsPrint;