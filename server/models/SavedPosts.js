module.exports = (sequelize, DataTypes) => {

    const SavedPosts = sequelize.define("SavedPosts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false
        }    
    })

    return SavedPosts;
}