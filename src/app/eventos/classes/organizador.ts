import { Usuario } from '../../auth/usuario';

export class Organizador extends Usuario {

    cantidadEventos?: number;
    registroCompleto?: boolean;

    constructor(
        id?: number,
        username?: string,
        password?: string,
        dni?: string,
        firstname?: string,
        lastname?: string,
        birthday?: Date,
        enabled?: boolean,
        cantidadEventos?: number,
        registroCompleto?: boolean
    ) {
        super( id,
                username,
                password,
                dni,
                firstname,
                lastname,
                birthday,
                enabled);
        this.registroCompleto = registroCompleto;
        this.cantidadEventos = cantidadEventos;
    }
}