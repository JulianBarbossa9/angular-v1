import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list-components',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  //Con esto le digo que puede recibir una propiedad llamada characterList, el valor actual es el valor por defecto
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 5000
  }]

  @Output()
  public onDeleteChar: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id?: string):void{
    console.log('Indice: ', id)
    if (!id) return;

    this.onDeleteChar.emit(id)
  }
}
