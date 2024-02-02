import Sequelize from 'sequelize';
import database from '../services/database.js';

const Account = database.define("account", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isApproved: Sequelize.BOOLEAN,
    isLocked: Sequelize.BOOLEAN
});

export default Account;