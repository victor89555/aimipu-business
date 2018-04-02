import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ACTIVITY_AUDITING_STATUS} from '../../../constant/dictionary';
import {ActivityService} from '../share/service/activity.service';
import {Router} from '@angular/router';
import {CacheService} from '../../../shared/service/cache.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'activity-management-pending',
  templateUrl: './activity-management-pending.component.html',
  styleUrls: ['./activity-management-pending.component.scss']
})
export class ActivityManagementPendingComponent implements OnInit {

  title = '待审核活动'
  isLoading:boolean = false
  keyword:string = ''
  allShop:any[]=[]
  page:any = {current_page:1,per_page:10,total: 0,data:[]}
  activity_status = ACTIVITY_AUDITING_STATUS

  validateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private activityService: ActivityService,
              private router: Router,
              private cacheService: CacheService,
              private messageService: NzMessageService) {
  }

  _submitForm() {
    this.getPendingData()
  }

  ngOnInit() {
    this.allShop = this.cacheService.getShops()
    this.validateForm = this.fb.group({
      keyword: [ this.keyword ],
    });
    this.getPendingData()
  }

  getPendingData(){
    this.isLoading = true
    this.page.keyword = this.keyword
    this.activityService.getPending(this.page).subscribe((res)=>{
      this.page = res.data
      this.isLoading = false
    })
  }

  changePageNo(pageNo){
    this.page={current_page:1,per_page:10,total: 0,data:[]}
    this.page.page=pageNo
    this.getPendingData()
  }
  editActivityInfo(id){
    this.router.navigateByUrl('/auth-guard/activity/activity-pending/'+id)
  }
  deleteActivity(id){
    this.activityService.deleteActivity(id).subscribe((res)=>{
      this.messageService.success('删除成功！')
      this.getPendingData()
    })
  }
  cancel(){
    console.log('cancel')
  }

}
