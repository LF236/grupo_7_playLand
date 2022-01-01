module.exports = (sequelize, DataTypes) => {
    const cols = {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING(50),
            allowNull: true
        }

    };

    const config = {
        tableName: 'Category',
        timestamps: false
    };

    const Category = sequelize.define("Category", cols, config);
    Category.associate = models => {
        Category.belongsToMany(models.Product, {
            as: "categorias",
            through: "Product_Categories",
            foreignKey: "category_id",
            otherKey: "product_id",
            timestamps: false
        })
    }
    return Category;
}