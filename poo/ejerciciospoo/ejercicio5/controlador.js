console.log('Estoy aqui')
import {Vista} from './vista.js'
import {Modelo} from './modelo.js'



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

