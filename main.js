
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
let igualMulti = document.getElementById('multiplicar');
let resultadoMulti = document.getElementById('resultadoMulti');
igualMulti.addEventListener('click', () => {
    let aMulti = parseFloat(document.getElementById('multiA').value);
    let bMulti = parseFloat(document.getElementById('multiB').value);
    resultadoMulti.innerHTML = `${JSON.stringify(aMulti * bMulti)}`;
})

//TODO DIVISION
let igualDivi = document.getElementById('dividir');
let resultadoDivi = document.getElementById('resultadoDivi');
igualDivi.addEventListener('click', () => {
    let aDivi = parseFloat(document.getElementById('diviA').value);
    let bDivi = parseFloat(document.getElementById('diviB').value);
    resultadoDivi.innerHTML = `${JSON.stringify(aDivi / bDivi)}`;
})

//TODO MODO OSCURO
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';   //! window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; Sirve para que el navegador elija que modo establecer segun que modo tenemos activado en el dispositivo(modo noche o modo dia)
const slider = document.getElementById('slider');
const setTheme = (tema) => {
    document.documentElement.setAttribute('data-theme', tema);   //! documentElement es la parte raiz del documento. setAttribute agrega/setea un atributo al elemento especificado. 
    localStorage.setItem('theme', tema);
}
slider.addEventListener('click', () => {
                        //obtenemos de lS el theme y si el theme es igual a dark entonces pasamos a usar light y viceversa
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
})
setTheme(localStorage.getItem('theme') || preferedColorScheme);


