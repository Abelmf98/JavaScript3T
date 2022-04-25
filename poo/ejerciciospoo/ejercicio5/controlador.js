console.log('Estoy aqui')
import {Vista} from './vista.js'
import {Modelo} from './modelo.js'


/**
 * Creamos la clase controlador la cual no necesitara parametros,
 * Desde controlador llamamos a la vista y al modelo,
 * Recogeremos los datos del metodo getDatos() en el fichero del modelo,
 * Ahora lo mostraremos junto a la información guardada en mostrar() en el fichero vista.
 * @class Controlador
 */
class Controlador{
    constructor(){
        console.log('ADIOS')
        this.vista = new Vista()
        this.modelo = new Modelo()
        let cogerdato = this.modelo.getDatos()
        console.log(cogerdato)
        this.vista.mostrar(cogerdato)
    }
}

var objeto = new Controlador()

