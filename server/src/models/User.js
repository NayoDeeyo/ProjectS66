module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        brand: DataTypes.STRING,
        model: DataTypes.STRING,
        price: DataTypes.STRING,
        warranty: DataTypes.STRING,
        feature: DataTypes.STRING,
        type: DataTypes.STRING
    })
    return User
}