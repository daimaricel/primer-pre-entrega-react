const productos = [
  {
    producto: "Raqueta",
    modelo: "Pure Aero Rafa",
    marca: "Babolat",
    stock: 8,
    precio: 110000,
    id: "1",
    img: "../img/babolat-pure-aero-rafa.jpg",
    idCategoria: "raquetas",
    descripcion:
      "Tamaño de la cabeza: 645 cm² / 100 in² - Longitud: 685 mm / 27 pulgadas- Peso (sin encordar): 300 g +/- 7 g / 10,6 oz - Equilibrio (sin encordar): 320 mm +/- 7 mm - Patrón de encordado: 16/19 - Composición: Grafito.",
  },
  {
    producto: "Raqueta",
    modelo: "Pure Strike",
    marca: "Babolat",
    stock: 8,
    precio: 107500,
    id: "2",
    img: "../img/babolat-pure-strike-16-19.webp",
    idCategoria: "raquetas",
    descripcion:
      "Head-size: 98, peso: 305g, composición: grafito, tensión recomendada: 23-27 kg, largo: 685mm, patrón de encordado: 16/19.",
  },
  {
    producto: "Grip",
    modelo: "Syntec Uptake",
    marca: "Babolat",
    stock: 15,
    precio: 3500,
    id: "3",
    img: "../img/grip-babolat.webp",
    idCategoria: "accesorios",
    descripcion:
      "Si no deseas cambiar tu grip con demasiada frecuencia, debes probar nuestro Syntec Uptake. Su grosor de 1,9 mm te garantizará una prolongada durabilidad.",
  },
  {
    producto: "Raqueta",
    modelo: "Boom",
    marca: "Head",
    stock: 8,
    precio: 79900,
    id: "4",
    img: "../img/boom-team.jpg",
    idCategoria: "raquetas",
    descripcion:
      "Peso: 295g, balance: 315mm, patrón de encordado: 16/19, headsize: 100in², largo: 685mm.",
  },
  {
    producto: "Raqueta",
    modelo: "Extreme",
    marca: "Head",
    stock: 8,
    precio: 99990,
    id: "5",
    img: "../img/head-extreme.webp",
    idCategoria: "raquetas",
    descripcion:
      "Headsize: 100in², peso: 300g, largo: 685mm, material: grafito",
  },
  {
    producto: "Raqueta",
    modelo: "Radical",
    marca: "Head",
    stock: 8,
    precio: 99000,
    id: "6",
    img: "../img/head-radical.webp",
    idCategoria: "raquetas",
    descripcion:
      "Head-size: 98in², peso: 300g, largo: 685mm, material: grafito, patrón de encordado: 16/19",
  },
  {
    producto: "Mochila",
    modelo: "Pure Aero",
    marca: "Babolat",
    stock: 6,
    precio: 78000,
    id: "7",
    img: "../img/mochila-babolat-pure-aero.webp",
    idCategoria: "mochilas",
    descripcion:
      "Capacidad de raquetas: 3, capacidad: 32l, dimensiones: 20 x 32 x 77 cm. Número de bolsillos: 2 compartimentos principales, 1 compartimento para calzado, 2 bolsillos laterales. Número de compartimentos isotérmicos: 1, número de asas: 2 número de correas: 2.",
  },
  {
    producto: "Pelotas",
    modelo: "Gold All Court",
    marca: "Babolat",
    stock: 12,
    precio: 4700,
    id: "8",
    img: "../img/tubo-babolat.webp",
    idCategoria: "pelotas",
    descripcion:
      "La pelota Gold All Court es una pelota presurizada de alto rendimiento muy polivalente y fácil de jugar, que combina durabilidad y comodidad. Es la elección perfecta para jugadores frecuentes que buscan versatilidad. Aprobada por la ITF.",
  },
  {
    producto: "Antivibradores",
    modelo: "Pack x 2",
    marca: "Babolat",
    stock: 13,
    precio: 2800,
    id: "9",
    img: "../img/antivibradores-pack-babolat.jpg",
    idCategoria: "accesorios",
    descripcion:
      "Evita que las vibraciones producidas por las cuerdas de tu raqueta al impactar la bola lleguen a tus muñecas y codos.",
  },
  {
    producto: "Mochila",
    modelo: "Mint & Black",
    marca: "Head",
    stock: 6,
    precio: 68000,
    id: "10",
    img: "../img/mochila-headmint.webp",
    idCategoria: "mochilas",
    descripcion:
      "Tiene un compartimiento para la raqueta y otro integrado para calzado que mantiene las zapatillas separadas del compartimento principal donde puedes guardar una camiseta de repuesto. Además, incluye un bolsillo frontal para las llaves y un bolsillo lateral para cualquier equipo extra.¡Es un complemento perfecto para un día fuera de casa!.",
  },
  {
    producto: "Muñequeras",
    modelo: "pack x 2",
    marca: "Head",
    stock: 15,
    precio: 6700,
    id: "11",
    img: "../img/munequeras-pack-head.jpg",
    idCategoria: "accesorios",
    descripcion:
      "Cada pack contiene 2 muñequeras, diseñadas con el logo de la marca boradado. Composición: 80% algodón, 15% nailon, 5% elástano",
  },
  {
    producto: "Pelotas",
    modelo: "Marathon",
    marca: "ProPenn",
    stock: 12,
    precio: 3990,
    id: "12",
    img: "../img/tubos-propenn.webp",
    idCategoria: "pelotas",
    descripcion:
      "Tubo de pelotas de tenis. Contiene 3 pelotas. Aptas para todo tipo de superficies.",
  },
  {
    producto: "Pelotas",
    modelo: "Championship",
    marca: "Toalson",
    stock: 12,
    precio: 4000,
    id: "13",
    img: "../img/tubos-toalson.jpg",
    idCategoria: "pelotas",
    descripcion:
      "Tubo de tres pelotas Toalson para todo tipo de superficie con paño extra resistente. Color amarillo. Origen Tailandia",
  },
  {
    producto: "Mochila",
    modelo: "Aero",
    marca: "Babolat",
    stock: 4,
    precio: 58000,
    id: "14",
    img: "../img/mochilaaero.jpg",
    idCategoria: "mochilas",
    descripcion:
      "Con la mochila Backpack Pure Aero podrás organizar todo tu material gracias a sus compartimentos específicos para raqueta, calzado, accesorios y ropa. Ve a las pistas preparado y con estilo.",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      resolve(producto);
    }, 2000);
  });
};

export const getProductosPorCategoria = (idCat) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const seleccionCategoria = productos.filter(
        (prod) => prod.idCategoria === idCat
      );
      resolve(seleccionCategoria);
    }, 2000);
  });
};
