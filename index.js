var Mousetrap= require('mousetrap');
var botonUno = document.getElementById('botonUno')//conseguimos la informacion de botonUno y la guardamos en variable botoUno
var actual = document.getElementById('Actual')
var resultado=document.getElementById('Resultado')
var botonDos = document.getElementById('botondos')

var botonSuma= document.getElementById('botonsuma')

botonUno.addEventListener('click',clickUno)//escuchamos al hacer clic en botonUno
botonDos.addEventListener('click',clickdos)

botonSuma.addEventListener('click',clicksuma)

Mousetrap.bind('1',clickUno)

//funcion definida al hacer click en botonUno
function clickUno(){
    actual.innerHTML+='1'// con esto agregamos un uno al momento de dar clic a la etiqueta actual de index html y lo guarda como string
}
function clickdos(){
    actual.innerHTML+='2'
}

function clicksuma(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML= valorActual + valorResultado
    actual.innerHTML='0'
}