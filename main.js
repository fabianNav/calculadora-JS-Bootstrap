
//TODO SUMA
let historialSuma = document.getElementById('sumaHistorial');
let listaHistorialSuma = document.getElementById('listaHistorialSuma');
let arrayHistorialSuma = [];
let igual = document.getElementById('sumar');
let resultadoSuma = document.getElementById('resultadoSuma');
let buttonLimpiarSuma = document.getElementById('buttonSuma');
igual.addEventListener('click', () => {
    let aSuma = parseFloat(document.getElementById('sumaA').value);
    let bSuma = parseFloat(document.getElementById('sumaB').value);
    resultadoSuma.innerHTML = `${JSON.stringify(aSuma + bSuma)}`;
    arrayHistorialSuma.push(`${aSuma} + ${bSuma} = ${Number(aSuma) + Number(bSuma)}`);
    Guardar();
})

//! Historial de la suma
const Guardar = () => {
    localStorage.setItem('historial', JSON.stringify(arrayHistorialSuma));
}
const renderSuma = () => {
    listaHistorialSuma.innerHTML = ''
    arrayHistorialSuma = JSON.parse(localStorage.getItem('historial'));
    if (arrayHistorialSuma === null) {
        historialSuma = [];
    } else {
        arrayHistorialSuma.map(h => {
            listaHistorialSuma.innerHTML += `<li class='liSuma'>${h}</li>`;
        });
    }
}
historialSuma.addEventListener('click', () => {
    renderSuma()
    buttonLimpiarSuma.innerHTML = '<button id="limpiarSuma">Limpiar</button>'
});
buttonLimpiarSuma.addEventListener('click', () => {
    if(window.confirm('¿Estas seguro que quieres limpiar el historial de la suma?')) {
        localStorage.removeItem('historial');
        renderSuma();
    }
})

//TODO RESTA
let historialResta = document.getElementById('restaHistorial');
let listaHistorialResta = document.getElementById('listaHistorialResta');
let arrayHistorialResta = [];
let igualResta = document.getElementById('restar');
let resultadoResta = document.getElementById('resultadoResta');
let buttonResta = document.getElementById('buttonResta');
igualResta.addEventListener('click', () => {
    let aResta = parseFloat(document.getElementById('restaA').value);
    let bResta = parseFloat(document.getElementById('restaB').value);
    resultadoResta.innerHTML = `${JSON.stringify(aResta - bResta)}`;
    arrayHistorialResta.push(`${aResta} - ${bResta} = ${Number(aResta) - Number(bResta)}`);
    GuardarResta();
});
//! Historial de la resta
const GuardarResta = () => {
    localStorage.setItem('Resta', JSON.stringify(arrayHistorialResta));
}
const renderResta = () => {
    listaHistorialResta.innerHTML = ''
    arrayHistorialResta = JSON.parse(localStorage.getItem('Resta'));
    if (arrayHistorialResta === null) {
        historialResta = [];
    } else {
        arrayHistorialResta.map(h => {
            listaHistorialResta.innerHTML += `<li class='liResta'>${h}</li>`;
        });
    }
}
historialResta.addEventListener('click', () => {
    renderResta()
    buttonResta.innerHTML = '<button id="limpiarResta">Limpiar</button>'
});
buttonResta.addEventListener('click', () => {
    if(window.confirm('¿Estas seguro que quieres limpiar el historial de la resta?')) {
        localStorage.removeItem('Resta');
        renderResta();
    }
})

//TODO MULTIPLICACION
let historialMulti = document.getElementById('multiHistorial');
let listaHistorialMulti = document.getElementById('listaHistorialMulti');
let arrayHistorialMulti = [];
let buttonMulti = document.getElementById('buttonMulti');
let igualMulti = document.getElementById('multiplicar');
let resultadoMulti = document.getElementById('resultadoMulti');
igualMulti.addEventListener('click', () => {
    let aMulti = parseFloat(document.getElementById('multiA').value);
    let bMulti = parseFloat(document.getElementById('multiB').value);
    resultadoMulti.innerHTML = `${JSON.stringify(aMulti * bMulti)}`; arrayHistorialMulti.push(`${aMulti} X ${bMulti} = ${Number(aMulti) * Number(bMulti)}`);
    GuardarMulti();
});
//! Historial de la resta
const GuardarMulti = () => {
    localStorage.setItem('Multiplicacion', JSON.stringify(arrayHistorialMulti));
}
const renderMulti = () => {
    listaHistorialMulti.innerHTML = ''
    arrayHistorialMulti = JSON.parse(localStorage.getItem('Multiplicacion'));
    if (arrayHistorialMulti === null) {
        historialMulti = [];
    } else {
        arrayHistorialMulti.map(h => {
            listaHistorialMulti.innerHTML += `<li class='liMulti'>${h}</li>`;
        });
    }
}
historialMulti.addEventListener('click', () => {
    renderMulti()
    buttonMulti.innerHTML = '<button id="limpiarResta">Limpiar</button>'
});
buttonMulti.addEventListener('click', () => {
    if(window.confirm('¿Estas seguro que quieres limpiar el historial de la multiplicacion?')) {
        localStorage.removeItem('Multiplicacion');
        renderMulti();
    }
})

//TODO DIVISION
let historialDivi = document.getElementById('diviHistorial');
let listaHistorialDivi = document.getElementById('listaHistorialDivi');
let arrayHistorialDivi = [];
let buttonDivi = document.getElementById('buttonDivi');
let igualDivi = document.getElementById('dividir');
let resultadoDivi = document.getElementById('resultadoDivi');
igualDivi.addEventListener('click', () => {
    let aDivi = parseFloat(document.getElementById('diviA').value);
    let bDivi = parseFloat(document.getElementById('diviB').value);
    resultadoDivi.innerHTML = `${JSON.stringify(aDivi / bDivi)}`; arrayHistorialDivi.push(`${aDivi} / ${bDivi} = ${Number(aDivi) / Number(bDivi)}`);
    GuardarDivi();
});
//! Historial de la resta
const GuardarDivi = () => {
    localStorage.setItem('Division', JSON.stringify(arrayHistorialDivi));
}
const renderDivi = () => {
    listaHistorialDivi.innerHTML = ''
    arrayHistorialDivi = JSON.parse(localStorage.getItem('Division'));
    if (arrayHistorialDivi === null) {
        historialDivi = [];
    } else {
        arrayHistorialDivi.map(h => {
            listaHistorialDivi.innerHTML += `<li class='liDivi'>${h}</li>`;
        });
    }
}
historialDivi.addEventListener('click', () => {
    renderDivi()
    buttonDivi.innerHTML = '<button id="limpiarResta">Limpiar</button>'
});
buttonDivi.addEventListener('click', () => {
    if(window.confirm('¿Estas seguro que quieres limpiar el historial de la division?')) {
        localStorage.removeItem('Division');
        renderDivi();
    }
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

//TODO eventos especiales
let fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let cuerpo = document.getElementById('todo');
let sumaContainer = document.getElementById('contenedorSuma');
let restaContainer = document.getElementById('contenedorResta');
let multiContainer = document.getElementById('contenedorMulti');
let diviContainer = document.getElementById('contenedorDivi');
//? NAVIDAD
if(dia == 25 || dia == 24 && mes == 12) {
    cuerpo.classList.add('navidad');
    window.alert('FELIZ NAVIDAAAAAAAD');
    sumaContainer.classList.add('navidadSuma');
    restaContainer.classList.add('navidadResta');
    multiContainer.classList.add('navidadMulti');
    diviContainer.classList.add('navidadDivi');
} else if( dia !== 24 || dia !== 25 && mes !== 12){
    cuerpo.classList.remove('navidad');
    sumaContainer.classList.remove('navidadSuma');
    restaContainer.classList.remove('navidadResta');
    multiContainer.classList.remove('navidadMulti');
    diviContainer.classList.remove('navidadDivi');
};
//? HALLOWEEN
if(dia == 31 && mes == 10) {
    cuerpo.classList.add('halloween');
    window.alert('FELIZ HALLOWEEN');
} else if( dia !== 24 || dia !== 25 && mes !== 12){
    cuerpo.classList.remove('halloween');
};



