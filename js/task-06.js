const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);


function inputChangeClass(classFirst, classSecond) {
    input.classList.add(classFirst);
    input.classList.remove(classSecond);
}

function onInputBlur(event) {
    if (event.currentTarget.value.length == input.dataset.length) {
    inputChangeClass('valid', 'invalid');
    } else {
    inputChangeClass('invalid', 'valid');
    }
}



// 2 - й спосіб
// const input = document.querySelector("#validation-input");

// input.addEventListener("blur", (event) => {
//     if (event.currentTarget.value.length == input.dataset.length) {
//         input.classList.add("valid");
//       input.classList.remove("invalid");
//     } else {
//         input.classList.add("invalid");
//         input.classList.remove("valid");
//     }
// });