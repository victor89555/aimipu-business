import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ActivityDetailService} from './activity-detail.service';

@Component({
  selector: 'activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss'],
  providers: [ActivityDetailService]
})
export class ActivityDetailComponent implements OnInit {

  title = '发布试用活动'
  activityId = null
  activityDetailForm: FormGroup
  imgData: any[] = []
  content: any = ''
  nowTime: Date
  shops: any[] = []
  callBack(e){
    // console.log(e)
  }

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private activityDetailService: ActivityDetailService) {

  }

  ngOnInit() {
    this.getShops()
    this.initForm()
    this.route.params.forEach((params: Params) => {
      this.activityId = params['id'];
      console.log(this.activityId)
      // this.initEntity();
    });

  }

  initForm(){
    this.nowTime = new Date()
    this.activityDetailForm = this.fb.group({
      shopName: [ 1 ],
      postage: [ null ],
      startTime: [this.nowTime],
      endTime: [ new Date(this.nowTime.setMonth(this.nowTime.getMonth() + 1)) ],

      productName: [ '', [ Validators.required ] ],
      type: [ '', [ Validators.required ] ],
      quantity: [ '', [ Validators.required ] ],
      price: [ '', [ Validators.required ] ],
      taoBaoId: [ '', [ Validators.required ] ],
      coins: [ '', [ Validators.required ] ],
    })
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
    this.activityDetailService.getShops().subscribe((res)=>{
      console.log(res)
      this.shops = res.data
    })
  }

}
