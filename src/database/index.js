import Sequelize from 'sequelize';
import confiDatabase from '../config/database.js';  
import User from '../app/models/User.js';  

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(confiDatabase);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
