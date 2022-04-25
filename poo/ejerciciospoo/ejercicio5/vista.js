/**
 * Exportamos la clase vista la cual necesitaremos en el controlador,
 * Generamos el constructor con un mensaje por consola y un metodo con parametro que usaremos desde el controlador,
 * @export Vista
 * @class Vista
 */
export class Vista{
    constructor(){
        console.log('TRON..')
    }
    mostrar(dato){
        let texto = document.getElementById('texto')
        texto.textContent = 'El sentido del universo es..' + dato
    }

    
}