alert("Bienvenido a la segunda entrega, por favor escriba su nombre");

let nombre = '';

while (!nombre || /[0-9]/.test(nombre)) {
    nombre = prompt('Ingrese su nombre:');
    
    if (!nombre) {
        alert('El nombre no puede estar vacío.');
    } else if (/[0-9]/.test(nombre)) {
        alert('Por favor, ingrese solo palabras y espacios.');
    } else {
        alert('¡Hola, ' + nombre + '! ¡Bienvenido!');
    }
}
console.log(nombre);

alert("Bienvenido, estás dentro de la página web, por favor, responde las preguntas")
let edad = prompt("¿Cuantos años tienes?");

while (isNaN(edad) || edad < 16 || edad > 100) {
    if (isNaN(edad)) {
        alert("Por favor, ingrese un número válido.");
    } else if (edad < 16) {
        alert("Lo sentimos, eres demasiado jóven para visitarnos.");
    } else if (edad > 100) {
        alert("Lo sentimos, la edad máxima para visitarnos es de 100 años.");
    }
    edad = prompt("Por favor, ingrese una edad válida (entre 15 y 100 años.):");
}
edad = parseInt(edad);

if (edad >=16 && edad <= 17){
    console.log("Eres un adolescente,");
        alert("Eres un adolescente, aun así puedes acceder a la página. ")
}else{
    console.log("Eres un adulto.")
        alert("Eres un adulto.")

}

// Objetos para diferentes tipos de clientes
const clientePremium = {
    tipo: "Premium",
    productos: [
        { nombre: "Reloj de lujo", precio: 500 },
        { nombre: "Traje a medida", precio: 1000 },
        { nombre: "Zapatos de piel", precio: 300 }
    ],
    saludar: function() {
        console.log("¡Bienvenido cliente premium!, Disfruta de algunas ventajas de la suscripción premium");
        alert("¡Bienvenido cliente premium!,  Disfruta de algunas ventajas de la suscripción premium.");
        this.suscribirse();
    },
    suscribirse: function() {
        let suscripcion = prompt("Estimado cliente le recordamos que su suscripción de cliente premium acabará pronto. ¿Desea abonar la cantidad correspondiente ahora o más tarde?").toLowerCase();
        console.log("¿Desea abonar la cantidad correspondiente?")
        if (suscripcion === 'ahora') {
             let confirmacion = prompt("El precio de la suscripción es de 20 euros. ¿Está seguro de abonar la cantidad ahora? (Responda 'si' o 'no')").toLowerCase();
             console.log("El cliente desea abonar la cantidad")
            if (confirmacion === 'si') {
                alert("Se ha abonado la cantidad de 20 euros. ¡Gracias por su pago!");
                console.log("El cliente ha abonado la cantidad de 20 euros")
            } else {
                alert("Entendido, puede abonar la cantidad más tarde.");
            }   
        } else {
            alert("Puede abonar la cantidad más tarde.");
        }
    }
};

const clienteEstandar = {
    tipo: "Estándar",
    productos: [
        { nombre: "Camisa casual", precio: 50 },
        { nombre: "Pantalones vaqueros", precio: 70 },
        { nombre: "Zapatos deportivos", precio: 80 }
    ],
    saludar: function() {
        console.log("¡Bienvenido cliente estándar!");
        alert("¡Bienvenido cliente estándar!");
    }
};

const clientePlatino = {
    tipo: "Platino",
    productos: [
        { nombre: "Chaqueta de diseñador", precio: 800 },
        { nombre: "Bolso de cuero italiano", precio: 1200 },
        { nombre: "Botines de marca exclusiva", precio: 500 }
    ],
    saludar: function() {
        console.log("¡Bienvenido cliente platino!, Disfruta de todas las ventajas de ser platino");
        alert("¡Bienvenido cliente platino!,  Disfruta de todas las ventajas de ser platino.");
    }
};

// Función para sumar precios de productos seleccionados
function sumarPreciosSeleccionados(productos) {
    let precioTotal = 0;
    productos.forEach(producto => {
        const seleccion = prompt(`¿Desea comprar ${producto.nombre} por ${producto.precio} euros? (Responda 'si' o 'no')`).toLowerCase();
        if (seleccion === 'si') {
            precioTotal += producto.precio;
            console.log(`El cliente ha añadido ${producto.nombre} con valor de ${producto.precio} euros.`);
        }
    });
    return precioTotal;
}

let tipoDeCliente = prompt("¿Qué tipo de cliente eres, Premium, Estándar o Platino?, Por favor, respete las mayúsculas.").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
while (tipoDeCliente !== "premium" && tipoDeCliente !== "estandar" && tipoDeCliente !== "platino") {
    alert("Por favor, introduzca un tipo de cliente válido (Premium, Estándar o Platino) y respete las mayúsculas.");
    tipoDeCliente = prompt("¿Qué tipo de cliente eres, Premium, Estándar o Platino? Por favor, respete las mayúsculas.").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

let productosCliente;
switch (tipoDeCliente) {
    case "premium":
        clientePremium.saludar();
        productosCliente = clientePremium.productos;
        break;
    case "estandar":
        clienteEstandar.saludar();
        productosCliente = clienteEstandar.productos;
        break;
    case "platino":
        clientePlatino.saludar();
        productosCliente = clientePlatino.productos;
        break;
    default:
        console.log("No eres cliente de nuestra web");
        alert("No eres cliente de nuestra web");
        break;
}

const total = sumarPreciosSeleccionados(productosCliente);

alert(`El precio total de los productos seleccionados es: ${total} euros.`);
console.log(`El precio total gastado por el cliente es: ${total} euros.`);
alert("¡Muchas gracias por su compra, vuelva pronto!");
console.log(`El cliente ha realizado gastos y le hemos agradecido su compra y esperamos que vuelva pronto.`);
