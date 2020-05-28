const slidesList = document.querySelector(".slides-list");
const slides = [
{
  url:
  "https://images.unsplash.com/photo-1508341421810-36b8fc06075b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1367&q=80",
  _id: "1" },

{
  url:
  "https://images.unsplash.com/photo-1463852123206-49976aaeab67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  _id: "2" },

{
  url:
  "team/ctc.jpg",
  id: "3" }];



let currentSlideIndex = 0;
let autoPlayOn = true;

function initializeSlides() {
  const slidesArr = slides.map(slide => {
    const node = document.createElement("LI");
    node.style.backgroundImage = `url(${slide.url})`;
    slidesList.appendChild(node);
  });
}

function nextSlide() {
  const currentSlide = document.querySelectorAll("ul > li")[currentSlideIndex];
  currentSlideIndex++;
  if (currentSlideIndex === slidesList.getElementsByTagName("li").length) {
    currentSlideIndex = 0;
  }
  let afterNextSlide = document.querySelectorAll("ul > li")[
  currentSlideIndex + 1];

  if (currentSlideIndex + 1 === slidesList.getElementsByTagName("li").length) {
    afterNextSlide = document.querySelectorAll("ul > li")[0];
  }
  const nextSlide = document.querySelectorAll("ul > li")[currentSlideIndex];
  nextSlide.style.opacity = "1";
  nextSlide.style.transform = "translateX(0) scale(0.6)";
  currentSlide.style.transform = "translateX(100%)";
  afterNextSlide.style.opacity = "0";
  afterNextSlide.style.transform = "translateX(-100%)";
}

function previousSlide() {
  const currentSlide = document.querySelectorAll("ul > li")[currentSlideIndex];
  if (currentSlideIndex === 0) {
    currentSlideIndex = slidesList.getElementsByTagName("li").length;
  }
  currentSlideIndex--;
  const previousSlide = document.querySelectorAll("ul > li")[currentSlideIndex];
  let afterPreviousSlide = document.querySelectorAll("ul > li")[
  currentSlideIndex - 1];

  if (currentSlideIndex === 0) {
    afterPreviousSlide = document.querySelectorAll("ul > li")[
    slidesList.getElementsByTagName("li").length - 1];

  }
  previousSlide.style.opacity = "1";
  previousSlide.style.transform = "translateX(0%) scale(0.6)";
  currentSlide.style.transform = "translateX(-100%)";
  afterPreviousSlide.style.opacity = "0";
  afterPreviousSlide.style.transform = "translateX(100%)";
}

function autoPlay() {
  setInterval(() => {
    if (autoPlayOn) {
      nextSlide();
    }
  }, 5000);
}

function setAutoPlay() {
  const btn = document.getElementById("autoPlayBtn");
  btn.classList.toggle("autoPlayOff");
  autoPlayOn = !autoPlayOn;
}

autoPlay();
initializeSlides();