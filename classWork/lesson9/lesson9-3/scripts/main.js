let target = document.getElementById('target');
console.log(target.innerText);
target.innerText = 'Okten';
target.style.background = 'green';
target.classList.add('active');
console.log(target.getAttribute('class'));