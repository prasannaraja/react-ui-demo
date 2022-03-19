import { Credential, User } from "../models";
export interface SignInService {
    signInWithCredential: (credential: Credential) => Promise<User>;
}
