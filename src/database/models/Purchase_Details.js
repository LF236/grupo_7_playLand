module.exports = (sequelize, DataTypes) => {
    const cols = {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false
        },

        purchase_id: {
            type: DataTypes.UUID,
            allowNull: false
        },

        product_id: {
            type: DataTypes.UUID,
            allowNull: false
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    const config = {
        tableName: 'Purchase_Details',
        timestamps: false
    };

    const PurchaseDet = sequelize.define("Purchase_Details", cols, config);

    return PurchaseDet;
}