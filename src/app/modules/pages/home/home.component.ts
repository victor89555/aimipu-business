import { Component, OnInit } from '@angular/core';
import {Count_Info} from './count_Info.model';
import {HomeService} from './home.service';
import {ActivityService} from '../../activity/share/service/activity.service';
import {TrialReportDetailCComponent} from '../../activity/trial-report-detail-c/trial-report-detail-c.component';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {CacheService} from '../../../shared/service/cache.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  countInfo: Count_Info = new Count_Info()
  applicationList: any[] = []
  reportList: any[] = []
  table1_loading:boolean = false
  table2_loading:boolean = false

  allShop:any[]=[];

  applyId = null
  reason:string = ''
  isEmpty:boolean = false
  isVisible:boolean = false
  isConfirmLoading:boolean = false

  constructor(private homeSevice: HomeService,
              private cacheService:CacheService,
              private activityService: ActivityService,
              private modalService: NzModalService,
              private messageService: NzMessageService) {
  }

  ngOnInit() {
    this.allShop = this.cacheService.getShops();
    console.log(666666666666)
    console.log(this.allShop)
    //获取首页统计信息
    this.getCountInfo()

    //获取相关列表
    this.getApplicationList()
    this.getReportLst()

  }

  getCountInfo(){
    this.homeSevice.getCountInfo().subscribe((res)=>{
      console.log(res)
      this.countInfo = {
        activies: res.data.projects,
        applies: res.data.applies1,
        participants: res.data.applies2,
        reports: res.data.applies3,
      }
    })
  }

  customerInfo:any={id:0,shop_id:0};
  showCustomerInfo(data){
    this.customerInfo.id=data.user_id;
  }
  toClose(e){
    this.customerInfo={id:0,shop_id:0};
  }

  getApplicationList(){
    this.table1_loading = true
    this.activityService.getApplicationList({}).subscribe((res)=>{
      this.applicationList = res.data.data
      this.table1_loading = false
    })
  }

  getReportLst(){
    this.table2_loading = true
    this.activityService.getReportList({}).subscribe((res)=>{
      this.reportList = res.data.data
      this.table2_loading = false
    })
  }

  //审核报告内容
  auditReport(data){
    var _this = this
    const subscription = this.modalService.open({
      title: '试用报告内容',
      content: TrialReportDetailCComponent,
      onOk() {
        _this.getReportLst()
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

  doPass(id){
    var _this = this
    this.modalService.open({
      title   : '提示',
      content : '确认通过？',
      closable: false,
      showConfirmLoading: true,
      onOk() {
        var content = {status:2}
        _this.activityService.changeApplicationStatus(id,content).subscribe((res)=>{
          return new Promise(() => {
            _this.messageService.success('提交通过成功！')
            _this.getApplicationList()
          });
        })
      },
      onCancel() {
      }
    });

  }
  doNoPass(id){
    this.applyId = id
    this.isVisible = true;
  }
  onInput(e){
    this.checkEmpty()
  }
  checkEmpty(){
    if(this.reason.trim()==''){
      this.isEmpty = true
      return false
    }else {
      this.isEmpty = false
      return true
    }
  }
  handleOk(e) {
    var _this = this
    if(_this.checkEmpty()){
      this.isConfirmLoading = true;
      this.activityService
        .changeApplicationStatus(this.applyId,{status:5,failed_reason:this.reason})
        .subscribe((res)=>{
          _this.isConfirmLoading = false;
          _this.messageService.info('不通过已提交！')
          _this.applyId = null
          _this.isVisible = false
          _this.getApplicationList()
        })
    }
  }
  handleCancel(e){
    this.applyId = null
    this.isVisible = false
  }

}
