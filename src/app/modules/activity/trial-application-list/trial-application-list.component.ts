import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-trial-application-list',
  templateUrl: './trial-application-list.component.html',
  styleUrls: ['./trial-application-list.component.scss']
})
export class TrialApplicationListComponent implements OnInit {

  title = '试用申请列表'
  validateForm: FormGroup;
  keyword:string = ''
  _startDate = ''
  _endDate = ''
  page:any = {current_page:1,per_page:10,total: 0,data:[]}
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      keyword: [ this.keyword],
      startDate: [this._startDate],
      endDate: [this._endDate]
    })
  }

  _submitForm(){

  }

  getApplicationInfo(){

  }

}
