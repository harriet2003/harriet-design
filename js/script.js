//Nav logo redirect
const navLogo = document.querySelector(".navLogo");

navLogo.addEventListener("click", function () {
   window.location.href = "./index.html";
});

//Evergreen Image Slideshow
document.addEventListener("DOMContentLoaded", () => {
   const images = document.querySelectorAll(".evergreen-carousel img");
   let currentIndex = 0;

   function showNextImage() {
      images[currentIndex].classList.remove("active"); // Hide current image
      currentIndex = (currentIndex + 1) % images.length; // Move to the next index
      images[currentIndex].classList.add("active"); // Show next image
   }

   // Initialize the slideshow
   images[currentIndex].classList.add("active");
   setInterval(showNextImage, 1200); // Change image every 3 seconds
});

/*--Project Redirect Buttons--*/
const budRedirect = document.querySelector(".budProjectCard");

budRedirect.addEventListener("click", function () {
   window.location.href = "./bud.html";
});

const smallDataRedirect = document.querySelector(".smallDataProjectCard");

smallDataRedirect.addEventListener("click", function () {
   window.location.href = "./small-data.html";
});

const btbRedirect = document.querySelector(".btbProjectCard");

btbRedirect.addEventListener("click", function () {
   window.location.href = "./beat-the-binge.html";
});

const evergreenRedirect = document.querySelector(".evergreenProjectCard");

evergreenRedirect.addEventListener("click", function () {
   window.location.href = "./evergreen.html";
});

const chrissysRedirect = document.querySelector(".chrissysProjectCard");

chrissysRedirect.addEventListener("click", function () {
   window.location.href = "./chrissys.html";
});
