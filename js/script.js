let cell = document.getElementById('long-stroke');
let text = cell.innerText;

let sliced = text.slice(0, 21);

if (sliced.length < text.length) {
    sliced += '...';
    cell.innerHTML = sliced;
}
