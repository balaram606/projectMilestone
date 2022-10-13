//Header

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

//Play-Button

function PlayPause() {
    let video = document.getElementById("myVideo");
    // let butn = document.getElementById("butn");
    if (video.paused) {
      video.play();
    }
    else {
      video.pause();

    }
  }