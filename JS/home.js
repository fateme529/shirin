let slides = [
    {
        index: 0,
        src: "../images/slide0.png",
    },
    {
        index: 1,
        src: "../images/slide1.png",
    },
    {
        index: 2,
        src: "../images/slide2.png",
    },
];

const slide = document.querySelector(".slide img");
const next = document.querySelector(".next");
const pre = document.querySelector(".pre");

let page = 0;

const lastSlide = slides.length;

pre.addEventListener("click", () => {
    if (page > 0) {
        page--;
        slider();
    }
});

next.addEventListener("click", () => {
    if (page < lastSlide) {
        page++;
        slider();
    }
});

function slider() {
    slide.setAttribute("src", slides[page - 1].src);
}
