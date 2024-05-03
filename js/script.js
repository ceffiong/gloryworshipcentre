let mybutton = document.getElementById("btn-top");

function openNav() {
  document.getElementById("header-desktop").style.display = "none";
  document.getElementById("mobile-nav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
  getElementById("contact").style.pointerEvents = "none";
}

function closeNav() {
  document.getElementById("header-desktop").style.display = "flex";
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
    case "testify":
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
    case "testify":
      collapse(arg);
      break;

    default:
      break;
  }
}

const emailTemplate = (name, message, email) => {
  return `<h2>
  Hi Pastor David,
  </h2>
  <p>
  You have a new message from ${name}, <a href="mailto:${email}">${email}</a>
  </p>
  <div style="padding-left: 10px; border-left: 8px solid #d9d9d9; margin-bottom: 20px;">
  <q>${message}</q>
  </div>
  <p>
  Blessings, <br/>
  <a href="https://gloryworshipcentre.at">www.gloryworshipcentre.at</a>
  </p>`;
};

// send email
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      //disable btn and show spinner and loading
      document.getElementById("submit-btn").disabled = true;
      document.getElementById("spinner").style.display = "block";
      document.getElementById("status").style.display = "block";
      document.getElementById("failure").style.display = "none";
      document.getElementById("success").style.display = "none";

      const data = {
        replyTo: email,
        message: emailTemplate(name, message, email),
      };

      fetch(" https://4yxdyim70d.execute-api.eu-west-1.amazonaws.com/demo", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => {
          response.json().then((data) => {
            if (data.status === "Success") {
              document.getElementById("spinner").style.display = "none";
              document.getElementById("status").style.display = "none";
              document.getElementById("failure").style.display = "none";
              document.getElementById("success").style.display = "block";

              //reset form
              document.getElementById("name").value = "";
              document.getElementById("email").value = "";
              document.getElementById("message").value = "";
            } else {
              document.getElementById("spinner").style.display = "none";
              document.getElementById("status").style.display = "none";
              document.getElementById("failure").style.display = "block";
              document.getElementById("success").style.display = "none";
            }
          });
        })
        .catch((error) => {
          document.getElementById("spinner").style.display = "none";
          document.getElementById("status").style.display = "none";
          document.getElementById("failure").style.display = "block";
          document.getElementById("success").style.display = "none";
        });
    });
};

var prevScrollPos =
  document.documentElement.scrollTop || document.body.scrollTop;

//scrolling

//show or hide "scroll to top button"
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//scroll to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener(
  "scroll",
  (event) => {
    scrollFunction();
  },
  { passive: true }
);
