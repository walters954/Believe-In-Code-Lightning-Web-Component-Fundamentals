import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    
    greeting = 'Everyone';

    changeHandler(event) {
        console.log(event.target.value);
        this.greeting = event.target.value;
    }
}