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

