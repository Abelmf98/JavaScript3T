export class Factura{
    constructor(cliente = null, base = 0, tipoIVA = 21){
        this.cliente = cliente
        this.base = base
        this.tipoIVA = tipoIVA
    }



    setCliente(cliente){
        this.cliente = cliente
    }

    getCliente(){
        return this.cliente
    }

    setBase(base){
        this.base = base
    }

    getBase(){
        return this.base
    }

    settipoIVA(tipoIVA){
        this.tipoIVA = tipoIVA
    }

    gettipoIVA(){
        return this.tipoIVA
    }

    getTotal(){
        return (this.base * this.tipoIVA)/100 + this.base
    }
}