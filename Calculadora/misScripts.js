function Mostrar_Resultado(valor) {
    let valor3 = document.getElementById("mi_resultado");
    valor3.value = valor;
}

function Suma() {
    let valor1 = document.getElementById("numero1").value;
    let valor2 = document.getElementById("numero2").value;
    let resultado = +valor1 + +valor2;
    Mostrar_Resultado(resultado);
}

function Resta() {
    let valor1 = document.getElementById("numero1").value;
    let valor2 = document.getElementById("numero2").value;
    let resultado = +valor1 - +valor2;
    Mostrar_Resultado(resultado);
}

function Multiplicacion() {
    let valor1 = document.getElementById("numero1").value;
    let valor2 = document.getElementById("numero2").value;
    let resultado = +valor1 * +valor2;
    Mostrar_Resultado(resultado);
}

function Division() {
    let valor1 = document.getElementById("numero1").value;
    let valor2 = document.getElementById("numero2").value;
    let resultado = +valor1 / +valor2;
    Mostrar_Resultado(resultado);
}

function Raiz() {
    let valor1 = document.getElementById("numero1").value;
    let valor2 = document.getElementById("numero2").value;
    let resultado = Math.sqrt(+valor1 + +valor2);
    Mostrar_Resultado(resultado);
}

function Potencia() {
    let valor1 = document.getElementById("numero1").value;
    let valor2 = document.getElementById("numero2").value;
    let resultado = Math.pow(+valor1, +valor2);
    Mostrar_Resultado(resultado);
}

function V_absoluto() {
    let valor1 = document.getElementById("numero1").value;
    let valor2 = document.getElementById("numero2").value;
    let resultado = +valor1 + +valor2;
    Mostrar_Resultado(Math.abs(resultado));
}

function Aleatorio() {
    let valor1 = document.getElementById("numero1").value;
    let valor2 = document.getElementById("numero2").value;
    let maximo = +valor2;
    let minimo = +valor1;
    maximo = maximo + 1;
    resultado = Math.random() * (maximo - minimo) + minimo;
    Mostrar_Resultado(resultado);
}

function Redondear() {
    let valor3 = document.getElementById("mi_resultado").value;
    let redondeo = Math.round(valor3);
    Mostrar_Resultado(redondeo);
}

function R_abajo() {
    let valor3 = document.getElementById("mi_resultado").value;
    let redondeo = Math.floor(valor3);
    Mostrar_Resultado(redondeo);
}

function R_arriba() {
    let valor3 = document.getElementById("mi_resultado").value;
    let redondeo = Math.ceil(valor3);
    Mostrar_Resultado(redondeo);
}