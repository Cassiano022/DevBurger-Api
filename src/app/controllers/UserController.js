import { v4 } from 'uuid';

import User from '../app/models/User.js';

class UserController {
  async store(request, response) {
    const {name, email, passaword_hash, admin } = request.boby;

    const user = await User.create({
      id: v4(),
      name,
      email,
      password_hash,
    });

    return response.status(201).json(user);
  }
}

export default new UserController;
