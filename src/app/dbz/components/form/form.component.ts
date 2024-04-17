import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  public onNewCharacterForm: EventEmitter<Character> = new EventEmitter()

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void {

    // debugger;

    console.log('hey: ',this.character)

    if(this.character.name.length === 0) return 
    this.onNewCharacterForm.emit(this.character)


    // this.character.name = ''
    // this.character.power = 0

    this.character = {
      // id
      name: '',
      power: 0
    }
  }
  
}
