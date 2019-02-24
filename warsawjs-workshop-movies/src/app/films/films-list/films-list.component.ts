import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import * as data from 'db.json';
import { FilmsService } from 'src/app/core/services/films.service';
@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  public name = 'Films list';
  public films: Film[];
  public filmsDetailIsVisible = false;
  public errorMessages;

  constructor(private filmsService: FilmsService) {
    this.films =  data.default.movies;
  }
  
  ngOnInit() {
    this.filmsService.getFilms().subscribe(
      films => {
        this.films = films;
      },
      error => this.errorMessages = error
    );
}

  public toggleFilmDetails(): void {
    this.filmsDetailIsVisible = !this.filmsDetailIsVisible;
  }

  public deleteFilm(id): void{
    this.filmsService.deleteFilm(id);
  }

  public editFilm(film): void {
    console.log(film);
  }
}