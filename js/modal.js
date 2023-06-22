// (() => {
const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  openModalBtnEnd: document.querySelector("[data-modal-open-end]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.openModalBtnEnd.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
}
// })();
