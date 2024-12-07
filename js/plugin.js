$('.cars').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.cars'
});

"use strict"

const cls = new Audio("s63-amg-v8-engine-revs-41131.mp3");
const bmw = new Audio("bmw-i8-noise-252644.mp3");
const r8 = new Audio("audi_r8_burnout.mp3");

const mrs = document.querySelector(".mrs");
const bmv = document.querySelector(".bmv");
const audi = document.querySelector(".audi");

let clsInterval, bmwInterval, r8Interval;

mrs.addEventListener("mousedown", function () {
    cls.play();
    clsInterval = setInterval(() => {
        if (!cls.paused) {
            cls.play();
        }
    }, 100);
    setTimeout(() => {
        cls.pause();
    }, 6000);
});

mrs.addEventListener("mouseup", function () {
    clearInterval(clsInterval);
    cls.pause();
});

bmv.addEventListener("mousedown", function () {
    bmw.play();
    bmwInterval = setInterval(() => {
        if (!bmw.paused) {
            bmw.play();
        }
    }, 100);
    setTimeout(() => {
        bmw.pause();
    }, 6000);
});

bmv.addEventListener("mouseup", function () {
    clearInterval(bmwInterval);
    bmw.pause();
});

audi.addEventListener("mousedown", function () {
    r8.play();
    r8Interval = setInterval(() => {
        if (!r8.paused) {
            r8.play();
        }
    }, 100);
    setTimeout(() => {
        r8.pause();
    }, 6000);
});

audi.addEventListener("mouseup", function () {
    clearInterval(r8Interval);
    r8.pause();
});
