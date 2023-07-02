const element = document.getElementById("phone");
const element2 = document.getElementById("phone2");
const maskOptions = {
  mask: "+38 (000) 000-00-00",
  //   lazy: false,
};
const mask = new IMask(element, maskOptions);
const mask2 = new IMask(element2, maskOptions);
