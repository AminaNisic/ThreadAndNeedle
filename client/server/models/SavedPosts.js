module.exports = (sequelize, DataTypes) => {

    const SavedPosts = sequelize.define("SavedPosts", {
        
    })

    SavedPosts.associate = (models) => {
        SavedPosts.belongsTo(models.Users, { as: 'User',foreignKey: 'user_id' });
        SavedPosts.belongsTo(models.Posts, { as: 'Post',foreignKey: 'post_id' });
    }

    return SavedPosts;
}