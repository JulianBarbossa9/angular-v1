import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9000,
    },
    {
      id: uuid(),
      name: 'Krilin',
      power: 500,
    },
    {
      id: uuid(),
      name: 'Pikoro',
      power: 7000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500,
    },
  ];

  onNewCharacter(character: Character): void {
    // console.log('main page')
    // console.log(character)
    const newCharacter : Character = { id: uuid(), ...character}

    this.characters.push(newCharacter);
  }

  // onDeleteCharById(id: number): void {
  onDeleteCharById(id: string): void {
    // this.characters.splice(id, 1);
    this.characters = this.characters.filter( character => character.id !== id)
  }
}
