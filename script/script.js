alert("bienvenido al simulador de combos");

const IVA = 0.21;
const serviciosExtras = ["'informe detallado'", "'limpieza energetica'", "'mesa cuantica'", "'curso de aprendizaje'"];
const costosExtras = [1000, 2000, 3000, 4000];

let costoBase;
let serviciosSeleccionados = [];
let costoTotal = 0;

function solicitarCostoBase() {
    costoBase = parseFloat(prompt("ingrese el costo base de su lectura:"));
    
    if (isNaN(costoBase) || costoBase < 0) {
        alert("ingrese un numero valido");
        solicitarCostoBase();
    } else {
        console.log("costo base ingresado: $" + costoBase);
    }
}

function seleccionarServicios() {
    for (let i = 0; i < serviciosExtras.length; i++) {
        let confirmacion = confirm(`desea agregar el servicio de ${serviciosExtras[i]} por $${costosExtras[i]}?`);
        if (confirmacion) {
            serviciosSeleccionados.push(serviciosExtras[i]);
            costoTotal += costosExtras[i];
        }
    }
}

function calcularCostoFinal() {
    costoTotal += costoBase;
    let impuesto = costoTotal * IVA;
    let totalConIVA = costoTotal + impuesto;

    alert(`resumen:
        - costo base: $${costoBase}
        - servicios adicionales: ${serviciosSeleccionados.join(", ") || "ninguno"}
        - subtotal: $${costoTotal}
        - iva (21%): $${impuesto.toFixed(2)}
        - total: $${totalConIVA.toFixed(2)}`);

    console.log("costo total sin impuestos: $" + costoTotal);
    console.log("iva: $" + impuesto.toFixed(2));
    console.log("costo final con impuestos: $" + totalConIVA.toFixed(2));
}

solicitarCostoBase();
seleccionarServicios();
calcularCostoFinal();