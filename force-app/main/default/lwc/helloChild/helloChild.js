import { LightningElement } from 'lwc';

export default class HelloChild extends LightningElement {
    val = 50;


    connectedCallback() {
        console.log('connectedCallback in child component...' + this.val);
        this.val = 100;
    }
}