import { Email } from "./email";
export declare class User {
    _firstName: string;
    _lastName: string;
    _email: Email;
    constructor(firstName: string, lastName: string, email: string);
    readonly email: string;
    readonly name: string;
}
