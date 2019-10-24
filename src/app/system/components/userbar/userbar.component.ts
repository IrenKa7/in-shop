import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userbar',
  templateUrl: './userbar.component.html',
  styleUrls: ['./userbar.component.scss']
})
export class UserbarComponent implements OnInit {

  constructor() { }

  userName = localStorage.getItem('name');

  ngOnInit() {
  }

}
