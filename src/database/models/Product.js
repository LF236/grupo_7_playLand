module.exports = (sequelize, DataTypes) => {
    const cols = {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        image: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        
        descImgI: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        descImgII: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        descImgIII: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        idCategory: {
            type: DataTypes.UUID,
            allowNull: true
        },

        players: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        rating: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    };

    const config = {
        tableName: 'Products',
        timestamps: false
    };

    const Product = sequelize.define("Product", cols, config);

    return Product;
}