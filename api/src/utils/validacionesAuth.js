const validoRegistrarme = ({ correo, clave, nombre }) => {
    const errores = {};
    let confirmo = true;
    if (correo.toString().trim().length === 0) {
        errores.correo = 'El Correo esta Vacio';
        confirmo = false;
    } else if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(correo)) {
        errores.correo = 'El Correo Electronico No tiene un formato Valido';
        confirmo = false;
    }

    if (clave.toString().trim().length === 0) {
        errores.clave = 'La Clave esta Vacia';
        confirmo = false;
    } else if (clave.length < 6 || clave.length > 40) {
        errores.clave = 'La Clave tiene que tener entre 6 a 40 Caracteres';
        confirmo = false;
    }

    if (nombre.toString().trim().length === 0) {
        errores.nombre = 'El Nombre esta Vacio';
        confirmo = false;
    }

    return { errores, confirmo };
};

module.exports = {
    validoRegistrarme
};