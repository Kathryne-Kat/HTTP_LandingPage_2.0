const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  openModalBtnEnd: document.querySelector("[data-modal-open-end]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};

const onModalOpenBtnClick = (e) => {
  refs.modal.classList.remove("is-hidden");
  document.addEventListener("keydown", onEscKeyBtnPress);
  document.body.classList.add("no-scroll");
};

const closeModal = () => {
  refs.modal.classList.add("is-hidden");
  document.removeEventListener("keydown", onEscKeyBtnPress);
  document.body.classList.remove("no-scroll");
};
const onEscKeyBtnPress = (e) => {
  if (e.code === "Escape") {
    closeModal();
  }
};

const onBackdropElClick = (e) => {
  const { target, currentTarget } = e;
  if (target !== currentTarget) {
    return;
  }
  closeModal();
};

refs.openModalBtn.addEventListener("click", onModalOpenBtnClick);
refs.openModalBtnEnd.addEventListener("click", onModalOpenBtnClick);
refs.closeModalBtn.addEventListener("click", closeModal);
refs.modal.addEventListener("click", onBackdropElClick);
