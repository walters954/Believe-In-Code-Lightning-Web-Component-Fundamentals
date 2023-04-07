import { LightningElement } from 'lwc';
const devFundWeight = 0.23;
const processAutoWeight = 0.30;
const userIntWeight = 0.25;
const testDebugWeight = 0.22;
const passingScore = 68;

export default class PlatformDevCertCalculator extends LightningElement {

    devFundamentalScore = 50;
    processAutomationScore = 50;
    userInterfaceScore = 50;
    testingScore = 50;

    certificationScore = 90;
    numberOfQuestions = 60;

    showResources = false;

    currentHistoryId = 0;

    attemptHistory = [
        {Id: 1, Score:50},
        {Id: 2, Score:68},
        {Id: 3, Score:70},
        {Id: 4, Score:90},
    ];

    calculateScore(){
        let devFundWeightScore = this.devFundamentalScore * devFundWeight;
        let processAutoWeightScore = this.processAutomationScore * processAutoWeight;
        let userIntWeightScore = this.userInterfaceScore * userIntWeight;
        let testDebugWeightScore = this.testingScore * testDebugWeight;
        this.certificationScore = devFundWeightScore + processAutoWeightScore + userIntWeightScore + testDebugWeightScore;

        this.showResourceIfFailed();      
        this.addAttemptHistory(this.certificationScore);  
    }

    handleChange(event){
        console.log(event.target.name, event.target.value);
        const inputName = event.target.name;
        let value = Number(event.target.value);
        if (inputName === 'devFundamentals'){
            this.devFundamentalScore = value;
        } else if (inputName === 'processAuto'){
            this.processAutomationScore = value;
        } else if (inputName === 'userInterface'){
            this.userInterfaceScore = value;
        } else if (inputName === 'testDebugDeploy'){
            this.testingScore = value;
        }         
    }

    showResourceIfFailed(){
        if (this.certificationScore < passingScore){
            this.showResources = true;
        } else {
            this.showResources = false;
        }
        
    }

    addAttemptHistory(Score){
        this.currentHistoryId ++;
        const attempt = 
            {
                Id: this.currentHistoryId, Score
            }
        this.attemptHistory = [...this.attemptHistory, attempt];
    }

    deleteAttemptHandler(event){
        console.log('this is called from parent to handle delete', event.detail);
        let attemptId = event.detail;
        this.attemptHistory = this.attemptHistory.filter(attempt => attempt.Id != attemptId);
        console.log('New attempt history' + this.attemptHistory);
    }

    connectedCallback() {
        this.currentHistoryId = this.attemptHistory.length;
    }
}