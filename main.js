
//TODO SUMA
let igual = document.getElementById('sumar');
let resultadoSuma = document.getElementById('resultadoSuma');
igual.addEventListener('click', () => {
    let aSuma = parseFloat(document.getElementById('sumaA').value);
    let bSuma = parseFloat(document.getElementById('sumaB').value);
    resultadoSuma.innerHTML = `${JSON.stringify(aSuma + bSuma)}`;
})

//TODO RESTA
let igualResta = document.getElementById('restar');
let resultadoResta = document.getElementById('resultadoResta');
igualResta.addEventListener('click', () => {
    let aResta = parseFloat(document.getElementById('restaA').value);
    let bResta = parseFloat(document.getElementById('restaB').value);
    resultadoResta.innerHTML = `${JSON.stringify(aResta - bResta)}`;
})

//TODO MULTIPLICACION






//TODO DIVISION