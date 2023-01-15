const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'roles',
    {
      id: {
        field: 'ID_ROLE',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nombre: {
        field: 'NOMBRE_ROLE',
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      admin: {
        field: 'ADMIN_ROLE',
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      deshabilitado: {
        field: 'DESHABILITADO_ROLE',
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    },
    {
      tableName: 'TB_ROLES',
      timestamps: false,
    }
  );
};