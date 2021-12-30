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

        category_id:{
            type: DataTypes.UUID,
            allowNull: false
        }
    };

    const config = {
        tableName: 'Product_categories',
        timestamps: false
    };

    const ProductCat = sequelize.define("Product_Categories", cols, config);

    return ProductCat;
}