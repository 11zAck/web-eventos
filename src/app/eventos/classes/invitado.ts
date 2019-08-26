import { Usuario } from '../../auth/usuario';
export class Invitado extends Usuario {

    email?: string;

    constructor(
        id?: number,
        username?: string,
        password?: string,
        dni?: string,
        firstname?: string,
        lastname?: string,
        birthday?: Date,
        enabled?: boolean,
        email?: string
    ) {
        super(id,
            username,
            password,
            dni,
            firstname,
            lastname,
            birthday,
            enabled);
        this.email = email || '';
    }

}
