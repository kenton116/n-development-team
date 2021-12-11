'use strict';
const kakin = document.getElementById('kakin');
const kakinDialog = document.getElementById('kakin-msg')
kakin.onclick = () => {
  kakinMsg();
}

function kakinMsg () {
  kakinDialog.style.transform = 'translate(0, 0)';
}
console.log(kakin);
console.log(kakinDialog);

const buy = document.getElementById('buy');
buy.onclick = () => {
  closeDialog();
}

function closeDialog() {
  kakinDialog.style.transform = 'translate(0, -300%)';
}