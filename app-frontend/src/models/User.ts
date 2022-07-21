export interface IUser {
  id: number;
  name: string;
  email: string;
}

class User implements IUser {
  id: number;

  name: string;

  email: string;

  constructor(obj: IUser) {
    this.id = obj.id;
    this.name = obj.name;
    this.email = obj.email;
  }
}

export default User;
