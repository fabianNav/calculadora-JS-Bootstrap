




let igual = document.getElementById('sumar');
let resultadoSuma = document.getElementById('resultadoSuma');
let operadoresSuma = document.getElementsByClassName('operadorSuma').value;

function sumar(a, b) {
    return a + b;
}
//console.log(sumar(2, 5));
igual.addEventListener('click', () => {
    let aSuma = parseInt(document.getElementById('sumaA').value);
    let bSuma = parseInt(document.getElementById('sumaB').value);
    resultadoSuma.innerHTML = `${JSON.stringify(aSuma + bSuma)}`;
})
