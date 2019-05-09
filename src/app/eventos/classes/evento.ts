import { DeseoAsociado } from './deseo-asociado';
import { Banco } from './banco';
import { Usuario } from '../../auth/usuario';
import { Invitado } from './invitado';

export class Evento {

    id?: number;
    nombre?: string;
    descripcion?: string;
    direccion?: string;
    activo?: boolean;
    reportado?: boolean;
    banco?: Banco;
    tipoCuenta?: string;
    numeroCuenta?: string;
    rutCuenta?: string;
    emailCuenta?: string;
    telefono?: string;
    fechaEvento?: Date;
    horaEvento?: Date;
    creacion?: Date;
    edicion?: Date;

    propietario?: Usuario;
    colaboradores?: Array<Usuario>;

    invitados?: Array<Invitado>;

    deseos?: Array<DeseoAsociado>;

}
