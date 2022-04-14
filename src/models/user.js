import Sequelize from "sequelize";
import sequelize from "../config/database";

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    username: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
    { timestamps: false }
);

export default User;