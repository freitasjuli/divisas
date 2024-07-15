let datos ;

async function obtenerdatos(){
    const res = await fetch('https://mindicador.cl/api/');
    datos = await res.json();
}

const convertirValor = function(){
    const valor = document.querySelector('#valor').value;
    const moneda = document.querySelector('.moneda').value;

    try
    {
        const valorCombertido = valor / datos[moneda].valor;

        if(moneda === 'dolar'){
            divisa = "Dolares";
        }else{
            divisa = "Euros";
        }
        document.querySelector('.resultado').innerHTML= `$ ${valor} pesos equibalen a ${valorCombertido} ${divisa}`;
    }
    catch(error){
        document.querySelector('.resultado').textContent='No fue posible la conversion de la divisa';
    }
}

obtenerdatos();