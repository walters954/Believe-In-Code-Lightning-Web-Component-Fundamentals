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

    showResources = false;
    showGoodJob = false;

    calculateScore(){
        let devFundWeightScore = this.devFundamentalScore * devFundWeight;
        let processAutoWeightScore = this.processAutomationScore * processAutoWeight;
        let userIntWeightScore = this.userInterfaceScore * userIntWeight;
        let testDebugWeightScore = this.testingScore * testDebugWeight;
        this.certificationScore = devFundWeightScore + processAutoWeightScore + userIntWeightScore + testDebugWeightScore;

        this.showResourceIfFailed();        
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
        this.showGoodJob = !this.showResources;
    }
}