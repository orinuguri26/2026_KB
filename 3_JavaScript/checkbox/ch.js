function checkBox() {
  document.getElementById('agree').checked = true;
}
function uncheckBox() {
  document.getElementById('agree').checked = false;
}
function toogleBox() {
  const checkbox = document.getElementById('agree');
  checkbox.checked = !checkbox.checked;
}
