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

/* Scroll Effect */
const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
         entry.target.classList.add("show");
      }
   });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


/* Scroll Effect */
const observer2 = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
         entry.target.classList.add("show2");
      }
   });
});

const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el) => observer2.observe(el));

/* Facts Toggle Button */
function toggleFacts() {
   var x = document.getElementById("factsPopup");
   if (x.style.display === "none") {
      x.style.display = "unset";
   } else {
      x.style.display = "none";
   }
}
