import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {ActivityService} from '../share/service/activity.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {CacheService} from '../../../shared/service/cache.service';

@Component({
  selector: 'app-trial-application-details',
  templateUrl: './trial-application-details.component.html',
  styleUrls: ['./trial-application-details.component.scss']
})
export class TrialApplicationDetailsComponent implements OnInit {

  title = '试用申请详情'
  activityId = null
  index:any = "all";
  keyword:string = ''
  activityInfo:any = {}
  totalData:any = {}
  nowData:any[] = []
  isLoading:boolean = false
  validateForm: FormGroup
  allShop:any[]=[]

  applyId = null
  reason:string = ''
  isEmpty:boolean = false
  isVisible:boolean = false
  isConfirmLoading:boolean = false

  num_all:number = 0
  num_1:number = 0
  num_2:number = 0
  num_6:number = 0
  style: any = {
    top: '20px'
  };

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private activityService: ActivityService,
              private messageService:NzMessageService,
              private modalService:NzModalService,
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
      case '1':
        this.nowData = this.totalData.groupApplys['1']?this.totalData.groupApplys['1']:[];
        break;
      case '2':
        this.nowData = this.totalData.groupApplys['2']?this.totalData.groupApplys['2']:[];
        break;
      case '6':
        this.nowData = this.totalData.groupApplys['6']?this.totalData.groupApplys['6']:[];
        break;
    }
  }

  getActivityInfo(){
    this.isLoading = true
    this.activityService.getActivityInfo(this.activityId).subscribe((res)=>{
      this.totalData = res.data
      this.activityInfo = res.data.project
      this.num_all = this.totalData.applys?this.totalData.applys.length:0
      this.num_1 = this.totalData.groupApplys['1']?this.totalData.groupApplys['1'].length:0
      this.num_2 = this.totalData.groupApplys['2']?this.totalData.groupApplys['2'].length:0
      this.num_6 = this.totalData.groupApplys['6']?this.totalData.groupApplys['6'].length:0
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
            _this.getActivityInfo()
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
          _this.getActivityInfo()
        })
    }
  }
  handleCancel(e){
    this.applyId = null
    this.isVisible = false
  }


}
