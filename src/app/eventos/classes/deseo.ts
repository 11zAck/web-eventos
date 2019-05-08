export class Deseo {

    private _id?: number;
    private _nombre?: string;
    private _descripcion?: string;
    private _activo?: boolean;

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

    get descripcion(): string {
        return this._descripcion;
    }

    set descripcion( descripcion: string ) {
        this._descripcion = descripcion;
    }

    get activo(): boolean {
        return this._activo;
    }

    set activo( activo: boolean ) {
        this._activo = activo;
    }

}
