const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'productoslicencias',
    {
      id: {
        field: 'ID_PRODLICE',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      tableName: 'TB_PRODUCTO_LICENCIA',
      timestamps: false,
    }
  );
};
