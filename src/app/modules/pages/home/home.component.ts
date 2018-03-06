import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  _dataSet = [];
  _bordered = true;
  _loading = false;
  _pagination = false;
  _header = false;
  _title = true;
  _footer = false;
  _fixHeader = false;
  _size = 'small';

  constructor() {
  }

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      this._dataSet.push({
        key        : i,
        name       : 'John Brown',
        age        : `${i}2`,
        address    : `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
      });
    }
  }

}
