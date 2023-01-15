const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'generos',
    {
      id: {
        field: 'ID_GENE',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nombre: {
        field: 'NOMBRE_GENE',
        type: DataTypes.STRING,
        allowNull: false,
      },
      deshabilitado: {
        field: 'DESHABILITADO_GENE',
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    },
    {
      tableName: 'TB_GENEROS',
      timestamps: false,
    }
  );
};