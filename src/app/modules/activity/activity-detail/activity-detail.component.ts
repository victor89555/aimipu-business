import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss']
})
export class ActivityDetailComponent implements OnInit {

  title = '发布试用活动'
  activityDetailForm: FormGroup;
  content:any= '';
  nowTime: Date
  shops: any[] = []
  callBack(e){
    // console.log(e)
  }

  constructor(private fb: FormBuilder) {
  }


  ngOnInit() {
    this.nowTime = new Date()
    this.activityDetailForm = this.fb.group({
      shopName: [ 1 ],
      source: [ null, [ Validators.required ] ],
      postage: [ null ],
      startTime: [this.nowTime],
      endTime: [ new Date(this.nowTime.setMonth(this.nowTime.getMonth() + 1)) ],

      title: [ '', [ Validators.required ] ],
      type: [ '', [ Validators.required ] ],
      quantity: [ '', [ Validators.required ] ],
      price: [ '', [ Validators.required ] ],
      taoBaoId: [ '', [ Validators.required ] ],
      coins: [ '', [ Validators.required ] ],
    })
    this.getShops()
  }

  SubmitApplication(){
    console.log('点击提交申请')
    if(this.verifyAll()){
      console.log('确认提交！')
    }else{
      console.log('提交取消！')
    }
  }
  //验证所有
  verifyAll() {

  }

  //获取该商家所有店铺
  getShops() {
    //以下为虚拟数据
    this.shops = [
      {id: 1, name: '海洋韵诗海泥京东专卖店'},
      {id: 2, name: '海洋韵诗海泥服装专卖店'},
      {id: 3, name: '海洋韵诗海泥天猫专卖店'},
    ]
  }

}
