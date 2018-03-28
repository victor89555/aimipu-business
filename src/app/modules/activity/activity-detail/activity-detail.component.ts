import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ActivityDetailService} from './activity-detail.service';
import {ActivityInfo} from './activity-detail.model';

@Component({
  selector: 'activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss'],
})
export class ActivityDetailComponent implements OnInit {

  title = '发布试用活动'
  activityId = null
  activityDetailForm: FormGroup
  imgArr: any[] = []
  content: any = ''
  nowTime: Date
  shops: any[] = []
  activityInfo: ActivityInfo = new ActivityInfo()
  callBack(e){
    // console.log(e)
    this.content = e;
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
      this.initEntity();
    });

  }

  initEntity(){
    if(this.activityId>0){
      this.title = '修改试用活动信息'
      this.activityDetailService.getActivityInfo(this.activityId).subscribe((res)=>{
        var activityInfo:ActivityInfo = res.data.project
        console.log(activityInfo)
        //店铺
        // this.shopId = activityInfo.shop_id
        //表单信息
        this.setForm(activityInfo)
        //图片信息
        this.imgArr = activityInfo.thumb
        //图文信息
        this.content = activityInfo.content
      })
    }else{
      this.title = '发布试用活动'
    }
  }

  setForm(info){
    var form = this.activityDetailForm.controls
    form.shopId.setValue(info.shop_id)
    form.postage.setValue(info.postage_type)
    form.startTime.setValue(info.begin_at)
    form.endTime.setValue(info.end_at)
    form.productName.setValue(info.title)
    // form.goodsType.setValue(activityInfo.goods_type)
    form.quantity.setValue(info.number_of)
    form.price.setValue(info.price)
    form.taoBaoId.setValue(info.taobao_id)
    form.coins.setValue(info.golds)
  }

  initForm(){
    this.nowTime = new Date()
    this.activityDetailForm = this.fb.group({
      shopId: [ null, [ Validators.required ] ],
      postage: [ null, [ Validators.required ] ],
      startTime: [this.nowTime, [ Validators.required ]],
      endTime: [ new Date(this.nowTime.setMonth(this.nowTime.getMonth() + 1)), [ Validators.required ] ],
      productName: [ '', [ Validators.required ] ],
      goodsType: [ '', [ Validators.required ] ],
      quantity: [ '', [ Validators.required ] ],
      price: [ '', [ Validators.required ] ],
      taoBaoId: [ '', [ Validators.required ] ],
      coins: [ '', [ Validators.required ] ],
    })
  }

  //点击提交
  SubmitApplication(){
    console.log('点击提交申请')
    if(this.verifyAll()){
      console.log('验证通过')
      const info = this.packUpInfo()
      console.log(info)
      if(this.activityId>0){
        this.doEdit(info)
      }else{
        this.doAdd(info)
      }
    }
  }
  doAdd(info){
    this.activityDetailService.addActivity(info).subscribe((res)=>{
      console.log(res)
    })
  }
  doEdit(info){
    this.activityDetailService.editActivityInfo(this.activityId,info).subscribe((res)=>{
      console.log(res)
    })
  }
  //打包信息
  packUpInfo(){
    var form = this.activityDetailForm.controls
    this.activityInfo = {
      shop_id: form.shopId.value,
      postage_type: form.postage.value,
      begin_at: form.startTime.value,
      end_at: form.endTime.value,
      title: form.productName.value,
      number_of: form.quantity.value,
      taobao_id: form.taoBaoId.value,
      golds: form.coins.value,
      price: form.price.value,
      content: this.content,
      flow: null,
      thumb: this.imgArr
    }
    return this.activityInfo
  }
  //验证所有
  verifyAll() {
    console.log('验证')

    console.log(this.activityDetailForm)
    console.log(this.imgArr)
    console.log(this.content.length)
    if(this.activityDetailForm.invalid){
      console.log('invalid')
      return false
    }else if(this.imgArr.length<=0){
      return false
    }else if(this.content.length<=0){
      return false
    }else{
      return true
    }
  }

  //获取该商家所有店铺
  getShops() {
    //以下为虚拟数据
    this.activityDetailService.getShops().subscribe((res)=>{
      console.log(res)
      this.shops = res.data
    })
  }

  callBackImg(e){
    this.activityInfo.thumb = e;
  }

}
