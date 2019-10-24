import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../shared/services/items.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(public itemsService: ItemService) { }

  ngOnInit() {
  }

}
