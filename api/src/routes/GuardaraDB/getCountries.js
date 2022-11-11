const { Country, Activity } = require('../../db.js');
const axios = require('axios');

async function getApiInfo() {
    try {
        const dataBase= await Country.findAll()
        if(!dataBase.length){
            const apiInfo = await axios.get('https://restcountries.com/v3/all')
        //bullCreate permite pasar un arreglo de objetos para que se almacenen en db
            await Country.bulkCreate(apiInfo.data.map((c) => {
                return {
                    id: c.cca3,
                    name: c.name.common,
                    flag: c.flags[0],
                    continent: c.continents[0],
                    capital: c.capital,
                    subregion: c.subregion,
                    area: c.area,
                    population: c.population
                }
            }))
        }
        
    } catch (error) {
        console.log(error.message)
    }

}

const getDbInfo = async () => {
    await getApiInfo()
    const aux = await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: {
                attributes: [],
            }
        }
    })
    return aux
}

const getActivities = async () => {
    const activities = await Activity.findAll()
    return activities;
}

module.exports = { getDbInfo, getActivities };






