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

const mobileNavLogo = document.querySelector(".navLogo");

mobileNavLogo.addEventListener("click", function () {
   window.location.href = "./index.html";
});

const desktopNavLogo = document.querySelector(".desktopNavLogo");

desktopNavLogo.addEventListener("click", function () {
   window.location.href = "./index.html";
});

//Navbar curtain menu
/* Open when someone clicks on the span element */
function openNav() {
   document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
   document.getElementById("myNav").style.width = "0%";
}

/*--Project Redirect Buttons--*/
const budRedirect = document.querySelector(".budProjectCard");

budRedirect.addEventListener("click", function () {
   window.location.href = "./project-bud.html";
});

const smallDataRedirect = document.querySelector(".smallDataProjectCard");

smallDataRedirect.addEventListener("click", function () {
   window.location.href = "./project-smallData.html";
});

const btbRedirect = document.querySelector(".btbProjectCard");

btbRedirect.addEventListener("click", function () {
   window.location.href = "./project-beatTheBinge.html";
});

const evergreenRedirect = document.querySelector(".evergreenProjectCard");

evergreenRedirect.addEventListener("click", function () {
   window.location.href = "./project-evergreen.html";
});

const chrissysRedirect = document.querySelector(".chrissysProjectCard");

chrissysRedirect.addEventListener("click", function () {
   window.location.href = "./project-chrissys.html";
});
