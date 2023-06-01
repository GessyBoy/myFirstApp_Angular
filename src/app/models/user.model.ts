export class User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;

  constructor() {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.password = '';
  }

  toString(): string {
    return `User: { firstname: ${this.firstname}, lastname: ${this.lastname}, email: ${this.email}, password: ${this.password} }`;
  }
}
