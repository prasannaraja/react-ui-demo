import { SignInService } from "../interfaces/ISignInService";
import { Credential, Email, User } from "../models";
export declare class SampleService implements SignInService {
    signInWithCredential(credential: Credential): Promise<User>;
    signUpUser(user: User, credential: Credential): Promise<User>;
    verifyExistingEmail(email: Email): Promise<boolean>;
}
