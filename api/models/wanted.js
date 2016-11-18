module.exports = function(sequelize, DataTypes){
	var Wanted = sequelize.define("Wanted", {
		name: DataTypes.STRING,
		description: DataTypes.STRING
	});

	return Wanted;
}