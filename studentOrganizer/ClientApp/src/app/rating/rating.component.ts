import { Component, Inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { RatingModel } from '../models/rating-model';
import { style } from '@angular/animations';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./style.css'],
  providers: [DataService],
})

export class ratingComponent {

  public rating: RatingModel[];
  public studnum:string; // должно вводиться юзером
  public paspnum:string; // это тоже

  constructor(private dataservice: DataService) { }

  public getRating() {
    this.dataservice.getRating(this.studnum, this.paspnum).subscribe(
    result => {
      this.rating = result;
      console.log(this.rating); //Убрать, тк нужна была при дизайне
    });
  }
}
/* = "3180435"
= "732022"*/