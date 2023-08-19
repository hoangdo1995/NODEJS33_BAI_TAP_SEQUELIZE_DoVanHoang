import { Sequelize } from "sequelize";
import initModels from "../Models/init-models.js";
export const development = {
    username: 'root',
    password: '1234',
    database: 'db_food',
    host: 'localhost',
    dialect: 'mysql'
}

const sequelize = new Sequelize('db_food', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
  });

export const models = initModels(sequelize);

(async () => {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
})(); 