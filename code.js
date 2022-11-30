let input = document.querySelector('input');
let p = document.querySelector('.result');

let num = Math.floor(Math.random() * 100 );

input.addEventListener('blur', function () {
    if (+input.value < num) {
p.innerHTML = 'введите число побольше';
} else if (+input.value > num) {
    p.innerHTML = 'введите число поменьше';
} else if (+input.value === num) {
    p.innerHTML = 'вы отгадали число' + '<img src="https://avatars.mds.yandex.net/i?id=ca5c7d3ec45fc8db3cf438ba19c8a27b41676703-5519673-images-thumbs&n=13" alt="" />';
}
})

