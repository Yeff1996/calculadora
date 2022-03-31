"user strict"

const pantallaSuperior = document.getElementById('displayValorAnterior');
const pantallaInferior = document.getElementById('displayValorActual');
const teclasNumeros = document.querySelectorAll('.numero');
const teclasOperador = document.querySelectorAll('.operador');
const teclaBorradora = document.querySelector('.borradora');
const teclaReset = document.querySelector('.reset');

const display = new Display(pantallaSuperior, pantallaInferior);

teclasNumeros.forEach(tecla => {
    tecla.addEventListener('click', ()=> display.agregarNumero(tecla.innerHTML));
});

teclasOperador.forEach(tecla => {
    tecla.addEventListener('click', ()=> display.computar(tecla.value));
});


teclaBorradora.addEventListener('click', ()=> display.borrarNumero());
teclaReset.addEventListener('click', ()=> display.borrarTodo());

