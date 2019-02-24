import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FilmsService } from 'src/app/core/services/films.service';
import { Film } from '../film';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css']
})
export class EditFilmComponent implements OnInit {

  filmForm: FormGroup;
  id;

  film: Film;
  errorMessages: any;

  constructor(private filmsService: FilmsService) { 
   filmsService.getFilm(this.id).subscribe(
      data => {
        this.film = data as Film;
        this.initForm();
      },
      error => this.errorMessages = error
    );
    console.log(this.film);
  }


  ngOnInit() {
    console.log("Init YO");
    // this.initForm();
  }

  onSubmit(film: Film) {
    this.film = film;
    console.log("Edit form SUBMITTE");
    if (this.filmForm.invalid) {
      return;
    }
      this.filmsService.updateFilm(this.filmForm.value as Film);
  }

  private initForm() {
    this.filmForm = new FormGroup({
      title: new FormControl(this.film.id, Validators.required)
      // genre: new FormControl('', Validators.required),
      // numberInStock: new FormControl('', Validators.required),
      // dailyRentalRate: new FormControl('', Validators.required),
      // imageUrl: new FormControl('', Validators.required),
    });
  }

}
