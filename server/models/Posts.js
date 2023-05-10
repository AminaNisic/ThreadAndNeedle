module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        blogText: {
            type: DataTypes.STRING(5000),
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }    
    })

    Posts.associate = (models) => {
        Posts.belongsTo(models.Users, { as: 'User',foreignKey: 'user_id' });
    }

    return Posts;
}