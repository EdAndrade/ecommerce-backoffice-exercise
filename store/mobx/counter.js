import { makeObservable, observable, computed, action} from "mobx";

export class Counter {

    count = 0;

    constructor(){
        makeObservable(this,{
            count: observable,
            addCounter: action,
            substractCounter: action
        })
    }

    addCounter(){
        this.count++;
    }

    substractCounter(){
        this.count--;
    }
}

export const CounterStore = new Counter()