module.exports = (sequelize, DataTypes) => {
    const cols = {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false
        },

        title: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        userId: {
            type: DataTypes.UUID,
            allowNull: true
        },

        review: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        product_id: {
            type: DataTypes.UUID,
            allowNull: true
        },

        rating: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    };

    const config = {
        tableName: 'Reviews',
        timestamps: false
    };

    const Review = sequelize.define("Reviews", cols, config);

    return Review;
}