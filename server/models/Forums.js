module.exports = (sequelize, DataTypes) => {

    const Forums = sequelize.define("Forums", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING(5000),
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        }    
    })

    Forums.associate = (models) => {
        Forums.belongsTo(models.Users, { as: 'User',foreignKey: 'user_id' });
        Forums.hasMany(models.ForumComments, {
            onDelete: "cascade",
        });
    }

    return Forums;
}