import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  constructor() { }
  @Output() closeWindowEvent = new EventEmitter<any>();
  @Input() title;


  ngOnInit() {
  }




  close() {
    this.closeWindowEvent.emit(false);
  }

}
