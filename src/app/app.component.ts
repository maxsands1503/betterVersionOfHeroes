import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  //Method one for adding data to the imported class
  // hero : Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }
  //using a constructor to make a new instance of the class
  // constructor(){
  //   this.hero = new Hero();
  //   this.hero.id = 1;
  //   this.hero.name = 'Hagbard Celine';
  // }
  hero;
  constructor(HeroesService: HeroesService){
    this.hero = HeroesService.getHeroes();
  }
}
