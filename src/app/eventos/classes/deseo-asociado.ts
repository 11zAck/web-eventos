export class DeseoAsociado {
    
    id?: number;
    nombre?: string;
    cantidad?: number;
    valor?: number;
    total?: number;

    constructor( id?: number, nombre?: string ){
        this.id = id;
        this.nombre = nombre;
        this.cantidad = 0;
        this.valor = 0;
        this.total = 0;
    }

}
