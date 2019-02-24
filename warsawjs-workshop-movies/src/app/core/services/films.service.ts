import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from 'src/app/films/film';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  
  private id; 

  private moviesUrl = 'http://localhost:3000/movies';

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

 public getFilms(): Observable<Film[]> { return this.httpClient.get<Film[]>(this.moviesUrl); }

public getFilm(id: number): Observable<Film> {
  // this.subscribe(
  //   data  => {
  //   console.log('DELETE Request is successful ', data);
  //   },
  //   error  => {
  //   console.log('Error on DELTE', error);
  //   }
  // );
  this.route.params.subscribe(params => {
    console.log(params);
    this.id = params['id']; // (+) converts string 'id' to a number

    // In a real app: dispatch action to load the details here.
 });
  console.log(id);
  return this.httpClient.get<Film>(this.moviesUrl + `/${id}`);
  
}

 public addFilm(film: Film) {
    this.httpClient.post(this.moviesUrl, film).subscribe(
      data  => {
      console.log('POST Request is successful ', data);
      },
      error  => {
      console.log('Error on POST', error);
      }
    );
  }

  public deleteFilm(id: String) {
    this.httpClient.delete(this.moviesUrl + "/" + id).subscribe(
      data  => {
      console.log('DELETE Request is successful ', data);
      },
      error  => {
      console.log('Error on DELTE', error);
      }
    );
  }

  public updateFilm(film: Film) {
    this.httpClient.put(this.moviesUrl, film).subscribe(
      data  => {
      console.log('UPDATE Request is successful ', data);
      },
      error  => {
      console.log('Error on UPDATE', error);
      }
    );
  }
}
