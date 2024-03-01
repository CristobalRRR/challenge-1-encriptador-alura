//Solo se aceptaran las letras del abecedario español en minuscula y el espacio en blanco
const caracteresPermitidos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
//Matriz de 5x2 con las llaves de encriptación
//Las filas van de 0 a 4 y columnas de 0 a 1, donde [x][0] es la letra y [x][1] es la encriptación
const matrizEncriptadora = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
];
var entrada = ""; //Se define un string vacio para la entrada
var salida = ""; //y lo mismo para la salida

function encriptar() {
    entrada = document.getElementById("textoParaCambiar").value; //Se capta el texto del cuadro
    salida = ""; //Se reinicia la salida para no mezclar textos
    for (let letra = 0; letra < entrada.length; letra++) { //Lee una por una las letras
        if (caracteresPermitidos.includes(entrada[letra])) {
            //Si se cumple la condicion de uso empieza a encriptar las vocales enviandolas al string salida
            if (entrada[letra] == matrizEncriptadora[0][0]) {
                salida += (matrizEncriptadora[0][1]);
            } else if (entrada[letra] == matrizEncriptadora[1][0]) {
                salida += (matrizEncriptadora[1][1]);
            } else if (entrada[letra] == matrizEncriptadora[2][0]) {
                salida += (matrizEncriptadora[2][1]);
            } else if (entrada[letra] == matrizEncriptadora[3][0]) {
                salida += (matrizEncriptadora[3][1]);
            } else if (entrada[letra] == matrizEncriptadora[4][0]) {
                salida += (matrizEncriptadora[4][1]);
            } else { //Si es cualquier otra letra no se modifica
                salida += (entrada[letra]);
            }
        } else { //Si no cumple las condiciones de uso no se trabaja nada
            alert("Solo se aceptan letras minúsculas sin caracteres especiales");
            break;
        }
    }
    document.getElementById("resultado").value = salida;
    //Se muestra el resultado en el otro cuadro de texto
    return;
};

function desencriptar() {
    entrada = document.getElementById("textoParaCambiar").value;
    salida = "";
    for (letra = 0; letra < entrada.length; letra++) {
        if (caracteresPermitidos.includes(entrada[letra])) {
            for (let i = 0; i < matrizEncriptadora.length; i++) {
    //Para desencriptar la lógica es parecida, pero ahora es viendo si hay claves de encriptación
    //en el texto para reemplazarlas
                if (entrada.includes(matrizEncriptadora[i][1])) {
                    salida = entrada.replaceAll(
                        matrizEncriptadora[i][1],
                        matrizEncriptadora[i][0]);
                }
            }
        } else {
            alert("Solo se aceptan letras minúsculas sin caracteres especiales");
            break;
        }
    }
    document.getElementById("resultado").value = salida;
    return;
};