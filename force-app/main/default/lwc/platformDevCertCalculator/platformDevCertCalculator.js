import { LightningElement } from 'lwc';
const devFundWeight = 0.23;
const processAutoWeight = 0.30;
const userIntWeight = 0.25;
const testDebugWeight = 0.22;
const passingScore = 68;

export default class PlatformDevCertCalculator extends LightningElement {

    certificationScore = 50;
    devFundamentalScore = 50;
    processAutomationScore = 50;
    userInterfaceScore = 50;
    testingScore = 50;
    numberOfQuestions = 60;    

    showResources = false;

    attemptHistory = [];
    

    calculateScore(){
        let devFundWeightScore = this.devFundamentalScore * devFundWeight;
        let processAutoWeightScore = this.processAutomationScore * processAutoWeight;
        let userIntWeightScore = this.userInterfaceScore * userIntWeight;
        let testDebugWeightScore = this.testingScore * testDebugWeight;
        this.certificationScore = Math.floor(devFundWeightScore + processAutoWeightScore + userIntWeightScore + testDebugWeightScore);
        this.showResourcesIfFailing();
        this.addAttempt(this.certificationScore);
    }

    handleChange(event){
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

    showResourcesIfFailing(){
        if (this.certificationScore < passingScore){
            this.showResources = true;
        } else {
            this.showResources = false;
        }
    }

    addAttempt(score){
        let attempt = {
            score,
            Id: Math.floor(Math.random() * 1000),
            Name: 'Attempt ' + (this.attemptHistory.length + 1) 
        }
        this.attemptHistory = [...this.attemptHistory, attempt];
    }

    get showAttemptHistory(){
        return this.attemptHistory.length > 0;
    }

    deleteHandler(event){
        this.attemptHistory = this.attemptHistory.filter(attempt => attempt.Id != event.detail);
    }
}