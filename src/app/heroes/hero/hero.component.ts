import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman'
  public age: number = 40

  //get es una forma de crear un metodo a travez de una propiedad
  get capitalizedName():string {
    return this.name.toUpperCase()
  }

  //Método
  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  //Metodos
  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): number {
    return this.age = Math.floor(Math.random() * (90 - 18 + 1 ) + 18)
  }

  resetData():void {
    this.name = 'batman'
    this.age = 33
  }

}
