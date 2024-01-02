import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from "../hero.service";
import {NgFor, UpperCasePipe, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {MessageService} from "../message.service";

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
export class HeroesComponent implements OnInit{
  heroes: Hero[]=[];
  selectedHero?: Hero;

  constructor(private heroService:HeroService, private messageService:MessageService) {

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }



  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }

  ngOnInit():void{
    this.getHeroes();
  }
}

