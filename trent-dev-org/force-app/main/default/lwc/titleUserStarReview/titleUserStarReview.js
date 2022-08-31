import { LightningElement, api } from 'lwc';

const FULL_STAR = 240;
const HALF_STAR = 120;

export default class TitleUserStarReview extends LightningElement {


    @api reviewRating;
    stars = [];


    getNumRoundedToHalfDecimal(num) {

        return Math.round(num*2)/2;
    }

    getFloorNum(num) {

        return Math.floor(num);
    }

    populateStars(num, halfNeeded) {
        for(let i=0; i<num; i++) {
            let star = {};
            star["id"] = i;
            star["width"] = FULL_STAR;
            this.stars.push(star);
        }
        if(halfNeeded) {
            let star = {};
            star["id"] = num++;
            star["width"] = HALF_STAR;
            this.stars.push(star);    
        }
    }

    getStars(num) {
        let needHalfStar = false;
        let roundedNum = this.getNumRoundedToHalfDecimal(num);
        console.log('OG Num ' + num + ' rounded num ' + roundedNum);
        if(roundedNum % 1 !== 0) {
            needHalfStar = true;
            num = this.getFloorNum(num);
        }
        this.populateStars(num, needHalfStar);
    }

    //called on lwc load
    connectedCallback() {
        if (this.reviewRating) {
            this.getStars(this.reviewRating);
        }
    }

}