console.log(1);

const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('mouseover', function() {
    output.innerHTML = 'Лиза, я тебя люблю!';
    output.style.opacity = '1';
})

button.addEventListener('mouseout', function() {
    output.innerHTML = '';

})

