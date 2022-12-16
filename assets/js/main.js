import getPlanetsAsync from "./getPlanetsAsync.js"

let PLANETAS = []

const getPlanets = async () => {
    const planetasLocalStorage = localStorage.getItem('planetas')

    if (planetasLocalStorage) {
        PLANETAS = JSON.parse(planetasLocalStorage)
    } else {
        const planetasResponse = await getPlanetsAsync()
        
        if (planetasResponse) {
            localStorage.setItem('planetas', JSON.stringify(planetasResponse))
            PLANETAS = planetasResponse
        }
    }
 }

 getPlanets()

 addEventListener('DOMContentLoaded', () => {

    const nombresPlanetas = PLANETAS.map(planeta => {
        return {
            name: planeta.name,
            key: planeta.key
        }
    })
    
    const menuPlanetas = document.querySelector('#planets-menu')
    nombresPlanetas.forEach(planeta => {
        
        const a = document.createElement('a')
        a.setAttribute('id', planeta.key)
        a.classList.add('dropdown-item')
        a.textContent = planeta.name
        menuPlanetas.appendChild(a)

    })

    const menu = document.querySelectorAll('.dropdown-item')
    menu.forEach(elemento => {
        elemento.addEventListener('click', () => {
            const currentID = elemento.getAttribute('id')
            const currentPlaneta = PLANETAS.find(planeta => planeta.key === currentID)
            const imagenPlaneta = document.querySelector('#planet img')
            const { img, imgDescription } = currentPlaneta.imgSrc[0]
            const nombrePlaneta = document.querySelector('#planet-info h2')
            const infoPlaneta = document.querySelector('#planet-info p')
            imagenPlaneta.setAttribute('src', img)
            imagenPlaneta.setAttribute('alt', imgDescription)
            nombrePlaneta.innerHTML = `<h2>${currentPlaneta.name}</h2>`
            infoPlaneta.innerHTML = `<p>${currentPlaneta.description}</P>`
            
        })
    })

 })   

        
        

    

