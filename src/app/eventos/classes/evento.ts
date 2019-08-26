import { Banco } from './banco';
import { Invitado } from './invitado';
import { Deseo } from './deseo';
import { Organizador } from './organizador';

export class Evento {

    id?: number;
    titulo?: string;
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
    creacion?: Date;
    edicion?: Date;

    propietario?: Organizador;

    invitados?: Array<Invitado>;

    deseos?: Array<Deseo>;

    listDeseosToSelect(): any {
        console.log('largo: ' + this.deseos.length );
        if ( this.deseos.length > 0 ) {
            const listado = [];
            this.deseos.forEach( (v, i) => {
                listado.push({ id: v.id, itemName: v.nombre });
            });
            console.log('listado: ', listado );
            return listado;
        }
        return null;
    }
}
