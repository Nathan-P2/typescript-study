import { User } from '@models/User';

export default class UserController {
  getUser() {
    const user = new User();

    return user;
  }
}
