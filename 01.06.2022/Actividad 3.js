//Parte 1//
var myname = prompt("Escribe aquí tu nombre:");
var age = prompt("Escribe aquí tu edad:")

if (age >= 18 && myname !=="Carlos") {
    console.log("Puedes ingresar a la discoteca")
}
else if (age < 18){
    console.log("No puedes ingresar a la discoteca")
}
else if (myname == 'Carlos' && age >= 18){
    console.log("Puedes ingresar a la sección VIP")
}
else if (myname == 'Mario' && age >= 18){
    console.log("Puedes ingresar a la sección VIP")
}

//Parte 2//
var jugadorUno = prompt ("Escribe UNO para participar")
var apuestaUno = prompt ("Elige piedra, papel o tijera")
var jugadorUno = prompt ("Escribe DOS para participar")
var apuestaUno = prompt ("Elige piedra, papel o tijera")

if (jugadorUno == "UNO" && apuestaUno == "piedra"
    && jugadorDos == "DOS" && apuestaDos == "piedra"){
        console.log("Empate")
}
else if (jugadorUno == "UNO" && apuestaUno == "papel"
    && jugadorDos == "DOS" && apuestaDos == "papel"){
        console.log("Empate")
}
else if (jugadorUno == "UNO" && apuestaUno == "tijera"
    && jugadorDos == "DOS" && apuestaDos == "tijera"){
        console.log("Empate")
}
else if (jugadorUno == "UNO" && apuestaUno == "piedra"
    && jugadorDos == "DOS" && apuestaDos == "papel"){
        console.log("Gana Jugador DOS")
}
else if (jugadorUno == "UNO" && apuestaUno == "piedra"
    && jugadorDos == "DOS" && apuestaDos == "tijera"){
        console.log("Gana Jugador UNO")
}
else if (jugadorUno == "UNO" && apuestaUno == "papel"
    && jugadorDos == "DOS" && apuestaDos == "tijera"){
        console.log("Gana Jugador DOS")
}
else if (jugadorUno == "UNO" && apuestaUno == "papel"
    && jugadorDos == "DOS" && apuestaDos == "piedra"){
        console.log("Gana Jugador UNO")
}
else if (jugadorUno == "UNO" && apuestaUno == "tijera"
    && jugadorDos == "DOS" && apuestaDos == "papel"){
        console.log("Gana Jugador UNO")
}
else if (jugadorUno == "UNO" && apuestaUno == "tijera"
    && jugadorDos == "DOS" && apuestaDos == "piedra"){
        console.log("Gana Jugador DOS")
}
