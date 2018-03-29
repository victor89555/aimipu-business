import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivityService} from '../share/service/activity.service';

@Component({
  selector: 'app-trial-application-list',
  templateUrl: './trial-application-list.component.html',
  styleUrls: ['./trial-application-list.component.scss']
})
export class TrialApplicationListComponent implements OnInit {

  title = '试用申请列表'
  isLoading:boolean = false
  validateForm: FormGroup;
  keyword:string = ''
  _startDate = ''
  _endDate = ''
  page:any = {current_page:1,per_page:10,total: 0,data:[]}
  constructor(private fb: FormBuilder,
              private activityService: ActivityService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      keyword: [ this.keyword],
      startDate: [this._startDate],
      endDate: [this._endDate]
    })
    this.getApplicationInfo()
  }

  _submitForm(){
    this.getApplicationInfo()
  }

  getApplicationInfo(){
    this.isLoading = true
    this.page.keyword = this.keyword
    this.activityService.getApplicationList(this.page).subscribe((res)=>{
      this.page = res.data
      this.isLoading = false
    })
  }
  changePageNo(pageNo){
    this.page={current_page:1,per_page:10,total: 0,data:[]}
    this.page.page=pageNo
    this.getApplicationInfo()
  }
  doPass(id){
    var content = {status:2}
    this.activityService.changeApplicationStatus(id,content).subscribe((res)=>{
      console.log(res)
    })
  }
  doNoPass(id){

    var content = {status:5}
    this.activityService.changeApplicationStatus(id,content).subscribe((res)=>{
      console.log(res)
    })
  }
}
