(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var anchorToTop = document.querySelector('.backToTop'),
      offset = 100,
      scrollDuration = 700;

    function scrollingDown() {
      if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
        anchorToTop.removeAttribute("style", "transform: translateX(120px);");
        anchorToTop.setAttribute("style", "transform: translateX(0);");
      } else {
        anchorToTop.removeAttribute("style", "transform: translateX(0);");
        anchorToTop.setAttribute("style", "transform: translateX(120px);");
      }
    }

    window.addEventListener('scroll', scrollingDown);
  });
})();
