module.exports = (sequelize, DataTypes) => {
    const cols = {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false
        },

        userId: {
            type: DataTypes.UUID,
            allowNull: false
        },

        total_price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        tracking_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        shipping_address: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        
        descImgI: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        order_date: {
            type: DataTypes.DATE,
            allowNull: false
        },

        order_status: {
            type: DataTypes.ENUM('PENDIENTE','ENVIADO','ENTREGADO','CANCELADO'),
            allowNull: true
        }

    };

    const config = {
        tableName: 'Purchase',
        timestamps: false
    };

    const Purchase = sequelize.define("Purchase", cols, config);

    return Purchase;
}