import { EmailValidator } from "@angular/forms";

export class userObject{
    id: number;
    email: string;
    password:string;

    constructor(email: string, pass: string){
        this.email = email;
        this.password = pass;
    }
}