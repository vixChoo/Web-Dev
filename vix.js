// SlideShow
let slideIndex = 1;


  function openModal() {
    document.getElementById("lightbox").style.display = "block";
  }

  function closeModal() {
    document.getElementById("lightbox").style.display = "none";
  }

 function csSlide(n) {
    showSlideNumber(slideIndex += n);
  }

  function csCurrentSlide(n) {
    showSlideNumber(slideIndex = n);
  }

  function showSlideNumber(n) {
    const slides = document.getElementsByClassName("cs-slide");
    const lightSlide = document.getElementsByClassName("lightboxSlide");
    const csDot = document.getElementsByClassName("cs-dot");
    const csTxt = document.getElementsByClassName("cs-txt");

    // if n is more than slides number , then go back to slide number 1
    if (n > slides.length) {slideIndex = 1}
    // if slide reach back to first one - and user still click go back - it will show the last slide
    if (n < 1) {slideIndex = slides.length}

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      csDot[i].className = csDot[i].className.replace(" active", "");
      csTxt[i].style.display = "none";
      lightSlide[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";  
    csDot[slideIndex-1].className += " active";
    csTxt[slideIndex-1].style.display = "block";

    if(document.getElementById("lightbox").style.display == "block"){
      lightSlide[slideIndex-1].style.display = "block";
    }
}



// Autoplay slideshow

let msIndex = 0;
carousel();

function carousel() {
  let x = document.getElementsByClassName("slide-img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  msIndex++;
  if (msIndex > x.length) {msIndex = 1}    
  x[msIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

// Hide Div
function hideDiv (div,btn,showBtn){
  const hiddenDiv = document.getElementById(div);
  const hiddenBtn = document.getElementById(btn);
  const displayBtn = document.getElementById(showBtn);

  if (hiddenDiv.style.display=="none"){
    hiddenDiv.style.display="block";
    hiddenBtn.style.display="none";
    displayBtn.style.display="block";
  }
  else {
   hiddenDiv.style.display="none";
   hiddenBtn.style.display="none";
   displayBtn.style.display="block";
  }
}

function scrollToView(e) {
  let o = document.getElementById(e);
  // if the distance between the length of current height is not == 0 (WHICH mean user current at this div)
  0 != $(o).length && $("html, body").animate({
      scrollTop: $(o).offset().top - 200
  }, 1e3)
}