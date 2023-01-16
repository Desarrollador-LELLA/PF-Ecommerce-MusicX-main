const { Router } = require('express');
const { iniciarSesion, registrarme } = require('../controllers/authController');
const { validoRegistrarme } = require('../utils/validacionesAuth');

const authRouter = Router();

authRouter.get('/iniciosesion', (req, res) => {
    try {
        const inicio = iniciarSesion();
        res.status(200).json({ mensaje: inicio });
    } catch (err) {
        res.status(500).json({ mensaje: 'inicio' });
    }
});

authRouter.post('/registrarme', async (req, res) => {
    try {
        const Validacion = validoRegistrarme(req.body);
        if(Validacion.confirmo){
            const registro = await registrarme(req.body);
            res.status(200).json({ mensaje: 'Cuenta Registrada Correctamente', resultado: registro, confirmacion: true });
        } else {
            res.status(500).json({ mensaje: Validacion.errores, resultado: null, confirmacion: false});
        }
    } catch (err) {
        res.status(500).json({ mensaje: err.message, resultado: null, confirmacion: false});
    }
});

module.exports = authRouter;