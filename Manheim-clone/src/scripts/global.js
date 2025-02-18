// Improved footer adjustment
function adjustFooter() {
    const footer = document.querySelector("footer");
    if (window.innerHeight > 1224) {
      footer.classList.add("fixed-bottom");
    } else {
      footer.classList.remove("fixed-bottom");
    }
  }

// Run footer adjustment on page load and resize
window.addEventListener("load", adjustFooter);
window.addEventListener("resize", adjustFooter);
