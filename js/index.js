import dogsData from './data.js'
import Dogs from './Dog.js'

let isWaiting = false
let currentDogIndex = 0
let currentDog = new Dogs(dogsData[currentDogIndex])
   
function nope() {
    if(!isWaiting) {
        isWaiting = true
        currentDog.hasBeenSwiped = true
        currentDog.hasBeenLiked = false
        render()
        setTimeout(() => {
            getNewProspect()
            isWaiting = false
            render()
        }, 1000)     
    }
}

function like() {
    if(!isWaiting) {
        isWaiting = true
        currentDog.hasBeenSwiped = true
        currentDog.hasBeenLiked = true 
        render()
        setTimeout(() => {
            getNewProspect() 
            isWaiting = false
            render()
        }, 1000)    
    }   
}

function getNewProspect() {
    currentDogIndex++
    if(currentDogIndex === 3) {
        currentDogIndex = 0 
    }
    currentDog = new Dogs(dogsData[currentDogIndex])
} 

function render() {
    document.getElementById('dog-profile').innerHTML = currentDog.getDogHtml()
}

document.getElementById('nope-btn').addEventListener('click', nope)
document.getElementById('like-btn').addEventListener('click', like)

render()