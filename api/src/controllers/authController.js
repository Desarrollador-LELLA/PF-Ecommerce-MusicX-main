const bcrypt = require('bcryptjs');
const { Usuarios, Roles } = require('../db.js');

const encryptClave = async (clave) => {
    // const salt = await bcrypt.getSalt(10);
    return await bcrypt.hash(clave, 6);
};

const compareClave = async (clave, receivedClave) => {
    return await bcrypt.compare(clave, receivedClave);
};

const iniciarSesion = () => {

};

const registrarme = async ({ correo, clave, nombre }) => {
    try {
        const usuario = await Usuarios.create({
            correo,
            clave: await encryptClave(clave),
            nombre,
            verificado: false,
            bloqueado: false,
            deshabilitado: false,
            roleId: 1
        });
        console.log('Usuario: ', usuario);
        let rol = await Roles.findAll({ where: { id: 1 } });
        console.log('Rol: ', rol);
        return 'algo';
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = {
    iniciarSesion,
    registrarme
};