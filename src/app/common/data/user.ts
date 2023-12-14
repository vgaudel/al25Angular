export class User {

    static userNextId = 0;

    constructor(
       public  id : number = User.userNextId,
       public  username : string ="",
       public  password : string ="",
      ){
        User.userNextId++;
      }
}

