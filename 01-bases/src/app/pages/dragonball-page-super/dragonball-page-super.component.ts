import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';



@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-page-super.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {

  // constructor(
  //   public dragonballService: DragonballService
  // ){}

  public dragonballService = inject(DragonballService);



}
