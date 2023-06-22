// (() => {
window.addEventListener("scroll", function () {
  const button = document.getElementById("fixedButton");
  const rect = button.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  if (rect.bottom >= viewportHeight) {
    button.style.bottom = "10px"; // Оставляем небольшой отступ от нижнего края
  } else {
    button.style.bottom = "0";
  }
});
// })();
