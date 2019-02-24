import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
@Input() film;
  constructor() {
    console.log(this.film);
   }
  
  ngOnInit() {
  }

}