import { Usuario } from '../../auth/usuario';
import { Invitado } from './invitado';
import { Deseo } from './deseo';

export class Evento {

    id?: number;
    nombre?: string;
    descripcion?: string;
    activo?: boolean;
    reportado?: boolean;
    tipoCuenta?: string;
    numeroCuenta?: string;
    rutCuenta?: string;
    emailCuenta?: string;
    fechaEvento?: Date;
    horaEvento?: Date;
    creacion?: Date;
    edicion?: Date;

    propietario?: Usuario;
    colaboradores?: Array<Usuario>;

    invitados?: Array<Invitado>;

    deseos?: Array<Deseo>;

}
