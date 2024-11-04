



const sentences = [

  
  "Welcome to my website!",
  "We are glad to have you here.",
  "Explore our features and offerings.",
  "  Dynamic And Detail-Oriented Web Developer ",
  "Feel free to contact us anytime!"
   
   
  ];
  

  let currentIndex = 0;
  
  function slideSentence() {
    const sentenceElement = document.getElementById("sentence" );
  
    // Hide current sentence
    sentenceElement.classList.remove("show");
    sentenceElement.classList.add("hide");
  
    setTimeout(() => {
      // Update sentence text and show it
      sentenceElement.innerHTML = sentences [currentIndex];
      

      sentenceElement.classList.remove("hide");
      sentenceElement.classList.add("show");
  
      // Move to the next sentence in the array
      currentIndex = (currentIndex + 1) % sentences.length;
    }, 500); // Delay for hiding animation
  }
  
  // Run the slideshow
  window.onload = function () {
    slideSentence();
    setInterval(slideSentence, 3000); // Adjust time between slides
  };



  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
      let slides = document.getElementsByClassName("slide");
      let dots = document.getElementsByClassName("dot");
      
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      
      slideIndex++;
      if (slideIndex > slides.length) {
          slideIndex = 1;
      }
      
      for (let i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      
      setTimeout(showSlides, 3000); // Change slide every 3 seconds
  }
  
  function currentSlide(n) {
      slideIndex = n;
      showSlides();
  }

  
  const texts = ["FRONTEND DEVELOPER", "WEB DEVELOPER"];
        let index = 0;

        function showText() {
            document.getElementById('text-slide').innerText = texts[index];
            index = (index + 1) % texts.length;
        }

        showText(); // Initial display
        setInterval(showText, 3000); // Change text every 3 seconds

  
 