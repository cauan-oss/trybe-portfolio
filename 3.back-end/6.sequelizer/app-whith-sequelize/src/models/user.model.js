const userModel = (sequelize, dataTypes) =>{
  const user = sequelize.define('User', {
   fullName: DataTypes.STRING,
   email: DataTypes.STRING,
  });
  (async () => {
    await sequelize.sync({ force: true });
})();
  return user
};

module.exports = userModel;