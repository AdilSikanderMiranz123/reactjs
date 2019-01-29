import {Person} from './Person.js';

class Teacher extends Person {

    constructor(name,degree){
        super();
        this.degree=degree;

    }

    talk(){

        console.log('talked called');

    }
}

const teacher = new Teacher('adil');

teacher.
console.log();
