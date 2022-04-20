
export class Vista{
    constructor(){
        console.log('TRON..')
    }
    mostrar(dato){
        let texto = document.getElementById('texto')
        texto.textContent = 'El sentido del universo es..' + dato
    }

    
}