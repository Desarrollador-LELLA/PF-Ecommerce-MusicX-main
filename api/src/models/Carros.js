const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        'carros',
        {
            id: {
                field: 'ID_CARR',
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            fecha: {
                field: 'FECHA_CARR',
                type: DataTypes.DATE,
                allowNull: false,
            },
            estado: {
                field: 'ESTADO_PAGO_CARR',
                type: DataTypes.BOOLEAN,
                allowNull: false,
            }
        },
        {
            tableName: 'TB_CARROS',
            timestamps: false,
        },

    );
};