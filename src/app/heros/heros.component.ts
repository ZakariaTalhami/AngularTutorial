import { Component, OnInit } from '@angular/core';
import { Hero } from "../models/hero"
import { HEROS } from '../mock-heros';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.less']
})
export class HerosComponent implements OnInit {
  private selectedHero: Hero;
  private heros: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  onSelect(hero) {
    this.selectedHero = (this.selectedHero !== hero) ? hero : undefined;
  }

  getHeros() {
    this.heroService.getHeros().subscribe(heros => this.heros = heros);
  }
}
