var listContainer = document.getElementById("list")


// PULL
//lats is pull
const latsIDArr = [362 /*Bentover Rows*/, 181 /*chinups*/, 213 /*close grip lat pull downs*/, 105 /*Deadlifts*/, 143 /*low row*/, 330 /*Superman*/, 339 /*shotgun row*/, 204 /*wide grip pulldown*/, 202 /*pendelay rows*/]
let latsRandExercise = latsIDArr[Math.floor(Math.random()*latsIDArr.length)]
console.log(latsRandExercise)
//hams is pull
const hamsIDArr = [116 /*goodmornings*/, 117 /*leg curls*/, 626 /*muscle up*/]
let hamsRandExercise = hamsIDArr[Math.floor(Math.random()*hamsIDArr.length)]
console.log(hamsRandExercise)
//biceps is pull
const bicepsIDArr = [81 /*bicep curls*/, 86 /*hammer curls*/, 291 /*hercules curls*/, 771 /*reverse curl*/, 205 /*single arm preacher curl*/, 305 /*z curls*/]
let bicepsRandExercise = bicepsIDArr[Math.floor(Math.random()*bicepsIDArr.length)]
console.log(bicepsRandExercise)
//abs
const absIDArr = [310 /*trunk rotation*/, 238 /*plank*/, 307 /*bear walk*/, 383 /*hollow hold*/, 631 /*scissors*/, 325 /*side plank*/]
let absRandExercise = absIDArr[Math.floor(Math.random()*absIDArr.length)]
console.log(absRandExercise)
const trapIDArr = [805 /*shoulder shrug*/, 311 /*upright row*/, 394 /*face pull*/, 268 /*bent high pulls*/]
let trapRandExercise = trapIDArr[Math.floor(Math.random()*trapIDArr.length)]
console.log(trapRandExercise)


//FETCH
//fetching tri exercises
const getLats = async lats => {
    try {
        const res = await fetch(`https://wger.de/api/v2/exerciseinfo/${latsRandExercise}/`)
        if (res.status !== 200) throw new Error('Exercise not found')
        const collectData = await res.json()
        console.log(collectData)
        displayLatsExercises(collectData)
    } catch(err) {
        var li = document.createElement('li')
        li.textContent = err.message
        console.log(err.message)
        listContainer.appendChild(li)
        
    }
}
getLats()
//fetching quad exercises
const getQuad = async quad => {
    try {
        const res = await fetch(`https://wger.de/api/v2/exerciseinfo/${quadRandExercise}/`)
        if (res.status !== 200) throw new Error('Exercise not found')
        const collectData = await res.json()
        // console.log(collectData)
        displayQuadExercises(collectData)
    } catch(err) {
        var li = document.createElement('li')
        li.textContent = err.message
        console.log(err.message)
        listContainer.appendChild(li)
        
    }
}
getQuad()
//fetching chest exercises
const getChest = async chest => {
    try {
        const res = await fetch(`https://wger.de/api/v2/exerciseinfo/${chestRandExercise}/`)
        if (res.status !== 200) throw new Error('Exercise not found')
        const collectData = await res.json()
        // console.log(collectData)
        displayChestExercises(collectData)
    } catch(err) {
        var li = document.createElement('li')
        li.textContent = err.message
        console.log(err.message)
        listContainer.appendChild(li)
        
    }
}
getChest()
//fetching serAnt exercises
const getSerAnt = async serAnt => {
    try {
        const res = await fetch(`https://wger.de/api/v2/exerciseinfo/${serAntRandExercise}/`)
        if (res.status !== 200) throw new Error('Exercise not found')
        const collectData = await res.json()
        // console.log(collectData)
        displaySerAntExercises(collectData)
    } catch(err) {
        var li = document.createElement('li')
        li.textContent = err.message
        console.log(err.message)
        listContainer.appendChild(li)
        
    }
}
getSerAnt()
//fetching glutes exercises
const getGlutes = async glutes => {
    try {
        const res = await fetch(`https://wger.de/api/v2/exerciseinfo/${glutesRandExercise}/`)
        if (res.status !== 200) throw new Error('Exercise not found')
        const collectData = await res.json()
        // console.log(collectData)
        displayGlutesExercises(collectData)
    } catch(err) {
        var li = document.createElement('li')
        li.textContent = err.message
        console.log(err.message)
        listContainer.appendChild(li)
        
    }
}
getGlutes()


//DISPLAY
//display tricep exercises
function displayLatsExercises(e) {
    const nameEl = document.getElementById("lats_name")
    nameEl.textContent = e.name
    const descriptionEl = document.getElementById("lats_description")
    descriptionEl.innerHTML = e.description
    const randomNumEl = document.getElementById("lats_random_number")
    const randomNumber = Math.floor(Math.random() * (30 - 4 + 1)) + 4
    randomNumEl.textContent = `${randomNumber}xs`
}
//display quad exercises
function displayQuadExercises(e) {
    const nameEl = document.getElementById("quad_name")
    nameEl.textContent = e.name
    const descriptionEl = document.getElementById("quad_description")
    descriptionEl.innerHTML = e.description
    const randomNumEl = document.getElementById("quad_random_number")
    const randomNumber = Math.floor(Math.random() * (30 - 4 + 1)) + 4
    randomNumEl.textContent = `${randomNumber}xs`
}
//display chest exercises
function displayChestExercises(e) {
    const nameEl = document.getElementById("chest_name")
    nameEl.textContent = e.name
    const descriptionEl = document.getElementById("chest_description")
    descriptionEl.innerHTML = e.description
    const randomNumEl = document.getElementById("chest_random_number")
    const randomNumber = Math.floor(Math.random() * (30 - 4 + 1)) + 4
    randomNumEl.textContent = `${randomNumber}xs`
}
//display serAnt exercises
function displaySerAntExercises(e) {
    const nameEl = document.getElementById("serant_name")
    nameEl.textContent = e.name
    const descriptionEl = document.getElementById("serant_description")
    descriptionEl.innerHTML = e.description
    const randomNumEl = document.getElementById("serant_random_number")
    const randomNumber = Math.floor(Math.random() * (30 - 4 + 1)) + 4
    randomNumEl.textContent = `${randomNumber}xs`
}
//display glutes exercises
function displayGlutesExercises(e) {
    const nameEl = document.getElementById("glutes_name")
    nameEl.textContent = e.name
    const descriptionEl = document.getElementById("glutes_description")
    descriptionEl.innerHTML = e.description
    const randomNumEl = document.getElementById("glutes_random_number")
    const randomNumber = Math.floor(Math.random() * (30 - 4 + 1)) + 4
    randomNumEl.textContent = `${randomNumber}xs`
}