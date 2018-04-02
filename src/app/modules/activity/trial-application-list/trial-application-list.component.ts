import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivityService} from '../share/service/activity.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {CacheService} from '../../../shared/service/cache.service';

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
  allShop:any[]=[]

  applyId = null
  reason:string = ''
  isEmpty:boolean = false
  isVisible:boolean = false
  isConfirmLoading:boolean = false
  _startDate = ''
  _endDate = ''
  page:any = {current_page:1,per_page:10,total: 0,data:[]}
  constructor(private fb: FormBuilder,
              private activityService: ActivityService,
              private messageService: NzMessageService,
              private modalService: NzModalService,
              private cacheService: CacheService) { }

  ngOnInit() {
    this.allShop = this.cacheService.getShops()
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
      console.log(this.page)
      this.isLoading = false
    })
  }
  changePageNo(pageNo){
    this.page={current_page:1,per_page:10,total: 0,data:[]}
    this.page.page=pageNo
    this.getApplicationInfo()
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
            _this.getApplicationInfo()
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


  customerInfo:any={id:0,shop_id:0};
  showCustomerInfo(data){
    this.customerInfo.id=data.user_id;
  }
  toClose(e){
    this.customerInfo={id:0,shop_id:0};
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
          _this.getApplicationInfo()
        })
    }
  }
  handleCancel(e){
    this.applyId = null
    this.isVisible = false
  }


}
