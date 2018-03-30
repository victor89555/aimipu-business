import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {UsersService} from '../../users/users.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit,OnChanges {


  //
  @Input() customer_id:any=0;
  @Input() shop_id:any=0;
  @Output()  close = new EventEmitter<number>();


  customerInfo:any={};
  shopCount:any={};
  allCount:any={};
  allType:any=1;
  shopType:any=1;
  constructor(private userService:UsersService,private message:NzMessageService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.customer_id > 0){
      this.initDatas()
      document.getElementById('detail_info_mask').style.display = 'block'
      document.getElementById('detail_info_side').style.right = '0px'
    }else {
      document.getElementById('detail_info_mask').style.display = 'none'
      document.getElementById('detail_info_side').style.right = '-430px'
    }
  }

  initDatas(){
    //获取用户信息
      this.userService.getCustomerInfo(this.customer_id).subscribe((resp)=>{
        if(resp.status=="success"){
          this.customerInfo = resp.data;
        }else {
          this.message.warning(resp.message);
        }
      },error=>{
        console.log(error)
      })
    //获取用户所有统计信息
    this.getAllCount(1);

    //获取本店统计信息
    this.getShopCount(1);

  }

  //获取用户所有统计信息
  getAllCount(timeType){//param ={user_id-用户id ,   applied_at-查询时间范围，传时间，不传默认为查一个月的}
    let param:any = {user_id:this.customer_id}
    param.applied_at = timeType;
    this.allType = timeType;
    this.userService.getCustomerCount(param).subscribe((resp)=>{
      if(resp.status=="success"){
        this.allCount = resp.data;
      }else {
        this.message.warning(resp.message);
      }
    },error=>{
      console.log(error)
    })
  }

  //获取本店统计信息
  getShopCount(timeType) {//param ={user_id-用户id , shop_id-店铺id,  applied_at-查询时间范围，传时间，不传默认为查一个月的}
    let param:any = {user_id:this.customer_id,shop_id:this.shop_id};
    param.applied_at = timeType;
    this.shopType = timeType;
    this.userService.getCustomerCount(param).subscribe((resp)=>{
      console.log(timeType)
      if(resp.status=="success"){
        this.shopCount = resp.data;
      }else {
        this.message.warning(resp.message);
      }
    },error=>{
      console.log(error)
    })
  }

  toClose(e){
    this.customer_id == 0;
    this.close.emit(0);
  }
}
