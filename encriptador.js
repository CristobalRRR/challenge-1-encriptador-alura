/*
//Solo se aceptaran las letras del abecedario español en minuscula contando la ñ, el espacio en blanco
//y un par de signos de puntuacion
const caracteresPermitidos=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"," ",".",",",""];
const caracteresPermitidos2=["abcdefghijklmnñopqrstuvwxyz"]

if(caracteresPermitidos.includes(" ")){
    console.log("Si esta el espacio en blanco");
    }else{
    console.log("No esta el espacio");
};
*/

//Matriz de 5x2 con las llaves de encriptación
//Las filas van de 0 a 4 y columnas de 0 a 1, donde [x][0] es la letra y [x][1] es la encriptación
const matrizEncriptadora=[
    ["a","ai"],
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"],
];

function lectura(){
    const texto = document.getElementById("textoParaCambiar").value;
    console.log(typeof texto);
    console.log(texto);
    console.log(`${texto.lenght}`);
    return;
}