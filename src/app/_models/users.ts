import { User } from "./user";

export class Users {
    users: User[] = [];

    constructor(data:User){
      this.users.push(data);
    }
}

