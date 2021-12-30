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

    const Categories = sequelize.define("Category", cols, config);

    return Categories;
}