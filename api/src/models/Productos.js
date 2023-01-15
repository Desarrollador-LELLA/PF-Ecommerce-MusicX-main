const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        'productos',
        {
            id: {
                field: 'ID_PROD',
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            nombre: {
                field: 'NOMBRE_PROD',
                type: DataTypes.STRING(40),
                allowNull: false,
            },
            imagen: {
                field: 'IMAGEN_PROD',
                type: DataTypes.STRING,
                allowNull: false,
            },
            descripcion: {
                field: 'DESCRIPCION_PROD',
                type: DataTypes.STRING,
                allowNull: false,
            },
            key: {
                field: 'KEY_PROD',
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            tempo: {
                field: 'TEMPO_PROD',
                type: DataTypes.DECIMAL,
                allowNull: false,
            },
            deshabilitado: {
                field: 'DESHABILITADO_PROD',
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },

        },
        {
            tableName: 'TB_PRODUCTOS',
            timestamps: false,
        }
    );
};

// const { DataTypes } = require('sequelize');
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.
// module.exports = (sequelize) => {
//   // defino el modelo
//   sequelize.define(
//     'productos',
//     {
//       id_prod: {
//         field: 'ID_PROD',
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false,
//       },
//       id_gene:{
//         field:"ID_GENE",
//         type:DataTypes.INTEGER,
//         allowNull:false,
//       },
//       nombre:{
//         field:"NOMBRE_PROD",
//         type:DataTypes.STRING,
//         allowNull:false,
//       },
//       imagen:{
//         field:"IMAGEN_PROD",
//         type:DataTypes.STRING,
//         allowNull:false,
//       },
//       descripcion:{
//         field:"DESCRIPTION_PROD",
//         type:DataTypes.STRING,
//         allowNull:false,
//       },
//       key:{
//         field:"KEY_PROD",
//         type:DataTypes.INTEGER,
//         allowNull:false,
//       },
//       tiempo:{
//         field:"TIEMPO_PROD",
//         type:DataTypes.STRING,
//         allowNull:false,
//       },
//       deshabilitado:{
//         field:"DESHABILITADO_PROD",
//         type:DataTypes.BOOLEAN,
//         allowNull:false,
//       },
//     },
//     {
//         tableName: 'TB_PRODUCTOS',
//         timestamps: false,
//     }
//   );
// };