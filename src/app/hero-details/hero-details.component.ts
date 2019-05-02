import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../models/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.less']
})
export class HeroDetailsComponent implements OnInit {

  @Input() hero: Hero;
  
  constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private loaction: Location
    ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(){
    const id = +this.route.snapshot.paramMap.get('id');
    if(id){
      this.heroService.getHero(id).subscribe(
        hero => this.hero = hero
      );
    }
  }

  goBack(){
    this.loaction.back();
  }

}
