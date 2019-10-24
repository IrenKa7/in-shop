
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../shared/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemService } from '../../../../shared/services/items.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private itemService: ItemService
  ) { }

  openWindow = false;
  openWindowType = 'Add';
  editedItem;
  itemsForm;

  tabelObject = {};


  ngOnInit() {
    console.log(this.itemService.items);

    this.tabelObject = {
      table: { justifyContent: 'space-between' },
      header: [
        { name: 'name', title: 'Name'},
        { name: 'img', title: 'Image', type: 'image', width: 300 },
        { name: 'price', title: 'Price'},
      ],
      buttons: [
        { action: 'edit', title: 'Action', width: 200, icon: 'edit' },
        { action: 'delete', title: 'Edit', width: 200, icon: 'trash-alt' },
      ],
      values: this.itemService.items
    };

    this.itemsForm = new FormGroup({
      name: new FormControl(''),
      img: new FormControl(''),
      price: new FormControl(''),
    });
  }

  editItem(item) {
      console.log(item);
  }

  nextPage() {

  }

  openWindowEvent(value) {
    this.openWindow = value;
  }

  onSubmit() {
    if (this.openWindowType === 'Edit') {
      const index = this.itemService.items.findIndex( x => x === this.editedItem );
      this.itemService.items[index] = this.itemsForm.value;
    } else {
      // add
      this.itemService.items.push(this.itemsForm.value);
    }
    this.openWindowEvent(false);
  }

  tabelAction(event) {
    console.log(event);
    if (event.value === 'edit') {
      console.log(event);
      this.openWindowType = 'Edit';
      this.editedItem = event.item;
      this.itemsForm.patchValue(event.item);
      this.openWindowEvent(event.value);

    }
    if (event.value === 'delete') {
      console.log('delete');
      const index = this.itemService.items.findIndex( x => x === event.item );
      this.itemService.items[index] = this.itemsForm.value;
      this.itemService.items.splice(index, 1);
    }
  }

}




