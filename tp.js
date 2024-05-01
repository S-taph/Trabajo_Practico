const stock = [0, 1500, 3000];
const silos = [
    ["limpio", "ventilado"],
    ["sucio", "ventilado"],
    ["limpio", "ventilado"],
];
let carga = 3000;

function recepcionMaiz () { /*Consulta al usuario la condicion del maiz y
devuelve el nro del silo donde corresponde depositarlo*/
    let estadoMaiz = parseInt(prompt('Según el estado del maiz, ingrese:\n' +
    '* 1 si el maiz está en óptimas condiciones.\n' +
    '* 2 si el maiz tiene cuerpos extraños.\n' +
    '* 3 si el maiz está húmedo.'));
    while (estadoMaiz !== 1 && estadoMaiz !== 2 && estadoMaiz !== 3) {
        alert('La opción ingresada es incorrecta.');
        estadoMaiz = parseInt(prompt('Según el estado del maiz, ingrese:\n' +
                                    '* 1 si el maiz está en óptimas condiciones.\n' +
                                    '* 2 si el maiz tiene cuerpos extraños.\n' +
                                    '* 3 si el maiz está húmedo.'));
    
    }

    return estadoMaiz - 1;
}

function verificarStock (nroSilo, stockSilos) {
    alert('El stock actual del silo designado: ' +
stockSilos[nroSilo] + ' toneladas');
}

function verificarSilo (siloAsignado, listaSilos) {
    let optCond = undefined;
    alert("Verificando las condiciones del silo designado");
    if (listaSilos[siloAsignado][0] == "limpio" &&
    listaSilos[siloAsignado][1] == "ventilado") {
        optCond = true;
        alert("El silo se encuentra en óptimas condiciones.");
    } else {
        optCond = false;
        alert("El silo no se encuentra en óptimas condiciones.\n" + 
    "Informando al personal superior.");
    }
    return optCond;
}

function ingresoMaiz (stockSilos, nroSilo, toneladas, condSilo) {
    if (condSilo) {
        alert("El stock inicial del silo designado es de " +
    stockSilos[nroSilo] + " toneladas.");
        alert('Procediendo al ingreso del maiz al silo designado');
        stockSilos[nroSilo] += toneladas;
        alert("El stock actualizdo del silo designado es de " +
    stockSilos[nroSilo] + " toneladas.");
        alert("Informando el nuevo stock de maiz al personal de la cooperativa:\n" +
    "* Gerentes.\n" + "* Supervisores.\n" + "* Operadores.");
    } else {
        alert("No se pudo realizar el ingreso porque el silo no se encuentra en óptimas condiciones.");
    }
}

function coopMaiz () {
    let siloAsig = recepcionMaiz();
    let condSilo = verificarSilo(siloAsig, silos);
    ingresoMaiz(stock, siloAsig, carga, condSilo);
}

coopMaiz();
