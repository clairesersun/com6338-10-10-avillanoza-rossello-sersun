var listContainer = document.getElementById("list")


// PULL
//GET RANDOM EXERCISES
//random tricep exercise
const tricepIDArr = [88 /*Bench Press Narrow Grip*/, 82 /*Dips*/, 85 /*French Press*/, 302 /*Side to Side Push Ups*/, 89 /*Tricep Extensions w Cable*/]
let tricepRandExercise = tricepIDArr[Math.floor(Math.random()*tricepIDArr.length)]
// console.log(tricepRandExercise)
//random quad exercise
const quadIDArr = [570 /* Sumo Squats*/, 111 /*Squats */, 185 /*Squat Jumps */, 788 /*Leg Press */, 177 /*Leg Extension */, 810 /*Jumping Jacks */, 113 /*Dumbell Lunges */]
let quadRandExercise = quadIDArr[Math.floor(Math.random()*quadIDArr.length)]
// console.log(quadRandExercise)
//random chest exercise
const chestIDArr = [192 /* Bench Press*/, 790 /* Push Up */, 338 /*Isometric Wipers */, 548 /*Wall Slides */]
let chestRandExercise = chestIDArr[Math.floor(Math.random()*chestIDArr.length)]
// console.log(chestRandExercise)
//seratus anterior
const serAntIDArr = [318 /*Turkish-Get-Up*/, 307 /*Bear Walk*/]
let serAntRandExercise = serAntIDArr[Math.floor(Math.random()*serAntIDArr.length)]
// console.log(serAntRandExercise)
//glutes
const glutesIDArr = [326 /*Full Sit outs*/, 408 /*Glute Bridge*/, 854 /*Hip Thrusts*/, 160 /*Pistol Squats*/]
let glutesRandExercise = glutesIDArr[Math.floor(Math.random()*glutesIDArr.length)]
// console.log(glutesRandExercise)


//FETCH
//fetching tri exercises
const getTri = async tri => {
    try {
        const res = await fetch(`https://wger.de/api/v2/exerciseinfo/${tricepRandExercise}/`)
        if (res.status !== 200) throw new Error('Exercise not found')
        const collectData = await res.json()
        console.log(collectData)
        displayTriExercises(collectData)
    } catch(err) {
        var li = document.createElement('li')
        li.textContent = err.message
        console.log(err.message)
        listContainer.appendChild(li)
        
    }
}
getTri()
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
function displayTriExercises(e) {
    const nameEl = document.getElementById("tricep_name")
    nameEl.textContent = e.name
    const descriptionEl = document.getElementById("tricep_description")
    descriptionEl.innerHTML = e.description
    const randomNumEl = document.getElementById("tricep_random_number")
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