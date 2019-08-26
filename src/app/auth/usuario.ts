export class Usuario {
  id?: number;
  username?: string;
  password?: string;
  dni?: string;
  firstname?: string;
  lastname?: string;
  birthday?: Date;
  enabled?: boolean;

  constructor(
    id?: number,
    username?: string,
    password?: string,
    dni?: string,
    firstname?: string,
    lastname?: string,
    birthday?: Date,
    enabled?: boolean
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.dni = dni;
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
    this.enabled = enabled;
  }
  
}
