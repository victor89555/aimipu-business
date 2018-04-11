import { Component, OnInit } from '@angular/core';
import {ACTIVITY_AUDITING_STATUS} from '../../../constant/dictionary';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivityService} from '../share/service/activity.service';
import {CacheService} from '../../../shared/service/cache.service';
import {NzMessageData} from 'ng-zorro-antd/src/message/nz-message.definitions';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-activity-managment-fail',
  templateUrl: './activity-managment-fail.component.html',
  styleUrls: ['./activity-managment-fail.component.scss']
})
export class ActivityManagmentFailComponent implements OnInit {

  title = '未通过活动'
  isLoading:boolean = false
  keyword:string = ''
  allShop: any[] = []
  page:any = {current_page:1,per_page:10,total: 0,data:[]}
  activity_status = ACTIVITY_AUDITING_STATUS

  validateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private activityService: ActivityService,
              private cacheService: CacheService,
              private messageService: NzMessageService) {
  }

  _submitForm() {
    this.getFailedData()
  }

  ngOnInit() {
    this.allShop = this.cacheService.getShops()
    this.validateForm = this.fb.group({
      keyword: [ this.keyword ],
    });
    this.getFailedData()
  }

  getFailedData(){
    this.isLoading = true
    this.page.keyword = this.keyword
    this.activityService.getFailed(this.page).subscribe((res)=>{
      if(res.status=='success'){
        this.page = res.data
      }else{
        this.messageService.error(res.message)
      }
    },(err)=>{
      console.log(err)
    },()=>{
      this.isLoading = false
    })
  }

  changePageNo(pageNo){
    this.page={current_page:1,per_page:10,total: 0,data:[]}
    this.page.page=pageNo
    this.getFailedData()
  }

  deleteActivity(id){
    this.activityService.deleteActivity(id).subscribe((res)=>{
      if(res.status=='success'){
        this.messageService.success('删除成功！')
        this.getFailedData()
      }else{
        this.messageService.error(res.message)
      }
    },(err)=>{
      console.log(err)
    },()=>{})
  }
  cancel(){
    console.log('cancel')
  }

}
