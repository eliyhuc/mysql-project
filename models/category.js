import Sequelize from 'sequelize';
import database from '../services/database.js';

const Category = database.define("category", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    categoryName: Sequelize.STRING,
    categoryDesc: Sequelize.STRING,
    categoryImage: Sequelize.STRING
});

export default Category;