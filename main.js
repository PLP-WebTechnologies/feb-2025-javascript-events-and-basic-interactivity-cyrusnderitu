const sliderTrack = document.getElementById("sliderTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const headers = document.querySelectorAll(".accordion-header");

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



  headers.forEach(header => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      const isActive = header.classList.contains("active");

      document.querySelectorAll(".accordion-body").forEach(p => p.style.display = "none");
      document.querySelectorAll(".accordion-header").forEach(h => {
        h.classList.remove("active");
        h.querySelector("span").textContent = "+";
      });

      if (!isActive) {
        body.style.display = "block";
        header.classList.add("active");
        header.querySelector("span").textContent = "–";
      }
    });
  });