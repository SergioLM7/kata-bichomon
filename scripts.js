console.log(document.title);

//1.Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const cambioTitulo = () => {
    let titulo = document.querySelector('#gen-1');
    titulo.textContent = 'Generasión 1 Pokimon';

    return titulo;
};

cambioTitulo();


//2.Cambia el color de fondo de la primera generación de Pokimon
const cambioBackgroundColor = () => {

    //Utilizo el método querySelector má sla propiedad nextElementSibling para guardar en una variable 
    //el elemento hermano del h2 con id gen-1 (que engloba a la 1ª generación)
    let backgroundGen1 = document.querySelector('#gen-1').nextElementSibling;
    return backgroundGen1.style.backgroundColor = 'red';
};

cambioBackgroundColor();

//3.Imprime por consola la URL de la página.
const imprimirURL = () => {
    let url = document.querySelector('.header-logo');
    return console.log(url.getAttribute('href'));
};

imprimirURL();

//4.Imprime por consola el dominio de la página.
const imprimirDominio = () => {
    let url = document.querySelector('.header-logo');
    let dominio= url.hostname;
    console.log(dominio);
};

imprimirDominio();

//5.Imprime todos los nodos de imagen.
const imprimirNodosImagen = () => {
    let imagenes = document.querySelectorAll('img');
    return console.log(imagenes); 
};

imprimirNodosImagen();

//6.Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
const sustituyeImagenes = () => {
    let imagenes = document.querySelectorAll('img');
    imagenes.forEach((element) => element.setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif'));
    return imagenes;
};

sustituyeImagenes();

//PREMIUM
//7.Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying


