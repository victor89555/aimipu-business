import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivityService} from '../share/service/activity.service';
import {NzModalService} from 'ng-zorro-antd';
import {TrialReportDetailCComponent} from '../trial-report-detail-c/trial-report-detail-c.component';
import {ACTIVITY_APPLY_STATUS} from '../../../constant/dictionary';
import {CacheService} from '../../../shared/service/cache.service';

@Component({
  selector: 'app-trial-report-list',
  templateUrl: './trial-report-list.component.html',
  styleUrls: ['./trial-report-list.component.scss']
})
export class TrialReportListComponent implements OnInit {

  title = '试用报告列表'
  isLoading:boolean = false
  validateForm: FormGroup;
  apply_status = ACTIVITY_APPLY_STATUS
  keyword:string = ''
  _startDate = ''
  _endDate = ''
  allShop:any[]=[]
  page:any = {current_page:1,per_page:10,total: 0,data:[]}
  constructor(private fb: FormBuilder,
              private activityService: ActivityService,
              private modalService: NzModalService,
              private cacheService: CacheService) { }

  ngOnInit() {
    this.allShop = this.cacheService.getShops()
    this.validateForm = this.fb.group({
      keyword: [ this.keyword],
      startDate: [this._startDate],
      endDate: [this._endDate]
    })
    this.getReportInfo()
  }

  _submitForm(){
    this.getReportInfo()
  }

  getReportInfo(){
    this.isLoading = true
    this.page.keyword = this.keyword
    this.activityService.getReportList(this.page).subscribe((res)=>{
      this.page = res.data
      this.isLoading = false
    })
  }
  changePageNo(pageNo){
    this.page={current_page:pageNo,per_page:10,total: 0,data:[]}
    this.page.page=pageNo
    this.getReportInfo()
  }

  //审核报告内容
  auditReport(data){
    var _this = this
    const subscription = this.modalService.open({
      title: '试用报告内容',
      content: TrialReportDetailCComponent,
      onOk() {
        _this.getReportInfo()
      },
      onCancel() {
        console.log('Click cancel');
      },
      footer: false,
      componentParams: {
        data:data,
      }
    });
    subscription.subscribe(result => {
      console.log(result);
    })
  }

  customerInfo:any={id:0,shop_id:0};
  showCustomerInfo(data){
    this.customerInfo.id=data.user_id;
  }
  toClose(e){
    this.customerInfo={id:0,shop_id:0};
  }

}
