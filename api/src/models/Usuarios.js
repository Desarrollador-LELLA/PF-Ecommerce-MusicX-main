const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'usuarios',
    {
      id: {
        field: 'ID_USER',
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      correo: {
        field: "CORREO_USER",
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      clave: {
        field: "CLAVE_USER",
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      nombre: {
        field: "NOMBRE_USER",
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      apellido: {
        field: "APELLIDO_USER",
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      telefono: {
        field: "TELEFONO_USER",
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      bloqueado: {
        field: "BLOQUEADO_USER",
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      deshabilitado: {
        field: "DESHABILITADO_USER",
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: 'TB_USUARIOS',
      timestamps: false,
    }
  );
};