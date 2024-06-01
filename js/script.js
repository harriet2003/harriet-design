//Navbar curtain menu
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

const logoRedirect = document.querySelector('.logo');

logoRedirect.addEventListener('click', function() {
  window.location.href = './index.html';
});

/*--Project Redirect Buttons--*/
const budRedirect = document.querySelector('.budProjectDiv');

budRedirect.addEventListener('click', function() {
  window.location.href = './project-bud.html';
});

const smallDataRedirect = document.querySelector('.smallDataProjectDiv');

smallDataRedirect.addEventListener('click', function() {
  window.location.href = './project-smallData.html';
});

const btbRedirect = document.querySelector('.btbProjectDiv');

btbRedirect.addEventListener('click', function() {
  window.location.href = './project-beatTheBinge.html';
});