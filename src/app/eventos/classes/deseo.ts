export class Deseo {

    id?: number;
    nombre?: string;
    descripcion?: string;
    activo?: boolean;

    constructor( id?: number, nombre?: string, activo?: boolean ){
        this.id = id || 0;
        this.nombre = nombre || '';
        this.descripcion = '';
        this.activo = activo || true;
    }

}
