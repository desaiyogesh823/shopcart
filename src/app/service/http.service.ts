import { Injectable } from '@angular/core';
import { Response, Jsonp } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, timeout } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  userId: string;
  constructor(private http: HttpClient, private jsonp: Jsonp) {

  }

  //get headers method
  getHeader() {
    const token = localStorage.getItem('token');
    var headers = new HttpHeaders({
      "Content-Type": "application/json; charset=UTF-8",
      'access_token': token,
      "Accept": "application/json; charset=UTF-8",
    })
    return { headers: headers }
  }

  post(url: string, object?: any): Observable<any> {
    return this.http.post(url, object, this.getHeader())
      .pipe(timeout(600000), map(res => res),
        catchError(this.handleError));
  }

  dopost(url: string, object: any): Observable<any> {
    return this.http.post(url, object)
      .pipe(timeout(600000), map(res => res),
        catchError(this.handleError));
  }

  get(url: string): Observable<any> {
    return this.http.get(url, this.getHeader())
      .pipe(timeout(6000000), map(res => res),
        catchError(this.handleError));
  }

  put(url: string, object: any): Observable<any> {
    return this.http.put(url, object, this.getHeader())
      .pipe(timeout(600000), map(res => res),
        catchError(this.handleError));
  }


  getweather(url: string): Observable<any> {
    return this.jsonp.get(url)
      .pipe(timeout(600000), map(res => res.json()),
        catchError(this.handleError));
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url, this.getHeader())
      .pipe(timeout(600000), map(res => res),
        catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    // return Observable.throw(new Error(error.status));
    if (error.status >= 500 && error.status <= 600) {
      return throwError(new Error("Internal Server Error (" + error.status + ")"));
    }
    else if (error.status >= 400 && error.status < 500) {
      return throwError(new Error("Bad Request (" + error.status + ")"));
    }
    else if (error.status >= 300 && error.status < 400) {
      return throwError(new Error("Server Redirection Error (" + error.status + ")"));
    }
    else if (error.status == 0 || error.status == undefined) {
      return throwError(new Error("Request to server did not complete - Please check your network connection"));
    }
    else {
      return throwError(new Error("Something went wrong (" + error.status + ")"));
    }
  }
}
