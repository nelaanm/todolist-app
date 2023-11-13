import { Sequelize } from "sequelize";

const db = new Sequelize('todolist-db','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;