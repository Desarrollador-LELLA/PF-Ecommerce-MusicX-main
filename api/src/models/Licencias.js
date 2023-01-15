const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "licencias", {
        id: {
            field: "ID_LICE",
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            field: "NOMBRE_LICE",
            type: DataTypes.STRING(40),
            allowNull: false
        },
        description: {
            field: "DESCRIPCION_LICE",
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            field: "PRECIO_LICE",
            type: DataTypes.INTEGER,
            allowNull: false
        },
        completa: {
            field: "COMPLETA_LICE",
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        deshabilitado: {
            field: "DESHABILITADO_LICE",
            type: DataTypes.BOOLEAN
        }
    },
        {
            tableName: "TB_LICENCIAS",
            timestamps: false
        }
    );
};
