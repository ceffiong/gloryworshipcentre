let mybutton = document.getElementById("btn-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openNav() {
  document.getElementById("mobile-nav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

function closeNav() {
  document.getElementById("mobile-nav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

// Home carosel
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#home", {
    type: "loop",
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    esing: "ease(0.25, 1, 0.5, 1)",
  }).mount();

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

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 47.2667206, lng: 11.4322403 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;

//expand, collapse

function expand(item) {
  document.getElementById(`more-${item}`).style.display = "block";
  document.getElementById(`more-${item}`).style.transition = "ease 0.9s";
  document.getElementById(`more-${item}-collapse`).style.display = "block";
  document.getElementById(`more-${item}-expand`).style.display = "none";
}

function collapse(item) {
  document.getElementById(`more-${item}`).style.display = "none";
  document.getElementById(`more-${item}`).style.transition = "ease 0.9s";
  document.getElementById(`more-${item}-collapse`).style.display = "none";
  document.getElementById(`more-${item}-expand`).style.display = "block";
}

function funcExpand(arg) {
  switch (arg) {
    case "mission":
      expand(arg);
      break;
    case "donate":
      expand(arg);
      break;
    case "meet":
      expand(arg);
      break;
    default:
      break;
  }
}

function funcCollapse(arg) {
  switch (arg) {
    case "mission":
      collapse(arg);
      break;
    case "donate":
      collapse(arg);
      break;
    case "meet":
      collapse(arg);
      break;

    default:
      break;
  }
}
