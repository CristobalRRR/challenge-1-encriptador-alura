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

//Definir funciones para la lógica del challenge
function encriptar() {
    entrada = document.getElementById("textoParaCambiar").value; //Se capta el texto del cuadro
    salida = ""; //Se reinicia la salida para no mezclar textos
    if(entrada.trim().length == 0){
        alert("Escriba algo por favor");
        return;
    }
    for (let letra = 0; letra < entrada.length; letra++) { //Lee una por una las letras
        if (caracteresPermitidos.includes(entrada[letra])) {
            //Si se cumple la condicion de uso empieza a encriptar las vocales enviandolas al string salida
            //hay formas más optimas por lo que debo seguir mejorando mi lógica de programación
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
        } else { //Si no cumple las condiciones de uso se acaba el ciclo
            alert("Solo se aceptan letras minúsculas sin caracteres especiales");
            salida = "";
            return;
        }
    }
    document.getElementById("resultado").value = salida; //Se muestra el resultado en el otro cuadro de texto
    document.getElementById("copiar").style.display = "block"; //Aparece el botón para copiar al portapapeles
    document.getElementById("lupa").style.display = "none"; //Oculta la imagen al obtener resultados
    document.getElementById("acompañaLupa").style.display = "none"; //Oculta el texto de placeholder

    return;
};

function desencriptar() {
    entrada = document.getElementById("textoParaCambiar").value;
    salida = "";
    if(entrada.trim().length == 0){
        alert("Escriba algo por favor");
        return;
    }
    for (letra = 0; letra < entrada.length; letra++) {
        if (caracteresPermitidos.includes(entrada[letra])) {
            salida += (entrada[letra]);
        } else {
            alert("Solo se aceptan letras minúsculas sin caracteres especiales");
            salida = document.getElementById("resultado").value;
            return; //Si no cumple la condicion de uso se acaba el ciclo y queda la salida vacia
        }
    }
    //La logica es similar a encriptar, pero aqui no se puede ir letra por letra, por lo que
    //hay que reemplazar leyendo el texto completo y devolviendo la versión desencriptada
    for (let elemento = 0; elemento < matrizEncriptadora.length; elemento++) {
        salida = salida.replaceAll(matrizEncriptadora[elemento][1],
            matrizEncriptadora[elemento][0]);
    }
    document.getElementById("resultado").value = salida;
    document.getElementById("copiar").style.display = "block";
    document.getElementById("lupa").style.display = "none";
    document.getElementById("acompañaLupa").style.display = "none";

    return;
};

function copiaPortapeles() {
    //Obtenido de la documentación javascript  
    var textoCopiado = document.getElementById("resultado");

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoCopiado.value);

    alert("Se ha copiado con éxito");
};