const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        'archivos',
        {
            id: {
                field: 'ID_ARCH',
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            nombre: {
                field: 'NOMBRE_ARCH',
                type: DataTypes.STRING,
                allowNull: false,
            },
            link: {
                field: 'LINK_ARCH',
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'TB_ARCHIVOS',
            timestamps: false,
        }
    );
};