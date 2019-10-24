import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableObject;
  @Output() edited = new EventEmitter<any>();
  @Output() nextPage = new EventEmitter<any>();
  @Output() action = new EventEmitter<any>();

  constructor() { }

  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;


  ngOnInit() {
  }

  console(value) {
    console.log(value);
  }

  onClickedOutside(e: Event) {
    console.log('Clicked outside:', e);
  }

  editItem(item, fild, value) {
    delete item.editing;
    // console.log(item, fild, value);
    if (item[fild] !== value) {
      item[fild] = value;
      this.edited.emit(item);
    }

  }

  editable(row, col, item) {
    if (!row.uneditable) {
      item.editing = row.name;
      col.focus();
    }
  }

  onScrollDown() {
    this.nextPage.emit(true);
  }

  actionButton(value, item) {
    this.action.emit({item, value});
  }


}
