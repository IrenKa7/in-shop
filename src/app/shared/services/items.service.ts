import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable()
export class ItemService {
  url: string;
    constructor(private http: HttpClient) {
      this.url = 'http://localhost:3000/items';
    }


    items = [
        { name: 'BRANDED SHOE', price: 300, img: '/assets/images/Layer_7.jpg', id: 1 },
        { name: 'BRANDED SHOE', price: 300, img: '/assets/images/Layer_8.jpg', id: 2 },
        { name: 'BRANDED SHOE', price: 300, img: '/assets/images/Layer_9.jpg', id: 3 },
        { name: 'BRANDED SHOE', price: 300, img: '/assets/images/Layer_10.jpg', id: 4 },
        { name: 'BRANDED SHOE', price: 300, img: '/assets/images/Layer_11.jpg', id: 5 },
        { name: 'BRANDED SHOE', price: 300, img: '/assets/images/Layer_12.jpg', id: 6 },
      ];

      // public getOneProduct(id: number): Observable<items>{
      //   return this.http.get<items>(`${this.url}/${id}`)
      // }


}
