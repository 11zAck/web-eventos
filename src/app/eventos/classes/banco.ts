export class Banco {

    id: number;
    nombre: string;
    activo: boolean;

    constructor( id?: number, nombre?: string, activo?: boolean ){
        this.id = id;
        this.nombre = nombre;
        this.activo = activo;
    }

}
