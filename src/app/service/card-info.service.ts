import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardInfoService {

  constructor(private http: HttpClient,) { }


  handleError(error) {
    return throwError(error);
}
  postCardInfo(value) {
    const headers = new HttpHeaders({
  });

  return this.http.post<any>(environment.baseUrl +
      'AddStudentProfile', value.studentDetail, { headers })
      .pipe(
          map(response => {
              return response;
          }),
          catchError(this.handleError)
      );

  }
}
