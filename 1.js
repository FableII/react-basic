const body = document.querySelector('body');

const div =  document.createElement('div');
const span = document.createElement('span');
const input = document.createElement('input');
const btn  = document.createElement('button');
const N = 2;

body.append(div);
div.append(span);
div.append(input);
div.append(btn);

div.className = 'root';

span.innerHTML = 'Логин: ';

input.className = 'input';
input.setAttribute("placeholder", "E-mail");

btn.className = 'btn';
btn.innerHTML = "Войти";



