import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

// const apiUrl = '';



@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {
    }


    // login(body) {
    //     return this.http.post(`${apiUrl}/Security/Login`, body);
    // }


    // updateUser(body) {
    //     return this.http.put(`${apiUrl}/User/Update`, body);
    // }

    // getGames(filterParameters: any): Observable<object> {
    //     let params = new HttpParams();
    //     // tslint:disable-next-line:forin
    //     for (const key in filterParameters) {
    //         let value = filterParameters[key];
    //         if (value != null) {
    //             value = value.toString();
    //             params = params.append(key, value);
    //         }
    //     }
    //     return this.http.get(`${apiUrl}/`,  {params: params});
    // }

    // updateGame(body) {
    //     return this.http.put(`${apiUrl}/`, body);
    // }



}
