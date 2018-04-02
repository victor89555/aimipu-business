import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ACTIVITY_AUDITING_STATUS} from '../../../constant/dictionary';
import {ActivityService} from '../share/service/activity.service';
import {CacheService} from '../../../shared/service/cache.service';

@Component({
  selector: 'activity-management-over',
  templateUrl: './activity-management-over.component.html',
  styleUrls: ['./activity-management-over.component.scss']
})
export class ActivityManagementOverComponent implements OnInit {

  title = '已完成活动'
  isLoading:boolean = false
  keyword:string = ''
  allShop: any[] =[]
  page:any = {current_page:1,per_page:10,total: 0,data:[]}
  activity_status = ACTIVITY_AUDITING_STATUS

  validateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private activityService: ActivityService,
              private cacheService: CacheService) {
  }

  _submitForm() {
    this.getDoneData()
  }

  ngOnInit() {
    this.allShop = this.cacheService.getShops()
    this.validateForm = this.fb.group({
      keyword: [ this.keyword ],
    });
    this.getDoneData()
  }

  getDoneData(){
    this.isLoading = true
    this.page.keyword = this.keyword
    this.activityService.getDone(this.page).subscribe((res)=>{
      this.page = res.data
      this.isLoading = false
    })
  }

  changePageNo(pageNo){
    this.page={current_page:1,per_page:10,total: 0,data:[]}
    this.page.page=pageNo
    this.getDoneData()
  }
}
