export class Deseo {

    id?: number;
    nombre?: string;
    descripcion?: string;
    valor?: number;
    activo?: boolean;

    constructor( id?: number, nombre?: string, activo?: boolean, valor?: number ){
        this.id = id || 0;
        this.nombre = nombre || '';
        this.descripcion = '';
        this.activo = activo || true;
        this.valor = valor;
    }

}
