import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { HEROS } from './mock-heros';
import { Hero } from './models/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]>{
    this.messageService.add("HerosService: fetched Heros");
    return of(HEROS);
  }
}
