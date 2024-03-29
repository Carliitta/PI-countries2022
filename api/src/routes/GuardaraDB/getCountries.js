const { Country, Activity } = require('../../db.js');
const axios = require('axios');

async function getApiInfo() {
    const apiUrl = await axios.get('https://restcountries.com/v3/all')
    const apiInfo = await apiUrl.data.map((c) => {
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
    })
    return apiInfo;
};
/* const guardar =async () => {
    const apiInfo =await getApiInfo()
    if(!Country.length){
        apiInfo.map(async(i) => {
            await Country.create({
                    name: i.name,
                    id: i.id,
                    continent: i.continent,
                    flag: i.flag,
                    capital: i.capital,
                    subregion: i.subregion,
                    area: i.area,
                    population: i.population
            
            }).catch((err) => { console.log(err) });
        })
    }else{
        return apiInfo
    }
} */


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
    const get = await Activity.findAll()
    return get;
}

module.exports = { getDbInfo, getActivities };






