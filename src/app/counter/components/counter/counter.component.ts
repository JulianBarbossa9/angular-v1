import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{counter}}</h3>
        <button (click)="increaseCounter()">+1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="decreaseCounter()">-1</button>
    `
})

export class CounterComponent  {
    public counter: number = 10

    increaseCounter( value: number = 1) : void{
        this.counter += value
    }

    decreaseCounter( value: number = 1): void {
        this.counter -= value
    }

    resetCounter():void {
        this.counter = 10
    }

}