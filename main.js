const sliderTrack = document.getElementById("sliderTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;
  const cardWidth = 316; // includes margin (min-width + gap)
  const totalCards = sliderTrack.children.length;

  function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= totalCards - 1;
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalCards - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  updateSlider(); 

  var mixer = mixitup('#plantGrid', {
    selectors: {
      target: '.product-card'
    },
    animation: {
      duration: 300
    }
  });