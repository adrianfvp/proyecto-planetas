const baseURL = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list'

const getPlanetsAsync = async () => {
    const response = await fetch(baseURL, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':'1cb4d84422mshd79a6b9e56fe1b2p10cce2jsn9c0aff8fc2c8',
            'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
        } 
    })
    .then(res => res.json())
    .then(json => json)
    .catch((err) => console.log(err, 'error getPlanetAsync'))
    .finally(() => console.log('es una función'))

    return response
}

export default getPlanetsAsync