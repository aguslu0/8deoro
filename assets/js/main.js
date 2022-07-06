/* 
    Acostumbro a declarar las variables con inicial de la siguiente manera (y luego empleo camelCase):
        i = int
        f = float
        s = string
        a = arrays
*/

let iProductSelected = NaN;
let iTotal = 0;
let iContinue;

// Arrays en las cuales almacenamos los productos y precios del sitio
const a8DO = [ 
    {
        id: 1,
        title: "azucaradas",
        price: 110,
        img: "./assets/img/azucaradas.jpg",
        alt: "paquete de 8 de oro azucaradas"
    },
    {
        id: 2,
        title: "clasicas",
        price: 80,
        img: "./assets/img/clasicas.jpg",
        alt: "paquete de 8 de oro clásicas"
    },
    {
        id: 3,
        title: "agridulces",
        price: 90,
        img: "./assets/img/agridulces.jpg",
        alt: "paquete de 8 de oro agridulces"
    }
];

const aOptions8DO = [ "azucaradas", "clasicas", "agridulces" ];
const aPrice8DO = [ 110, 80, 90 ];

let iAzucaradas = 0, iClasicas = 0, iAgridulces = 0;

// Esta función se ejecutará al hacer click en el botón "Comprar" gracias al evento onClick
// En esta función creamos el prompt con datos recibidos de un bucle FOR en el cual pasamos los datos de los arrays.
function buy8deoro() {
    let sOptions = "";
    
    for(let i = 0; i < aOptions8DO.length; i++) {
        sOptions += aOptions8DO[i].toUpperCase() + " ($" + aPrice8DO[i] + ")\n";
    }

    let optSelected = prompt("Elige las 8 de oro que quisieras comprar:\n\n" + sOptions).toLowerCase();

    if(aOptions8DO.includes(optSelected)) {
        buyOptSelected(aOptions8DO.indexOf(optSelected));
    } else if(optSelected != null) {
        alert("ERROR: Ingresa una opción válida!");
        buy8deoro();
    }
}

// En caso de que el usuario ingrese una opción válida llamamos a esta función que le preguntará si desea seguir comprando y llamaremos a la función totalBuy con cada compra.
function buyOptSelected(option) {
    iContinue = parseInt(prompt("Elegiste las 8 de oro " + aOptions8DO[option].toUpperCase() + " por un precio de $" + aPrice8DO[option] + "\n¿Desea seguir comprando? \n\n1. Si \n2. No"));
    totalBuy(aPrice8DO[option]);

    switch(iContinue) {
        case 1:
            alert("Excelente! Hasta ahora vas gastando: $" + totalBuy());
            cart(aOptions8DO[option].toLowerCase());
            buy8deoro();
            break;
        case 2:
            alert("¡Muchas gracias por tu compra! \nEl total es: $" + totalBuy());
            cart(aOptions8DO[option].toLowerCase());
            iTotal = 0;
            break;
        default:
            alert("ERROR: No ingresaste una opción valida! Tu compra se ha cancelado.");
            iTotal = 0;
            break;
    }
}

// En esta función vamos obteniendo el total de lo que lleva gastando el cliente utilizando la variable iTotal.
function totalBuy(valor) {
    if(isNaN(valor)) { valor = 0; }

    iTotal += valor;

    return iTotal;
}

// En esta función hacemos el carrito
function cart(option) {
    switch(option)
    {
        case "azucaradas":
            iAzucaradas++;
            break;
        case "clasicas":
            iClasicas++;
            break;
        case "agridulces":
            iAgridulces++;
            break;
    }

    return console.log("Hasta ahora tenés: " + iAzucaradas + " 8 de oro azucaradas\n" + iClasicas + " 8 de oro clasicas\n" + iAgridulces + " 8 de oro agridulces");
}

// Empezamos a interactuar con HTML
let htmlCode = ``;

a8DO.forEach(function(ochoDeOro) {
    htmlCode += `<article>
    <img src="${ochoDeOro.img}" alt="${
    ochoDeOro.alt
  }">
    <h3>8 de Oro ${ochoDeOro.title}</h3>
    <p>Precio: $${ochoDeOro.price}</p>
  </article>`;
});

const sCards = document.querySelector("#cards");

sCards.innerHTML = htmlCode;