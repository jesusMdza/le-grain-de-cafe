function modalAppear() {
  setTimeout(function () {
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
  }, 2000);
}

function modalClose() {

  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
}
