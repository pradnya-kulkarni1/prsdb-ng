export class UserLogin{
    username: string;
    password: string;

    constructor(
        username: string = '',
        password = ''
    ){
        this.username = username;
        this.password = password;
    }
}