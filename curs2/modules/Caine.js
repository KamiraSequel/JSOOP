import {Animal} from '../models/Animal';
class Caine extends Animal{
    constructor(greutate, nrPicioare, nume){
        super(greutate, nrPicioare, nume);
        this.nume = nume;
    }
    info(){
        console.log(`Numele meu este ${this.nume}`);
        super.comunica('Ham ham');
    }
    comunica(mesaj){
        //super.comunica(mesaj);
        console.log(`Nu musc`);
    }

}

export {Caine};