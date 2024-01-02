import { Component } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from "../mock-heroes";
import {NgFor, UpperCasePipe, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";

@Component({
    imports: [
        NgFor,
        NgIf,
        FormsModule,
        UpperCasePipe,
        HeroDetailComponent,
    ],
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.components.html',
  styleUrls: ['./heroes.components.css']
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

