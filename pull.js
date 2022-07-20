var listContainer = document.getElementById("list")


//GET RANDOM EXERCISES
//PULL
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
//fetching hams exercises
const getHams = async hams => {
    try {
        const res = await fetch(`https://wger.de/api/v2/exerciseinfo/${hamsRandExercise}/`)
        if (res.status !== 200) throw new Error('Exercise not found')
        const collectData = await res.json()
        // console.log(collectData)
        displayHamsExercises(collectData)
    } catch(err) {
        var li = document.createElement('li')
        li.textContent = err.message
        console.log(err.message)
        listContainer.appendChild(li)
        
    }
}
getHams()
//fetching biceps exercises
const getBiceps = async biceps => {
    try {
        const res = await fetch(`https://wger.de/api/v2/exerciseinfo/${bicepsRandExercise}/`)
        if (res.status !== 200) throw new Error('Exercise not found')
        const collectData = await res.json()
        // console.log(collectData)
        displayBicepsExercises(collectData)
    } catch(err) {
        var li = document.createElement('li')
        li.textContent = err.message
        console.log(err.message)
        listContainer.appendChild(li)
        
    }
}
getBiceps()
//fetching abs exercises
const getAbs = async abs => {
    try {
        const res = await fetch(`https://wger.de/api/v2/exerciseinfo/${absRandExercise}/`)
        if (res.status !== 200) throw new Error('Exercise not found')
        const collectData = await res.json()
        // console.log(collectData)
        displayAbsExercises(collectData)
    } catch(err) {
        var li = document.createElement('li')
        li.textContent = err.message
        console.log(err.message)
        listContainer.appendChild(li)
        
    }
}
getAbs()
//fetching glutes exercises
const getTrap = async trap => {
    try {
        const res = await fetch(`https://wger.de/api/v2/exerciseinfo/${trapRandExercise}/`)
        if (res.status !== 200) throw new Error('Exercise not found')
        const collectData = await res.json()
        // console.log(collectData)
        displayTrapExercises(collectData)
    } catch(err) {
        var li = document.createElement('li')
        li.textContent = err.message
        console.log(err.message)
        listContainer.appendChild(li)
        
    }
}
getTrap()


//DISPLAY
//display lats exercises
function displayLatsExercises(e) {
    const nameEl = document.getElementById("lats_name")
    nameEl.textContent = e.name
    const descriptionEl = document.getElementById("lats_description")
    descriptionEl.innerHTML = e.description
    const randomNumEl = document.getElementById("lats_random_number")
    const randomNumber = Math.floor(Math.random() * (30 - 4 + 1)) + 4
    randomNumEl.textContent = `${randomNumber}xs`
}
//display hams exercises
function displayHamsExercises(e) {
    const nameEl = document.getElementById("hams_name")
    nameEl.textContent = e.name
    const descriptionEl = document.getElementById("hams_description")
    descriptionEl.innerHTML = e.description
    const randomNumEl = document.getElementById("hams_random_number")
    const randomNumber = Math.floor(Math.random() * (30 - 4 + 1)) + 4
    randomNumEl.textContent = `${randomNumber}xs`
}
//display biceps exercises
function displayBicepsExercises(e) {
    const nameEl = document.getElementById("biceps_name")
    nameEl.textContent = e.name
    const descriptionEl = document.getElementById("biceps_description")
    descriptionEl.innerHTML = e.description
    const randomNumEl = document.getElementById("biceps_random_number")
    const randomNumber = Math.floor(Math.random() * (30 - 4 + 1)) + 4
    randomNumEl.textContent = `${randomNumber}xs`
}
//display abs exercises
function displayAbsExercises(e) {
    const nameEl = document.getElementById("abs_name")
    nameEl.textContent = e.name
    const descriptionEl = document.getElementById("abs_description")
    descriptionEl.innerHTML = e.description
    const randomNumEl = document.getElementById("abs_random_number")
    const randomNumber = Math.floor(Math.random() * (30 - 4 + 1)) + 4
    randomNumEl.textContent = `${randomNumber}xs`
}
//display trap exercises
function displayTrapExercises(e) {
    const nameEl = document.getElementById("trap_name")
    nameEl.textContent = e.name
    const descriptionEl = document.getElementById("trap_description")
    descriptionEl.innerHTML = e.description
    const randomNumEl = document.getElementById("trap_random_number")
    const randomNumber = Math.floor(Math.random() * (30 - 4 + 1)) + 4
    randomNumEl.textContent = `${randomNumber}xs`
}