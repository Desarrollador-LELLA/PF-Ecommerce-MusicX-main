const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        'detallescarros',
        {
            id: {
                field: 'ID_DETACARR',
                type: DataTypes.BIGINT,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            precio: {
                field: 'PRECIO_DETACARR',
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'TB_DETALLE_CARRO',
            timestamps: false,
        },

    );
}; 