import dogsData from './data.js'

class Dogs {
    constructor(data) {
        Object.assign(this, data)
    }
    
    getStampHtml() {
        return (!this.hasBeenLiked && this.hasBeenSwiped) ? 
        `<img class="badge" src="images/badge-nope.png">` :
        this.hasBeenLiked ?
        `<img class="badge" src="images/badge-like.png">` :
        ""
        
        // if(!this.hasBeenLiked && this.hasBeenSwiped) {
        //     return `<img class="badge" src="images/badge-nope.png">`
        // } else if(this.hasBeenLiked) {
        //     return `<img class="badge" src="images/badge-like.png">`
        // } else {
        //     return ""
        // }
    }

    getDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        this.badge = this.getStampHtml()
        return `
                ${this.badge}
                <img class="dog-profile__img" src="${avatar}">
                <div class="dog-profile__info">
                    <h3 class="dog-profile__info-title">${name}, ${age}</h3>
                    <p class="dog-profile__info-bio">${bio}</p>
                </div>
        `
    }
}

export default Dogs