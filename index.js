var Mousetrap= require('mousetrap');// llamado para usar mousetrap
//Botones numericos
var botonUno = document.getElementById('botonUno')//conseguimos la informacion de botonUno y la guardamos en variable botoUno
var botonDos = document.getElementById('botondos')
var bontonTres= document.getElementById('botontres')
var botonCuatro = document.getElementById('botoncuatro')
var botonCinco = document.getElementById('botoncinco')
var botonSeis = document.getElementById('botonseis')
var botonSiete = document.getElementById('botonsiete')
var botonOcho = document.getElementById('botonocho')
var botonNueve=document.getElementById('botonnueve')
var botonCero = document.getElementById('botoncero')

//Ventanas de visualizacion CORREGIDO
var actual = document.getElementById('Actual')
var resultado=document.getElementById('Resultado')

//Botones funciones
var botonSuma= document.getElementById('botonsuma')
var botonResta=document.getElementById('botonresta')
var botonDivi= document.getElementById('botondivision')
var botonMulti = document.getElementById('botonmultiplicacion')

//botones especiales
var botonBorrar=document.getElementById('botonnuevo')
var botonRetroceder=document.getElementById('botonborrar')

//activando las funciones
botonUno.addEventListener('click',clickUno)//escuchamos al hacer clic en botonUno
botonDos.addEventListener('click',clickdos)
bontonTres.addEventListener('click',clicktres)
botonCuatro.addEventListener('click',clickcuatro)
botonCinco.addEventListener('click',clickcinco)
botonSeis.addEventListener('click',clickseis)
botonSiete.addEventListener('click',clicksiete)
botonOcho.addEventListener('click',clickocho)
botonNueve.addEventListener('click',clicknueve)
botonCero.addEventListener('click',clickcero)

botonSuma.addEventListener('click',clicksuma)
botonResta.addEventListener('click',clickresta)
botonMulti.addEventListener('click',clickmultiplicacion)
botonDivi.addEventListener('click',clickdivision)

botonBorrar.addEventListener('click',clickborrar)
botonRetroceder.addEventListener('click',clickretroceder)

//Usando mousetrap para interactar con teclado
Mousetrap.bind('1',clickUno)
Mousetrap.bind('2',clickdos)
Mousetrap.bind('3',clicktres)
Mousetrap.bind('4',clickcuatro)
Mousetrap.bind('5',clickcinco)
Mousetrap.bind('6',clickseis)
Mousetrap.bind('7',clicksiete)
Mousetrap.bind('8',clickocho)
Mousetrap.bind('9',clicknueve)
Mousetrap.bind('0',clickcero)

Mousetrap.bind('+',clicksuma)
Mousetrap.bind('-',clickresta)
Mousetrap.bind('*',clickmultiplicacion)
Mousetrap.bind('/',clickdivision)
Mousetrap.bind('backspace',clickretroceder)
Mousetrap.bind('del',clickborrar)



//Definiendo las funciones
function clickUno(){
    actual.innerHTML+='1'// con esto agregamos un uno al momento de dar clic a la etiqueta actual de index html y lo guarda como string
    actual.innerHTML-=''
}
function clickdos(){
    actual.innerHTML+='2'
    actual.innerHTML-=''
}

function clicktres(){
    actual.innerHTML+='3'
    actual.innerHTML-=''
}

function clickcuatro(){
    actual.innerHTML+='4'
    actual.innerHTML-=''
}

function clickcinco(){
    actual.innerHTML+='5'
    actual.innerHTML-=''
}

function clickseis(){
    actual.innerHTML+='6'
    actual.innerHTML-=''
}

function clicksiete(){
    actual.innerHTML+='7'
    actual.innerHTML-=''
}

function clickocho(){
    actual.innerHTML+='8'
    actual.innerHTML-=''
}

function clicknueve(){
    actual.innerHTML+='9'
    actual.innerHTML-=''
}

function clickcero(){
    actual.innerHTML+='0'
    actual.innerHTML-=''
}

function clicksuma(){
    let valorActual = parseInt(actual.innerHTML)//formateamos a numero las cantidades
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML= valorActual + valorResultado//realizamos la operacion solicitada
    actual.innerHTML='0'//reiniciamos el valor de actual
}

function clickresta(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML=valorActual - valorResultado
    actual.innerHTML='0'
}

function clickmultiplicacion(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado= parseInt(resultado.innerHTML)
    resultado.innerHTML=valorActual * valorResultado
    actual.innerHTML='0'
}

function clickdivision(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    if(valorActual==0){
       resultado.innerHTML='Error de division por cero'
    } else{    resultado.innerHTML = valorActual / valorResultado
    
    actual.innerHTML='0'
}

}

function clickretroceder(){
    var actualprovision = actual.innerHTML;
    actual.innerHTML = actualprovision.substring(0, actualprovision.length - 1);
    if(actual.innerHTML==''){
        actual.innerHTML='0'
    }
}

function clickborrar(){
    actual.innerHTML='0'
    resultado.innerHTML='0'
}