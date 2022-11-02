const { Router } = require('express')
const router = Router();
const { Activity, Country } = require('../db.js');
const { getActivities } = require('./GuardaraDB/getCountries')

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, idCountry,  } = req.body
    const createActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
    })
    if(idCountry){
        createActivity.addCountries(idCountry)
    }
    res.status(200).send(createActivity)

})

router.get('/', async (req, res) => {
    const activities = await getActivities()
    res.status(200).send(activities)
})

module.exports = router;