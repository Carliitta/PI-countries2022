const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require('./Country');
const activityRouter = require('./Activity');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countryRouter);
router.use('/activities', activityRouter);


module.exports = router;
