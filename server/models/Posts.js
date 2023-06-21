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
    });

    Posts.associate = (models) => {
        Posts.belongsTo(models.Users, { as: 'User', foreignKey: 'user_id' });
        Posts.hasMany(models.PostComments, {
            onDelete: "cascade",
        });
    };

    Posts.beforeCreate(async (post) => {
        if (post.username) return;

        const user = await sequelize.models.Users.findByPk(post.UserId);
        if (user) {
            post.username = user.username;
        }
    });

    return Posts;
};
