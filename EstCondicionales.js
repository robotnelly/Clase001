/*
if(condicion){

    ...enunciados a ejecutar SI se cumple la condicion

}else {

    ... enunciados a ejecutar NO se cumple la condicion

}

*/

/*
var edad = prompt("Cuál es tu edad?");

if (edad > 18){
    document.write("Puedes entrar a la party");

}else if (edad==18){
    document.write("Puedes entrar a la Party");

}else{
    document.write("Regresate a tu casa");
}

//Crear un sistema de condicion if ... else
*/
/*
var a = prompt("Ingresa un numero: ");
var b = prompt("Ingresa un otro numero: ");

if (a > b){
    document.write(a + " es mayor a " + b);

}else if (b < a){
    document.write(b + " es menor a " + a);

}else{
    document.write(a + " es igual a " + b);
}

*/

// Ejercicio if/else

/*
var numero1 = 7;
var numero2 = 2;

			if(numero1 > numero2){
				document.write('El numero 1 es el mayor');
			}else if(numero1 < numero2){
				document.write('El numero 2 es el mayor');
			}else{
				document.write('Ambos numero son iguales');
			}

*/

//SWITCH
// var generoMusical = prompt("¿Cual es tu género musical preferido?")

// switch(generoMusical){
    
//     case "Banda":
//     //Ejecuta este caso
//     document.write("No eres de los mios");
//     break;
    
//     case "Rock":
//     //Ejecuta este caso
//     document.write("Eres Chido");
//     break;

//     case "Indie":
//     //Ejecuta este caso
//     document.write("Eres Raro");
//     break;
    
//     case "Merengue":
//     //Ejecuta este caso
//     document.write("Eres Bailarin");
//     break;
    
//     default:
//         //Si no encuentra al en los casos anteriores, simplemente ejecuta algo
//         document.write("no sabes de musica");
//         break;
// }

//Reto hacer una sentencia switch

/*

var valor;

			valor = prompt('Ingresa un valor entre 1 y 5:');
			valor = parseInt(valor);

			switch(valor){
				case 1: document.write('Numero uno');
						break;
				case 2: document.write('Numero dos');
						break;
				case 3: document.write('Numero tres');
						break;
				case 4: document.write('Numero cuatro');
						break;
				case 5: document.write('Numero cinco');
						break;
				default:document.write('Debe igresar un valor entre 1 y 5');
						break;
			}

*/

//Ejercicio de triángulo de asteriscos - con for

/*

var cadena = "* ";
var piramide ="";

var b = prompt("Cantidad de filas: ");

//con for
for(var i =0; i<b; i++){
    piramide +=cadena;
    document.write(piramide+ "<br>");


}

*/

//Con while

/*

var contador=0;
piramide="";
var cadena = "* ";

var b = prompt("Cantidad de filas: ");


while(contador <b){
    piramide +=cadena;
    document.write(piramide+ "<br>");
    contador++;

}
*/

 //con do while

 
 contador=0;
 piramide="";
 var cadena = "* ";

 var b = prompt("Cantidad de filas: ");

    do{
        piramide+=cadena;
        document.write(piramide + "<br>");
        contador++;

 }
 while(contador<b)

 

 