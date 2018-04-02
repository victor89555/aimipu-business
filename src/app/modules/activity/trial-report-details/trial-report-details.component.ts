import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {ActivityService} from '../share/service/activity.service';
import {TrialReportDetailCComponent} from '../trial-report-detail-c/trial-report-detail-c.component';
import {NzModalService} from 'ng-zorro-antd';
import {CacheService} from '../../../shared/service/cache.service';

@Component({
  selector: 'app-trial-report-details',
  templateUrl: './trial-report-details.component.html',
  styleUrls: ['./trial-report-details.component.scss']
})
export class TrialReportDetailsComponent implements OnInit {

  title = '试用报告详情'
  activityId = null
  index:any = "all";
  keyword:string = ''
  activityInfo:any = {}
  totalData:any = {}
  nowData:any[] = []
  isLoading:boolean = false
  validateForm: FormGroup
  allShop:any[]=[]

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private activityService: ActivityService,
              private modalService: NzModalService,
              private cacheService: CacheService) { }

  ngOnInit() {
    this.allShop = this.cacheService.getShops()
    this.route.params.forEach((params: Params) => {
      this.activityId = params['id'];
      this.getActivityInfo()
    });
    this.validateForm = this.fb.group({
      keyword: [ this.keyword ]
    });
  }
  //关键本地字查询
  doLocalSearch(){

  }

  //选中tab
  selectTab(e){
    this.index =e
    //状态 0试用终止 1待审核 2待提交 3待修改 4待确认 5已完成6审核不通过
    switch (e){
      case 'all':
        this.nowData = this.totalData.applys?this.totalData.applys:[];
        break;
      case '0':
        this.nowData = this.totalData.groupApplys['0']?this.totalData.groupApplys['0']:[];
        break;
      case '2':
        this.nowData = this.totalData.groupApplys['2']?this.totalData.groupApplys['2']:[];
        break;
      case '3':
        this.nowData = this.totalData.groupApplys['3']?this.totalData.groupApplys['3']:[];
        break;
      case '4':
        this.nowData = this.totalData.groupApplys['4']?this.totalData.groupApplys['4']:[];
        break;
      case '5':
        this.nowData = this.totalData.groupApplys['5']?this.totalData.groupApplys['5']:[];
        break;
    }
  }

  getActivityInfo(){
    this.isLoading = true
    this.activityService.getActivityInfo(this.activityId).subscribe((res)=>{
      this.totalData = res.data
      this.activityInfo = res.data.project
      this.selectTab(this.index)
      this.isLoading = false
    })
  }


  customerInfo:any={id:0,shop_id:0};
  showCustomerInfo(data){
    this.customerInfo.id=data.user_id;
  }
  toClose(e){
    this.customerInfo={id:0,shop_id:0};
  }


  //审核报告内容
  auditReport(data){
    var _this = this
    const subscription = this.modalService.open({
      title: '试用报告内容',
      content: TrialReportDetailCComponent,
      onOk() {
        _this.getActivityInfo()
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
}
