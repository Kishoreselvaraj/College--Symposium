document.addEventListener('DOMContentLoaded', function () {
    // Add scroll event listener
    window.addEventListener('scroll', function () {
      // Check if the user has scrolled down
      if (window.scrollY > 50) {
        // Apply styles to landing page content for scroll animation
        document.querySelector('.landing-page .content').style.opacity = '1';
        document.querySelector('.landing-page .content').style.transform = 'translateY(0)';
      }
    });
  });

  document.addEventListener("mousemove", parallax);
      
    function parallax(e) {
        document.querySelectorAll(".object").forEach(function(move) {
            var movingValue = move.getAttribute("data-value");
            var x = 2 * (e.clientX - movingValue) / 150;
            var y = 2 * (e.clientY - movingValue) / 150;
            move.style.transform = "translate(" + x + "px," + y + "px)";
        });
    }

// Hide parlay effect
document.addEventListener("DOMContentLoaded", function() {
  window.onscroll = function() {
      var section1 = document.querySelector(".section1");
      var scrollPosition = window.scrollY;

      // Adjust the scroll position where you want to hide the section
      if (scrollPosition > 200) {
          section1.classList.add("hidden");
      } 
  }; 
});
  