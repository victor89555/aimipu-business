import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivityService} from '../share/service/activity.service';
import {ACTIVITY_AUDITING_STATUS} from '../../../constant/dictionary';
import {Router} from '@angular/router';
import {CacheService} from '../../../shared/service/cache.service';

@Component({
  selector: 'activity-management-published',
  templateUrl: './activity-management-published.component.html',
  styleUrls: ['./activity-management-published.component.scss']
})
export class ActivityManagementPublishedComponent implements OnInit {

  title = '已发布活动'
  isLoading:boolean = false
  keyword:string = ''
  allShop:any[]=[]
  page:any = {current_page:1,per_page:10,total: 0,data:[]}
  activity_status = ACTIVITY_AUDITING_STATUS

  validateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private activityService: ActivityService,
              private router: Router,
              private cacheService: CacheService) {
  }

  _submitForm() {
    this.getPublishedData()
  }

  ngOnInit() {
    this.allShop = this.cacheService.getShops()
    this.validateForm = this.fb.group({
      keyword: [ this.keyword ],
    });
    this.getPublishedData()
  }

  getPublishedData(){
    this.isLoading = true
    this.page.keyword = this.keyword
    this.activityService.getPublished(this.page).subscribe((res)=>{
      this.page = res.data
      this.isLoading = false
    })
  }

  changePageNo(pageNo){
    this.page={current_page:1,per_page:10,total: 0,data:[]}
    this.page.page=pageNo
    this.getPublishedData();
  }

  checkApplication(id){
    this.router.navigate(['/auth-guard/activity/activity-published/application/'+id]);
  }
  checkReport(id){
    this.router.navigate(['/auth-guard/activity/activity-published/report/'+id]);
  }


}
