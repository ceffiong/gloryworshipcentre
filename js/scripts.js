// Home carosel
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#event", {
    type: "loop",
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    esing: "ease(0.25, 1, 0.5, 1)",
    perPage: 3,
    gap: "1.5em",
    width: "auto",
    breakpoints: {
      768: {
        perPage: 1,
        width: "100%",
      },
    },
  }).mount();
});
