module.exports = (sequelize, DataTypes) => {
    const cols = {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false
        },

        product_id: {
            type: DataTypes.UUID,
            allowNull: false
        },

        userid:{
            type: DataTypes.UUID,
            allowNull: false
        }
    };

    const config = {
        tableName: 'Product_User',
        timestamps: false
    };

    const ProductUser = sequelize.define("Product_User", cols, config);

    return ProductUser;
}