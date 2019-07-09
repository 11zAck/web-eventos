export class DeseoAsociado {

    id?: number;
    nombre?: string;
    cantidad?: number;
    valor?: number;
    total?: number;

    constructor( id?: number, nombre?: string, cantidad?: number, valor?: number, total?: number ){
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad || 10000;
        this.valor = valor || 0;
        this.total = total || 0;
    }

    public toString(): string {
        return `DeseoAsociado (id: ${this.id}, nombre: ${this.nombre}, ` 
        + `cantidad: ${this.cantidad}, valor: ${this.valor}, total: ${this.total} )`;
    }

}
