export class Banco {

    private _id: number;
    private _nombre: string;
    private _activo: boolean;

    public constructor( public new_id: number, public new_nombre: string, public new_activo: boolean ){
        this._id = new_id;
        this._nombre = new_nombre;
        this._activo = new_activo;
    }

    get id(): number {
        return this._id;
    }

    set id( id: number ) {
        this._id = id;
    }

    get nombre(): string {
         return this._nombre;
    }

    set nombre( nombre: string ) {
        this._nombre = nombre;
    }

    get activo(): boolean {
        return this._activo;
    }

    set activo( activo: boolean ) {
        this._activo = activo;
    }
    
}
