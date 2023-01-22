const refs = {
    input: document.querySelector('#name-input'),
    name: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange)

function onInputChange(event) {
    if (event.currentTarget.value === '') {
    refs.name.textContent = 'Anonymous';
    } else {
    refs.name.textContent = event.currentTarget.value;
    }
}

//* 2-й спосіб
// refs.input.addEventListener('input', (event) => {
//   if (event.currentTarget.value === '') {
//     refs.name.textContent = 'Anonymous';
//   } else {
//     refs.name.textContent = event.currentTarget.value;
//   }
// });