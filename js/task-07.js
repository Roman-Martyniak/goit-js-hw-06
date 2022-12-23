const fontSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

fontSize.oninput = changeFontSize;

function changeFontSize() {
    text.style.fontSize = this.value + 'px';
}
