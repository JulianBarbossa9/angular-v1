import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesNames: string[] = [
    'spiderman',
    'batman',
    'ironman',
    'hulk',
    'thor'
  ]

  public deletedHero?: string

  removeLastHero():void {
    this.deletedHero = this.heroesNames.pop()
  }
}
