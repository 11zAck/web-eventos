import { Evento } from './evento';

export class TipoEvento {

    id?: number;
    descripcion?: string;
    activo?: boolean;
    eventos?: Array<Evento>;

}
