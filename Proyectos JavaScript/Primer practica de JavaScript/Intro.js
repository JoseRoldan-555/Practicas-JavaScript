console.log("**********************Variables**************************");
var numero1 = 4;
var numero2 = 5;
console.log("Numero 1: "+numero1+" Numero 2: "+numero2);

console.log("**********************Cadenas*************************");
var frase1 = "Ejemplo comillas dobles";
var frase2 = 'Ejemplo comillas simples';
var frase3 = 'Ejemplo comillas ${numero1} invertida'; 

console.log(frase1+"\n"+frase2+"\n"+frase3);

console.log("******************Condicionales*******************");
console.log(numero1!=numero2);
console.log(numero1==numero2);
console.log(numero2<numero1);

console.log("\n*********Operador logico AND**************\n");
console.log(true && true);

console.log("\n*************Operador logico OR*************\n");
console.log(false || false);
console.log(true || true);

console.log("\n****************Arreglos*************\n");
let listaNumeros = [29,11,5,80,30,15];
console.log(listaNumeros[5]);

listaNumeros.push(50);
listaNumeros.push(1000);

console.log(listaNumeros);
console.log(listaNumeros.length);

let listaPalabras = ["Explorer","innovacion","Programador","FullStack"];
console.log(listaPalabras);
console.log(listaPalabras.length);

console.log("\n***********************Objetos**************************\n");

let explorer={
nombre: "Nombre del explorer",
email: "email del explorer",
numeroR: 234456,
mision: "Frontend",
proyectos: ["Abogabot","Taqueria","Pasteleria","Vacunacion"],
proyectoPer:{
    escolar: "Tarea",
    profesional: "Trabajo",
    personal: "Negocio",
},
}

console.log(explorer);
console.log(explorer.proyectoPer.escolar);

console.log("Proyectos: "+explorer.proyectoPer.profesional+" "+explorer.proyectoPer.escolar);
console.log(explorer.proyectos[1]);

let numero11 = 5;
let numero22 = 10;

console.log("\n*************************if / else ***********************\n");
if(numero11>numero22 && numero22>3)
{
    console.log("El numero 1 es mayor que el numero 2");
}
else if(numero11 == numero22 || numero11<3)
{
    console.log("Los numero son iguales");
}
else{
    console.log("El numero 2 es mayor que el numero 1");
}

console.log("\n*****************While****************\n");
let numberWhile = 5;
while(numberWhile < 12)
{
   console.log(numberWhile);
   numberWhile=numberWhile+2;
}

console.log("Aqui ya salio del while "+numberWhile);

console.log("\n***************Do While**************\n");
let numeroDoWhile = 12;
do{
    numeroDoWhile = numeroDoWhile+2;
    console.log(numeroDoWhile);
}while(numeroDoWhile<20);

console.log("Aqui sale del ciclo do while "+numeroDoWhile);

console.log("\n****************For****************\n");
let numeroFor = 0;
for(numeroFor;numeroFor<12;numeroFor+1)
{
    console.log(numeroFor);
}
console.log("Aqui salimos del ciclo for"+numeroFor);

console.log("\n**************Swith***********\n");
switch(prompt("Como esta el clima de hoy"))
{
    case "Lluvioso":
    console.log("No te vayas a mojar");
    break;
    case "Soleado":
    console.log("Ponte bloqueador");
    break;
    case "Nublado":
        console.log("Tapate bien");
        break;
        default:
            console.log("No se como esta el clima");
            break;
}

console.log("Aqui salimos del switch");