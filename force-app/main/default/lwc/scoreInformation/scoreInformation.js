import { LightningElement, api } from 'lwc';

export default class ScoreInformation extends LightningElement {

    @api score;
    @api numberOfQuestions;
    @api attemptId;

    get numberOfQuestionsCorrect(){
        return Math.floor(this.score / 100 * this.numberOfQuestions);
    }

    get numberOfQuestionsIncorrect(){
        return Math.floor(this.numberOfQuestions - this.numberOfQuestionsCorrect);
    }

    handleDeleteAttempt(event){
        const deleteEvent = new CustomEvent('deleteattempt', {
            detail: event.target.dataset.id
        });
        this.dispatchEvent(deleteEvent);
    }

}