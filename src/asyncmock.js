const productos = [
    {producto: "Raqueta", modelo: "Pure Aero Rafa", marca: "Babolat", precio:110000  , id: "1", img: "../img/babolat-pure-aero-rafa.jpg", idCategoria: "raquetas", descripcion: "Tamaño de la cabeza: 645 cm² / 100 in² - Longitud: 685 mm / 27 pulgadas- Peso (sin encordar): 300 g +/- 7 g / 10,6 oz - Equilibrio (sin encordar): 320 mm +/- 7 mm - Patrón de encordado: 16/19 - Composición: Grafito."},
    {producto: "Raqueta", modelo: "Pure Strike", marca: "Babolat", precio: 107500 , id: "2",  img: "../img/babolat-pure-strike-16-19.webp", idCategoria: "raquetas", descripcion: "Head-size: 98, peso: 305g, composición: grafito, tensión recomendada: 23-27 kg, largo: 685mm, patrón de encordado: 16/19."},
    {producto: "Grip", modelo: "Syntec Uptake", marca: "Babolat", precio: 3500 ,id: "3", img: "../img/grip-babolat.webp", idCategoria: "accesorios",  descripcion: "Si no deseas cambiar tu grip con demasiada frecuencia, debes probar nuestro Syntec Uptake. Su grosor de 1,9 mm te garantizará una prolongada durabilidad."},
    {producto: "Raqueta", modelo: "Boom", marca: "Head", precio: 79900 , id: "4", img: "../img/head-boom.webp", idCategoria: "raquetas", descripcion: "Peso: 295g, balance: 315mm, patrón de encordado: 16/19, headsize: 100in², largo: 685mm."},
    {producto: "Raqueta", modelo: "Extreme", marca: "Head", precio: 99990 ,id:"5",  img: "../img/head-extreme.webp", idCategoria: "raquetas", descripcion: "Headsize: 100in², peso: 300g, largo: 685mm, material: grafito"},
    {producto: "Raqueta", modelo: "Radical", marca: "Head", precio: 99000,id: "6", img: "../img/head-radical.webp",idCategoria: "raquetas",  descripcion:"Head-size: 98in², peso: 300g, largo: 685mm, material: grafito, patrón de encordado: 16/19"},
    {producto: "Mochila", modelo: "Pure Aero", marca: "Babolat", precio: 58000 , id: "7", img: "../img/mochila-babolat-pure-aero.webp", idCategoria: "mochilas" ,descripcion: "Capacidad de raquetas: 3, capacidad: 32l, dimensiones: 20 x 32 x 77 cm. Número de bolsillos: 2 compartimentos principales, 1 compartimento para calzado, 2 bolsillos laterales. Número de compartimentos isotérmicos: 1, número de asas: 2 número de correas: 2."},
    {producto: "Pelotas", modelo: "Gold All Court", marca: "Babolat", precio: 4700,id: "8", img: "../img/tubo-babolat.webp", idCategoria: "pelotas", descripcion: "La pelota Gold All Court es una pelota presurizada de alto rendimiento muy polivalente y fácil de jugar, que combina durabilidad y comodidad. Es la elección perfecta para jugadores frecuentes que buscan versatilidad. Aprobada por la ITF."},
]

export const getProductos = () => {
    return new Promise ((resolve) =>{
        setTimeout( () =>{
           resolve(productos)
        }, 2000)
    })
}

export const getUnProducto = (id) =>{
      return new Promise (resolve =>{
        setTimeout ( () => {
        const producto = productos.find (prod => prod.id === id );
        resolve(producto);
        }, 2000)
      })
}

export const getProductosPorCategoria = (idCat) =>{

    return new Promise ( resolve => {
        setTimeout ( () =>{
          const seleccionCategoria = productos.filter(prod => prod.idCategoria===idCat);
          resolve (seleccionCategoria);
        }, 2000 )
    })
}
