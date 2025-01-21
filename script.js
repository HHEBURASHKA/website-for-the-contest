// Переключение между темной и светлой темой
document.querySelector("#theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
      this.textContent = "🌙"; 
      this.style.color = "black"; 
    } else {
      this.textContent = "🌞"; 
      this.style.color = "white"; 
    }
  });  
  
  // Слайдер
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function changeSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  const newTransformValue = -currentIndex * 100; // Сдвиг на 100% влево
  document.querySelector(".slides").style.transform = `translateX(${newTransformValue}%)`;
}

setInterval(changeSlide, 3000);
