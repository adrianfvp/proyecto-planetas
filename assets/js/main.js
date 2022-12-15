const baseURL = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list'

const getPlanets = async () => {
    const listOfPlanets = new Promise((resolve, reject) => {
        return fetch(baseURL, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1cb4d84422mshd79a6b9e56fe1b2p10cce2jsn9c0aff8fc2c8',
                'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
            } 
        })
        .then(res => res.json())
        .then(json => {
            return resolve(json)
        })
    })
    .then(res => {
        localStorage.setItem('planetas', JSON.stringify(res))
        return res
    })
    .catch(errores => console.log(errores))

    return listOfPlanets
 }

 getPlanets()