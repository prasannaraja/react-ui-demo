import { Email } from "./email";
export declare class Credential {
    _email: Email;
    _password: string;
    constructor(email: string, password: string);
    readonly email: string;
    readonly password: string;
}
