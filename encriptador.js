//Solo se aceptaran las letras del abecedario español en minuscula contando la ñ, el espacio en blanco
//y un par de signos de puntuacion
const caracteresPermitidos=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"," ",".",",",""];
const caracteresPermitidos2=["abcdefghijklmnñopqrstuvwxyz"]

if(caracteresPermitidos.includes(" ")){
    console.log("Si esta el espacio en blanco");
    }else{
    console.log("No esta el espacio");
};