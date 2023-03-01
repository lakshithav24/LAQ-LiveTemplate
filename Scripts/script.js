// Middel section

var bubbleCount = 30;
var bubbleField = document.getElementById("bubble-field");

//generate bubbles with randomly timed animation durations
for (i = 0; i < bubbleCount; i++) {
    var randNum = Math.floor(Math.random() * 20) + 1;
    var animDur = 2 + (0.5 * randNum);
    moveEl = document.createElement('div');
    moveEl.setAttribute('class', 'bubble-rise');
    moveEl.setAttribute('style', 'animation-duration: ' + animDur + 's;');

    bubbleEl = document.createElement('div');
    bubbleEl.setAttribute('class', 'bubble');
    bubbleElContent = document.createTextNode('');
    bubbleEl.appendChild(bubbleElContent);

    moveEl.appendChild(bubbleEl)
    bubbleField.appendChild(moveEl);
}

(function($) {

    'use strict'
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }; // is Mobile

    var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if (matchMedia('only screen and (max-width: 991px)').matches) {
                currMenuType = 'mobile';
            }

            if (currMenuType !== menuType) {
                menuType = currMenuType;

                if (currMenuType === 'mobile') {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');
                    var hasChildMenuMega = $('#mainnav-mobi').find('li:has(div.submenu)');

                    $('#header').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    hasChildMenuMega.children('div.submenu').hide();
                    $('ul.submenu-child').hide();
                    hasChildMenuMega.find('h3').append('<span class="btn-submenu-child"></span>');
                    $('.btn-menu').removeClass('active');

                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');
                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                    $('ul.submenu-child').show();
                    $('h3').children('span').removeClass('btn-submenu-child');
                }
            }
        });

        $('.btn-menu').on('click', function() {
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
            return false;
        });

        $(document).on('click', '#mainnav-mobi li.has-mega-menu .row .btn-submenu-child', function(e) {
            $(this).toggleClass('active').parent('h3.cat-title').next('.submenu-child').slideToggle(400);
            e.stopImmediatePropagation();
            return false;
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('.submenu').slideToggle(400);
            e.stopImmediatePropagation();
            return false;
        });

    }; // Responsive Menu       

    var responsiveMenuMega_S2 = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if (matchMedia('only screen and (max-width: 991px)').matches) {
                currMenuType = 'mobile';
            }

            if (currMenuType !== menuType) {
                menuType = currMenuType;

                if ($('body').hasClass('grid')) {
                    if (currMenuType === 'mobile') {
                        var $mobileMenuMegaV2 = $('#mega-menu').attr('id', 'mega-mobile').hide();
                        var ChildMenuMegaV2 = $('.header-bottom').find('.grid-right');
                        var ChildDropmenuV2 = $('.drop-menu').children('.one-third');

                        $('.btn-mega').hide();
                        $('#header').after($mobileMenuMegaV2);
                        ChildMenuMegaV2.append('<div class="btn-menu-mega"><span></span></div>');

                        $('.drop-menu').hide();
                        $mobileMenuMegaV2.find('.dropdown').append('<span class="btn-dropdown"></span>');

                        ChildDropmenuV2.children('ul').hide();
                        $('.drop-menu').find('.cat-title').append('<span class="btn-dropdown-child"></span>');

                    } else {
                        var $desktopMenuMegaV2 = $('#mega-mobile').attr('id', 'mega-menu').removeAttr('style');

                        $desktopMenuMegaV2.find('.drop-menu').removeAttr('style');
                        $('.header-bottom.style1').find('.grid-left').append($desktopMenuMegaV2);
                    }
                };

            };

        });


        $(document).on('click', '#mega-mobile ul.menu li a .btn-dropdown', function(e) {
            $(this).toggleClass('active').closest('li').children('.drop-menu').slideToggle(400);
            e.stopImmediatePropagation();
            return false;
        });

        $(document).on('click', '#mega-mobile .btn-dropdown-child', function(e) {
            $(this).toggleClass('active').closest('.one-third').children('ul').slideToggle(400);
            e.stopImmediatePropagation();
            return false;
        });

    }; // Responsive Menu Mega S2

    var responsiveMenuMega = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if (matchMedia('only screen and (max-width: 991px)').matches) {
                currMenuType = 'mobile';
            }

            if (currMenuType !== menuType) {
                menuType = currMenuType;

                if (currMenuType === 'mobile') {
                    var $mobileMenuMega = $('#mega-menu').attr('id', 'mega-mobile').hide();
                    var ChildMenuMega = $('.header-bottom').find('.col-2');
                    var ChildDropmenu = $('.drop-menu').children('.one-third');

                    $('.btn-mega').hide();
                    $('#header').after($mobileMenuMega);
                    ChildMenuMega.append('<div class="btn-menu-mega"><span></span></div>');

                    $('.drop-menu').hide();
                    $mobileMenuMega.find('.dropdown').append('<span class="btn-dropdown"></span>');

                    ChildDropmenu.children('ul').hide();
                    $('.drop-menu').find('.cat-title').append('<span class="btn-dropdown-child"></span>');

                } else {
                    var $desktopMenuMega = $('#mega-mobile').attr('id', 'mega-menu').removeAttr('style');

                    $('.btn-mega').show();
                    $desktopMenuMega.find('.drop-menu').removeAttr('style');
                    $('.header-bottom').find('.col-2').append($desktopMenuMega);
                    $('.btn-menu-mega').remove();
                    $('.btn-dropdown-child').remove();
                    $('.drop-menu').children('.one-third').children('ul').show();
                }
            }
        });

        $(document).on('click', '.btn-menu-mega', function() {
            $('#mega-mobile').slideToggle(300);
            $(this).toggleClass('active');
            return false;
        });

        $(document).on('click', '#mega-mobile ul.menu li a .btn-dropdown', function(e) {
            $(this).toggleClass('active').closest('li').children('.drop-menu').slideToggle(400);
            e.stopImmediatePropagation();
            return false;
        });

        $(document).on('click', '#mega-mobile .btn-dropdown-child', function(e) {
            $(this).toggleClass('active').closest('.one-third').children('ul').slideToggle(400);
            e.stopImmediatePropagation();
            return false;
        });


    }; // Responsive Menu Mega

    var searchButton = function() {
        var showsearch = $('.show-search button');
        showsearch.on('click', function() {
            $('.show-search').parent('div').children('.top-search.style1').toggleClass('active');
            showsearch.toggleClass('active');
        });
    }; // Show Search


    // Dom Ready
    $(function() {
        responsiveMenu();
        responsiveMenuMega_S2();
        responsiveMenuMega();
        searchButton();
    });

})(jQuery);


var Product = [{
        "id": "1",
        "CategoryName": "DIVER'S DEN"
    },
    {
        "id": "2",
        "CategoryName": "FRESHWATER FISH"
    },
    {
        "id": "3",
        "CategoryName": "FRESHWATER PLANTS"
    },
]


for (x in Product) {
    var sel = document.createElement("option");
    sel.innerHTML = Product[x].CategoryName;
    sel.value = Product[x].CategoryName;
    document.getElementById("AllProduct").appendChild(sel);
}


$.each(Product, function(index, object) {
    $("ul.list").append("<li>" + object.CategoryName + "</li>");
});


// slider

const slides = [{
        id: 1,
        image: "Images/banner01.jpg",
        text1: "This is Slide 1",
        text2: "Wahoo",
        buttonText: "Learn More",
        buttonURL: "#"
    },
    {
        id: 2,
        image: "Images/banner02.jpg",
        text1: "This is Slide 2",
        text2: "Wahoo",
        buttonText: "Learn More",
        buttonURL: "#"
    },
    {
        id: 3,
        image: "Images/banner03.jpg",
        text1: "This is Slide 3",
        text2: "Wahoo",
        buttonText: "Learn More",
        buttonURL: "#"
    },
    {
        id: 4,
        image: "Images/banner04.jpg",
        text1: "This is Slide 4",
        text2: "Wahoo",
        buttonText: "Learn More",
        buttonURL: "#"
    },
    {
        id: 5,
        image: "Images/banner02.jpg",
        text1: "This is Slide 5",
        text2: "Wahoo",
        buttonText: "Learn More",
        buttonURL: "#"
    }
];

const amt = 100 / slides.length;
const slider = document.querySelector(".slider");

let value = 0;
let indicatorsValue = 0;
let interval = 5100;

let indicators;
let start;

loadSlides();

async function loadSlides() {
    await createSlides();
    await createIndicators();

    start = setInterval(() => slide("increase"), interval);

    document.querySelectorAll(".navigation").forEach((cur) => {
        cur.addEventListener("click", () =>
            cur.classList.contains("next") ? slide("increase") : slide("decrease")
        );
    });

    indicators.forEach((cur) =>
        cur.addEventListener("click", (ev) => clickCheck(ev))
    );

    const touchSlide = (() => {
        let start, move, change, sliderWidth;

        slider.addEventListener("touchstart", (e) => {
            start = e.touches[0].clientX;
            sliderWidth = slider.clientWidth / indicators.length;
        });

        slider.addEventListener("touchmove", (e) => {
            e.preventDefault();
            move = e.touches[0].clientX;
            change = start - move;
        });

        const mobile = (e) => {
            change > sliderWidth / 4 ? slide("increase") : null;
            change * -1 > sliderWidth / 4 ? slide("decrease") : null;
            [start, move, change, sliderWidth] = [0, 0, 0, 0];
        };
        slider.addEventListener("touchend", mobile);
    })();
}

//Create slides from JSON object "slides"
function createSlides() {
    for (let i = 0; i < slides.length; i++) {
        const slide = document.createElement("div");
        slide.classList.add("slider__slide");
        slide.innerHTML = `<img src="${slides[i].image}" class="slider__slide__image"><div class="slider__slide__details"><h1>${slides[i].text1}</h1><p>${slides[i].text2}</p><a href="${slides[i].buttonURL}">${slides[i].buttonText}</a></div>`;
        document.querySelector(".slider").appendChild(slide);
    }
}

//Create indicators based on the number of slides
function createIndicators() {
    for (let i = 0; i < slides.length; i++) {
        const box = document.createElement("div");
        box.setAttribute("data-index", i);
        document.querySelector(".indicators").appendChild(box);
    }
    indicators = document.querySelector(".indicators").querySelectorAll("div");
    indicators[0].classList.add("active");
    document.querySelector(":root").style.setProperty("--index", slides.length);
}

// function to transform slide
function move(S, T) {
    slider.style.transform = `translateX(-${S}%)`;
    indicators[T].classList.add("active");
}

// Check which indicator was clicked
function clickCheck(e) {
    clearInterval(start);
    indicators.forEach((cur) => cur.classList.remove("active"));
    const check = e.target;
    check.classList.add("active");

    value = check.getAttribute("data-index") * amt;

    indicatorsUpdate();
    move(value, indicatorsValue);
    start = setInterval(() => slide("increase"), interval);
}

function indicatorsUpdate() {
    indicatorsValue = value / amt;
}

function slide(condition) {
    clearInterval(start);
    condition === "increase" ? slideIncrease() : slideDecrease();
    move(value, indicatorsValue);
    start = setInterval(() => slide("increase"), interval);
}

function slideIncrease() {
    indicators.forEach((cur) => cur.classList.remove("active"));
    value === (document.querySelectorAll(".slider__slide").length - 1) * amt ?
        (value = 0) :
        (value += amt);
    indicatorsUpdate();
}

function slideDecrease() {
    indicators.forEach((cur) => cur.classList.remove("active"));
    value === 0 ?
        (value = (document.querySelectorAll(".slider__slide").length - 1) * amt) :
        (value -= amt);
    indicatorsUpdate();
}
// BannerRightSlider

// Daily Deal section tab

function inittab(tabWrapper, activeTab = 1) {
    const tabBtns = tabWrapper.querySelectorAll(".tab-btn");
    const underline = tabWrapper.querySelector(".underline");
    const tabContents = tabWrapper.querySelectorAll(".tab-content");

    activeTab = activeTab - 1;
    tabBtns[activeTab].classList.add("active");
    underline.style.width = `${tabBtns[activeTab].offsetWidth}px`;
    underline.style.left = `${tabBtns[activeTab].offsetLeft}px`;
    tabContents.forEach((content) => {
        content.style.transform = `translateX(-${activeTab * 100}%)`;
    });

    tabBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            tabBtns.forEach((btn) => btn.classList.remove("active"));
            btn.classList.add("active");
            underline.style.width = `${btn.offsetWidth}px`;
            underline.style.left = `${btn.offsetLeft}px`;
            tabContents.forEach((content) => {
                content.style.transform = `translateX(-${index * 100}%)`;
            });
        });

        //same effect as on click when button in focus
        btn.addEventListener("focus", () => {
            tabBtns.forEach((btn) => btn.classList.remove("active"));
            btn.classList.add("active");
            underline.style.width = `${btn.offsetWidth}px`;
            underline.style.left = `${btn.offsetLeft}px`;
            tabContents.forEach((content) => {
                content.style.transform = `translateX(-${index * 100}%)`;
            });
        });
    });
}

const tabWrappers = document.querySelectorAll(".tab-wrapper");
tabWrappers.forEach((tabWrapper, index) => inittab(tabWrapper));

// product card

$(document).ready(function() {

    // Lift card and show stats on Mouseover
    $('#product-card').hover(function() {
        $(this).addClass('animate');
        $('div.carouselNext, div.carouselPrev').addClass('visible');
    }, function() {
        $(this).removeClass('animate');
        $('div.carouselNext, div.carouselPrev').removeClass('visible');
    });

    // Flip card to the back side
    $('#view_details').click(function() {
        $('div.carouselNext, div.carouselPrev').removeClass('visible');
        $('#product-card').addClass('flip-10');
        setTimeout(function() {
            $('#product-card').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo(80, 1, function() {
                $('#product-front, #product-front div.shadow').hide();
            });
        }, 50);

        setTimeout(function() {
            $('#product-card').removeClass('flip90').addClass('flip190');
            $('#product-back').show().find('div.shadow').show().fadeTo(90, 0);
            setTimeout(function() {
                $('#product-card').removeClass('flip190').addClass('flip180').find('div.shadow').hide();
                setTimeout(function() {
                    $('#product-card').css('transition', '100ms ease-out');
                    $('#cx, #cy').addClass('s1');
                    setTimeout(function() { $('#cx, #cy').addClass('s2'); }, 100);
                    setTimeout(function() { $('#cx, #cy').addClass('s3'); }, 200);
                    $('div.carouselNext, div.carouselPrev').addClass('visible');
                }, 100);
            }, 100);
        }, 150);
    });

    // Flip card back to the front side
    $('#flip-back').click(function() {

        $('#product-card').removeClass('flip180').addClass('flip190');
        setTimeout(function() {
            $('#product-card').removeClass('flip190').addClass('flip90');

            $('#product-back div.shadow').css('opacity', 0).fadeTo(100, 1, function() {
                $('#product-back, #product-back div.shadow').hide();
                $('#product-front, #product-front div.shadow').show();
            });
        }, 50);

        setTimeout(function() {
            $('#product-card').removeClass('flip90').addClass('flip-10');
            $('#product-front div.shadow').show().fadeTo(100, 0);
            setTimeout(function() {
                $('#product-front div.shadow').hide();
                $('#product-card').removeClass('flip-10').css('transition', '100ms ease-out');
                $('#cx, #cy').removeClass('s1 s2 s3');
            }, 100);
        }, 150);

    });


    /* ----  Image Gallery Carousel   ---- */

    var carousel = $('#carousel ul');
    var carouselSlideWidth = 250;
    var carouselWidth = 0;
    var isAnimating = false;

    // building the width of the casousel
    $('#carousel li').each(function() {
        carouselWidth += carouselSlideWidth;
    });
    $(carousel).css('width', carouselWidth);

    // Load Next Image
    $('div.carouselNext').on('click', function() {
        var currentLeft = Math.abs(parseInt($(carousel).css("left")));
        var newLeft = currentLeft + carouselSlideWidth;
        if (newLeft == carouselWidth || isAnimating === true) { return; }
        $('#carousel ul').css({
            'left': "-" + newLeft + "px",
            "transition": "300ms ease-out"
        });
        isAnimating = true;
        setTimeout(function() { isAnimating = false; }, 300);
    });

    // Load Previous Image
    $('div.carouselPrev').on('click', function() {
        var currentLeft = Math.abs(parseInt($(carousel).css("left")));
        var newLeft = currentLeft - carouselSlideWidth;
        if (newLeft < 0 || isAnimating === true) { return; }
        $('#carousel ul').css({
            'left': "-" + newLeft + "px",
            "transition": "300ms ease-out"
        });
        isAnimating = true;
        setTimeout(function() { isAnimating = false; }, 300);
    });
});

// newly Arrive

//product cards slider 
const productCards = document.querySelector('.product-cards');

if (productCards) {
    const productCardsSlider = new Swiper('.product-cards__slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.product-cards__next',
            prevEl: '.product-cards__prev',
        },
    })
}


// add to wishlist button
const btns = document.querySelectorAll('.wishlist-badge__btn');

btns.forEach((btn) => {  
    btn.addEventListener('click', () => {    
        const isActive = btn.classList.contains('wishlist-badge__btn--active');    
        btn.classList.toggle('wishlist-badge__btn--active');    
        btn.title = isActive ? 'Add to wishlist' : 'Remove from wishlist';  
    });
});

// Count Down
function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function initializeClock(id, endtime) {
    let clock = document.getElementById(id);
    let daysSpan = clock.querySelector(".days");
    let hoursSpan = clock.querySelector(".hours");
    let minutesSpan = clock.querySelector(".minutes");
    let secondsSpan = clock.querySelector(".seconds");

    function updateClock() {
        let t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

const deadline = "February 8 2023";
initializeClock("countdown", deadline);

//  Add to Cart Button with Quantity
function incrementQty() {
    var value = document.querySelector('input[name="qty"]').value;
    var cardQty = document.querySelector(".cart-qty");
    value = isNaN(value) ? 1 : value;
    value++;
    document.querySelector('input[name="qty"]').value = value;
    cardQty.innerHTML = value;
    cardQty.classList.add("rotate-x");
}

function decrementQty() {
    var value = document.querySelector('input[name="qty"]').value;
    var cardQty = document.querySelector(".cart-qty");
    value = isNaN(value) ? 1 : value;
    value > 1 ? value-- : value;
    document.querySelector('input[name="qty"]').value = value;
    cardQty.innerHTML = value;
    cardQty.classList.add("rotate-x");
}

function removeAnimation(e) {
    e.target.classList.remove("rotate-x");
}


// Articles


$('#carouselExampleControls').on('slide.bs.carousel', function(e) {


    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            } else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});




$(document).ready(function() {
    /* show lightbox when clicking a thumbnail */
    $('a.thumb').click(function(event) {
        event.preventDefault();
        var content = $('.modal-body');
        content.empty();
        var title = $(this).attr("title");
        $('.modal-title').html(title);
        content.html($(this).html());
        $(".modal-profile").modal({ show: true });
    });

});

/* Customer Tetemonial */
$(document).ready(function() {
    $('.testimonials').bxSlider({
        auto: true,
        pause: 8000, //time on each review
        mode: 'fade', // or slide
        infiniteLoop: true,
        controls: false, // true for arrows
        slideMargin: 0
    });
});



// Left menu active inactive


$(document).ready(function() {

    // Cache all list items
    var $liCollection = $(".menu li");

    // Cache the first list item for later use
    var $firstListItem = $liCollection.first();

    // Give the first list item the active state
    $liCollection.first().addClass("active2");
    var HeaderBack = document.getElementById("HeaderBack")[0];
    var images = ['url("Images/bck01.jpg")', 'url("Images/bck02.jpg")', 'url("Images/bck03.jpg")', 'url("Images/bck04.jpg")', 'url("Images/bck05.jpg")', 'url("Images/bck06.jpg")', 'url("Images/bck07.jpg")', 'url("Images/bck08.jpg")', 'url("Images/bck09.jpg")', 'url("Images/bck010.jpg")'];
    var current = 0;
    // Each 500 ms
    setInterval(function() {

        // Get the active list item
        var $activeListItem = $(".active2")

        // Remove its active state
        $activeListItem.removeClass("active2");

        // Try to find the next list item
        var $nextListItem = $activeListItem.closest('li').next();

        // If the next list item (jQuery object) length property is 0
        // (this means that this list item was the last in the list)
        if ($nextListItem.length == 0) {

            // The next list item is actually the first list item
            $nextListItem = $firstListItem;
        }
        document.getElementById("HeaderBack").style.backgroundImage = images[current = ++current % images.length];
        $nextListItem.addClass("active2");
    }, 5000);
});


var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}
// Get Slider Items | Array.form [ES6 Feature]
var sliderItems = Array.from(
    document.querySelectorAll(".slides-wrapper .slide-item")
);

// Get Number Of Slides
var slidesCount = sliderItems.length;

// Set [Current/Next/Prev] Slide
var currentSlide = 1;
var nextSlide = currentSlide + 1;
var prevSlide = slidesCount;

// Up and Down Buttons
var upButton = document.querySelector(".up");
var downButton = document.querySelector(".down");

// Handle Click on Up and Down Buttons
upButton.onclick = slideUp;
downButton.onclick = slideDown;

// Trigger The Checker Function
theChecker();

// Auto Animate Slide
var sliderWrapper = document.querySelector(".slider-wrapper");
var EleHovered = false;

sliderWrapper.addEventListener("mouseleave", () => {
    EleHovered = false;
});
sliderWrapper.addEventListener("mouseenter", () => {
    EleHovered = true;
});

setInterval(() => {
    if (!EleHovered) {
        slideUp();
    }
}, 5000);

// Next Slide Function
function slideUp() {
    // if the last item is active
    if (currentSlide == slidesCount) {
        currentSlide = 1;
        theChecker();
    } else {
        currentSlide++;
        theChecker();
    }
}

// Previous Slide Function
function slideDown() {
    // if the first item is active
    if (currentSlide == 1) {
        currentSlide = slidesCount;
        theChecker();
    } else {
        currentSlide--;
        theChecker();
    }
}

// Create The Checker Function
function theChecker() {
    // Remove All Active Classes
    removeAllActive();

    // Reset [Next/Prev] Items
    if (currentSlide == 1) {
        nextSlide = currentSlide + 1;
        prevSlide = slidesCount;
        prevDoneSlide = prevSlide - 1;
    } else if (currentSlide == slidesCount) {
        nextSlide = 1;
        prevSlide = currentSlide - 1;
        prevDoneSlide = prevSlide - 1;
    } else {
        nextSlide = currentSlide + 1;
        prevSlide = currentSlide - 1;
        prevDoneSlide = prevSlide - 1;
    }

    if (prevSlide == 1) {
        prevDoneSlide = slidesCount;
    }

    // Set Active Class On Current Slide
    sliderItems[currentSlide - 1].classList.add("active");
    // Set Next Class On [Current + 1] Slide
    sliderItems[nextSlide - 1].classList.add("next2");
    // Set Prev Class On [Current - 1] Slide
    sliderItems[prevSlide - 1].classList.add("prev2");
    sliderItems[prevDoneSlide - 1].classList.add("prev-done");

    // Trigger Progress Bar Function
    fillProgBar();
}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {
    // Loop Through Images
    sliderItems.forEach(function(item) {
        item.classList.remove("active", "next2", "prev2", "prev-done");
    });
}

// Fill Progress Bar
function fillProgBar() {
    var percentage = (100 / slidesCount) * currentSlide;
    document.getElementById("slider-prog").style.width = percentage + "%";
}
// ffoter reples
$('.Footer').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04
});