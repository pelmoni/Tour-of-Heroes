import { Component, Input } from '@angular/core';
import {Hero} from "../hero";
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, NgIf, UpperCasePipe],
})


export class HeroDetailComponent {
  @Input() hero?: Hero;
}
