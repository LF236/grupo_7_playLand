module.exports = (sequelize, DataTypes) => {
    const cols = {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        last_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        
        image: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        role: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    };

    const config = {
        tableName: 'User',
        timestamps: false
    };

    const User = sequelize.define("User", cols, config);

    return User;
}