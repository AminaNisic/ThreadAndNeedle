module.exports = (sequelize, DataTypes) => {

    const PostComments = sequelize.define("PostComments", {
        body: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
    });

    PostComments.associate = (models) => {
        PostComments.belongsTo(models.Users, { as: 'User',foreignKey: 'user_id' });
    }

    return PostComments;
}