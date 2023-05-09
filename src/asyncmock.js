const productos = [
    {producto: "Raqueta", modelo: "Pure Aero Rafa", marca: "Babolat", precio:110000  , id: 1, img: "./img/babolat-pure-aero-rafa.jpg"},
    {producto: "Raqueta", modelo: "Pure Strike", marca: "Babolat", precio: 107500 , id: 2,  img: "./img/babolat-pure-strike-16-19.webp"},
    {producto: "Grip", modelo: "Syntec Uptake", marca: "Babolat", precio: 3500 ,id: 3, img: "./img/grip-babolat.webp"},
    {producto: "Raqueta", modelo: "Boom", marca: "Head", precio: 79900 , id: 4, img: "./img/head-boom.webp" },
    {producto: "Raqueta", modelo: "Extreme", marca: "Head", precio: 99990 ,id:5,  img: "./img/head-extreme.webp"},
    {producto: "Raqueta", modelo: "Radical", marca: "Head", precio: 99000,id: 6, img: "./img/head-radical.webp"},
    {producto: "Mochila", modelo: "Pure Aero", marca: "Babolat", precio: 58000 , id: 7, img: "./img/mochila-babolat-pure-aero.webp"},
    {producto: "Pelotas", modelo: "Gold All Court", marca: "Babolat", precio: 4700,id: 8, img: "./img/tubo-babolat.webp"},
]

export const getProductos = () => {
    return new Promise ((resolve) =>{
        setTimeout( () =>{
           resolve(productos)
        }, 2000)
    })
}