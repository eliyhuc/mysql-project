import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    "gadgetdb", //Database name
    "root", //Database username
    "root", //Databse password
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

export default sequelize;