import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    
    showChild = false;

    handleClick(event) {
        this.showChild = !this.showChild;
    }
}