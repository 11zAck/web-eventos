export class Invitado {

    id?: number;
    nombres?: string;
    apellidos?: string;
    email?: string;
    estado?: boolean;
    creacion?: Date;
    modificacion?: Date;
    creador?: number;
    existe?: boolean;

    constructor(
        id?: number,
        nombres?: string,
        apellidos?: string,
        email?: string,
        estado?: boolean,
        creacion?: Date,
        modificacion?: Date,
        creador?: number,
        existe?: boolean
    ){
        this.id = id || 0;
        this.nombres = nombres || '';
        this.apellidos = apellidos || '';
        this.email = email || '';
        this.estado = estado || true;
        this.creacion = creacion || new Date();
        this.modificacion = modificacion || new Date();
        this.creador = creador || 0;
        this.existe = existe || false;
    }

}
