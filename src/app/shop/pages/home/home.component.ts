import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../shared/services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public itemsService: ItemService) {
  }


  hotItems = [
    { name: 'BRANDED SHOE', img: 'Layer_3.jpg', id: 1 },
    { name: 'BRANDED TSHIRTS', img: 'Layer_5.jpg', id: 2 },
    { name: 'BRANDED SHOE', img: 'Layer_6.jpg', id: 3 },
  ];

  ngOnInit() {
    console.log(this.itemsService.items);
  }

}
