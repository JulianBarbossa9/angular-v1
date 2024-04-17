import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  //Inyección de dependencias, los componentes de mainpage van a conocer la data que tiene el servicio

  // constructor( public dbzService: DbzService){
  constructor( private dbzService: DbzService){}

  get characters(): Character[] {
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id: string) {
    this.dbzService.onDeleteCharById(id)
  }

  onCreateCharacter( character: Character){
    this.dbzService.onNewCharacter(character)
  }
 
}
