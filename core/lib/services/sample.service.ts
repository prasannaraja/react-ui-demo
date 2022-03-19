import { SignInService } from "../data/interfaces/ISignInService";
import { Credential, Email, User } from "../data/models";

// TODO: This is just an illustrative example, this could've be a HTTP request, Database query, etc...
export class SampleService implements SignInService {
  async signInWithCredential(credential: Credential): Promise<User> {
    return Promise.resolve(
      new User("Sample Service", "User", "sampleservice@email.com"),
    );
  }

  async signUpUser(user: User, credential: Credential): Promise<User> {
    return Promise.resolve(user);
  }

  async verifyExistingEmail(email: Email): Promise<boolean> {
    return Promise.resolve(false);
  }
}
