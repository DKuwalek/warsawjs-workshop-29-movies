import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmsService } from 'src/app/core/services/films.service';
import { Film } from '../film';

@Component({
  selector: 'app-new-film',
  templateUrl: './new-film.component.html',
  styleUrls: ['./new-film.component.css']
})
export class NewFilmComponent implements OnInit {

  filmForm: FormGroup;

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    if (this.filmForm.invalid) {
      console.log("INVALID");
      return;
    }
      this.filmsService.addFilm(this.filmForm.value as Film);
  }

  private initForm() {
    this.filmForm = new FormGroup({
      title: new FormControl('', Validators.required)
      // genre: new FormControl('', Validators.required),
      // numberInStock: new FormControl('', Validators.required),
      // dailyRentalRate: new FormControl('', Validators.required),
      // imageUrl: new FormControl('', Validators.required),
    });
  }

}
