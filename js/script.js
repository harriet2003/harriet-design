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

/* Value Flower Hover Effect */
const hoverEmpathyText = document.getElementById("empathyText");
const hoverEmpathyImg = document.getElementById("empathyFlower");
const hoverConnectText = document.getElementById("connectText");
const hoverConnectImg = document.getElementById("connectFlower");
const hoverPlayText = document.getElementById("playText");
const hoverPlayImg = document.getElementById("playFlower");

hoverEmpathyText.addEventListener("mouseenter", function () {
   hoverEmpathyImg.style.display = "unset";
});
hoverConnectText.addEventListener("mouseenter", function () {
   hoverConnectImg.style.display = "unset";
});
hoverPlayText.addEventListener("mouseenter", function () {
   hoverPlayImg.style.display = "unset";
});

hoverEmpathyText.addEventListener("mouseleave", function () {
   hoverEmpathyImg.style.display = "none";
});
hoverConnectText.addEventListener("mouseleave", function () {
   hoverConnectImg.style.display = "none";
});
hoverPlayText.addEventListener("mouseleave", function () {
   hoverPlayImg.style.display = "none";
});

/* Facts Toggle Button */
function toggleFacts() {
   var x = document.getElementById("factsPopup");
   if (x.style.display === "none") {
      x.style.display = "unset";
   } else {
      x.style.display = "none";
   }
}
