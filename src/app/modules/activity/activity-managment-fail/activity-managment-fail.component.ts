import { Component, OnInit } from '@angular/core';
import {ACTIVITY_AUDITING_STATUS} from '../../../constant/dictionary';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivityService} from '../share/service/activity.service';

@Component({
  selector: 'app-activity-managment-fail',
  templateUrl: './activity-managment-fail.component.html',
  styleUrls: ['./activity-managment-fail.component.scss']
})
export class ActivityManagmentFailComponent implements OnInit {

  title = '未通过活动'
  isLoading:boolean = false
  keyword:string = ''
  page:any = {current_page:1,per_page:10,total: 0,data:[]}
  activity_status = ACTIVITY_AUDITING_STATUS

  validateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private activityService: ActivityService) {
  }

  _submitForm() {
    this.getFailedData()
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      keyword: [ this.keyword ],
    });
    this.getFailedData()
  }

  getFailedData(){
    this.isLoading = true
    this.page.keyword = this.keyword
    this.activityService.getFailed(this.page).subscribe((res)=>{
      this.page = res.data
      this.isLoading = false
    })
  }

  changePageNo(pageNo){
    this.page={current_page:1,per_page:10,total: 0,data:[]}
    this.page.page=pageNo
    this.getFailedData()
  }

}
