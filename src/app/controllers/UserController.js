import { v4 } from 'uuid';

import User from '../app/models/User.js';

class UserController {
  async store(request, response) {
    const { name, email, password_hash, admin } = request.body;

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
