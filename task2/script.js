const consoleLog = document.querySelector('#consoleLog');
const Alert = document.querySelector('#Alert');
let Prompt = document.querySelector('#Prompt');

consoleLog.addEventListener('click', () => {
    console.log('Служит для вывода информации в консоль');
})

Alert.addEventListener('click', () => {
    alert('Служит для вывода информации в панель');
})

Prompt.addEventListener('click', () => {
    prompt('предназначен для вывода диалогового окна с сообщением, для ввода данных и кнопками «Ок» и «Отмена».'); 
})
console.log(Prompt.value)