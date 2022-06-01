//Crea un programa que le pida al usuario ingresar un número, multiplica ese número por 2 y muestra en la salida el resultado de esa operación.//
var Numero = prompt("Escribe un número");
var resultado = Numero * 2
alert(resultado)

//En la consola del navegador escribe un  programa que reciba 2 números e imprime en pantalla la resta de ambos. Guarda el código en un archivo JS//
var primerNumero = prompt("Escribe un número");
var segundoNumero = prompt("Escribe otro número");
var resultado = primerNumero - segundoNumero
alert(resultado)

//Escribe un programa que calcule el área de un círculo con un radio r=5.3. Imprime el área en pantalla. (fórmula: pi*r 2)
var radio = 5.3;
const pi = Math.PI;
var resultado = pi * (radio **2);
alert(resultado)

//Escribe un programa que calcule el área de un rombo; sabiendo que D=8cm, d=6cm (Fórmula: a=Dxd/2)
const d = 6
const D = 8
var resultado = (D * d) / 2
alert(resultado)