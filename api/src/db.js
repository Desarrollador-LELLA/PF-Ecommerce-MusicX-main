require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
//postgresql://${{ PGUSER }}:${{ PGPASSWORD }}@${{ PGHOST }}:${{ PGPORT }}/${{ PGDATABASE }}
//postgres
const sequelize = new Sequelize(
  `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Archivos, Carros, Detallescarros, Generos, Licencias, Productos, Productoslicencias, Roles, Usuarios } = sequelize.models;

Roles.hasMany(Usuarios, { foreignKey: { name: 'roleId' } });
Usuarios.belongsTo(Roles);

Usuarios.hasMany(Carros, { foreignKey: { name: 'usuarioId' } });
Carros.belongsTo(Usuarios);

Carros.belongsToMany(Productoslicencias, { through: Detallescarros });
Productoslicencias.belongsToMany(Carros, { through: Detallescarros });

Generos.hasMany(Productos, { foreignKey: { name: 'generoId' } });
Productos.belongsTo(Generos);

Productos.belongsToMany(Licencias, { through: Productoslicencias });
Licencias.belongsToMany(Productos, { through: Productoslicencias });

Productos.hasMany(Archivos, { foreignKey: { name: 'productoId' } });
Archivos.belongsTo(Productos);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};