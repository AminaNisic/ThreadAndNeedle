module.exports = (sequelize, DataTypes) => {

    const ForumComments = sequelize.define("ForumComments", {
        body: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
    });

    ForumComments.associate = (models) => {
        ForumComments.belongsTo(models.Users, { as: 'User',foreignKey: 'user_id' });
    }

    return ForumComments;
}