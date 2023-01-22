const span = document.querySelector("#text");

const input = document.querySelector("#font-size-control");
input.oninput = function () {
    console.log(this.value)
    span.style.fontSize = input.value + 'px';
}