module.exports = (sequelize, DataTypes) => {
    const cols = {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false
        },

        product_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Product',
                key: 'id'
            }
        },

        category_id:{
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Category', 
                key: 'id'
            }
        }
    };

    const config = {
        tableName: 'Product_categories',
        timestamps: false
    };

    const Product_Categories = sequelize.define("Product_Categories", cols, config);

    return Product_Categories;
}