import 'vista.js'

'use strict'


class Controlador{
    constructor(vista=Vista, modelo=Modelo){
        this.vista = vista
        this.modelo = modelo
    }
}

var objeto = new Controlador()

