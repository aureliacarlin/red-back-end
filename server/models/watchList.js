module.exports = function (sequelize, DataTypes) {
    const listInfo = sequelize.define('watchList', {
        movieImage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isWatched: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })
    return listInfo
}