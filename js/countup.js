var number = document.querySelector(".number"),
  numberTop = number.getBoundingClientRect().top,
  start = +number.innerHTML,
  end = +number.dataset.max;

window.addEventListener("scroll", function onScroll() {
  if (window.scrollY > numberTop - window.innerHeight / 2) {
    this.removeEventListener("scroll", onScroll);
    var interval = setInterval(function () {
      number.innerHTML = ++start;
      if (start == end) {
        clearInterval(interval);
      }
    }, 2);
  }
});
