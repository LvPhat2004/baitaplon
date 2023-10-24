let slides = document.querySelectorAll('.slide-container');
 let index = 0;

 function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
 }
 function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
 }
 
 const aventadorButton = document.getElementById("prev1");
 const huracanButton = document.getElementById("next1");
 const urusButton = document.getElementById("next2");
 const slideContainers = document.querySelectorAll(".slide-container1");
 aventadorButton.addEventListener("click", () => showSlide(0));
 huracanButton.addEventListener("click", () => showSlide(1));
 urusButton.addEventListener("click", () => showSlide(2));
 function showSlide(index) {
   slideContainers.forEach((container, i) => {
     if (i === index) {
       container.classList.add("active1");
     } else {
       container.classList.remove("active1");
     }
   });
 }
 showSlide(0);