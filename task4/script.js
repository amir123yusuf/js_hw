link.addEventListener('click', function (event) {
    event.preventDefault();
    const userText = prompt('Введите текст');
    const userTextField = document.querySelector('#userTextField');
    link.textContent = userText; 
})