let datos ;

async function obtenerdatos(){
    const res = await fetch('https://mindicador.cl/api/');
    datos = await res.json();
}

const convertirValor = function(){
    const valor = document.querySelector('#valor').value;
    const moneda = document.querySelector('.moneda').value;

    const valorCombertido = valor / datos[moneda].valor;

    const texto =document.querySelector('.resultado');
    if(moneda === 'dolar'){
        divisa = "Dolares";
    }else{
        divisa = "Euros";
    }
    texto.innerHTML= `$ ${valor} pesos equibalen a ${valorCombertido} ${divisa}`;
}

obtenerdatos();