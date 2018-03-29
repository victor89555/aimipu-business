import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ActivityInfo} from './activity-detail.model';
import {NzMessageService} from 'ng-zorro-antd';
import {ActivityService} from '../share/service/activity.service';

@Component({
  selector: 'activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss'],
})
export class ActivityDetailComponent implements OnInit {

  title = '发布试用活动'
  activityId = null
  activityDetailForm: FormGroup
  shops: any[] = []
  activityInfo: ActivityInfo = new ActivityInfo()
  isLoading:boolean = false
  imgArr:any[]=[];



  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private activityService: ActivityService,
              private message: NzMessageService,
              private router: Router) {

  }

  ngOnInit() {
    this.getShops()
    this.initForm()
    this.route.params.forEach((params: Params) => {
      this.activityId = params['id'];
      // console.log(this.activityId)
      this.initEntity();
    });

  }

  initEntity(){
    if(this.activityId>0){
      this.title = '修改试用活动信息'
      this.isLoading = true
      this.activityService.getActivityInfo(this.activityId).subscribe((res)=>{
        this.activityInfo = res.data.project
        this.isLoading = true
        console.log(this.activityInfo)
      })
    }else{
      this.title = '发布试用活动'
    }
  }

  initForm(){
    this.activityDetailForm = this.fb.group({
      shopId: [ this.activityInfo.shop_id, [ Validators.required ] ],
      postage: [ this.activityInfo.postage_type, [ Validators.required ] ],
      startTime: [this.activityInfo.begin_at, [ Validators.required ]],
      endTime: [ this.activityInfo.end_at, [ Validators.required ] ],
      productName: [ this.activityInfo.title,
        [ Validators.required,Validators.maxLength(100) ] ],
      imgArr: [ this.activityInfo.thumb],
      goodsType: [ null],
      quantity: [ this.activityInfo.number_of, [ Validators.required ] ],
      price: [ this.activityInfo.price, [ Validators.required ] ],
      taoBaoId: [ this.activityInfo.taobao_id, [ Validators.required ] ],
      coins: [ this.activityInfo.golds, [ Validators.required ] ],
      flow: [this.activityInfo.flow, [ Validators.required]],
      content: [this.activityInfo.content, [ Validators.required]]
    })
  }

  //点击提交
  SubmitApplication(){
    console.log('点击提交申请')
    console.log(this.activityInfo)
    if(this.activityDetailForm.invalid){
      for (const i in this.activityDetailForm.controls) {
        this.activityDetailForm.controls[i].markAsDirty();
      }
      return false
    }else{
      console.log('验证通过')
      if(this.activityId>0){
        this.doEdit()
      }else{
        this.doAdd()
      }
    }
  }
  doAdd(){
    this.isLoading = true
    this.activityService.addActivity(this.activityInfo).subscribe((res)=>{
      console.log(res)
      this.isLoading = false
      this.message.success('添加成功')
      this.router.navigateByUrl('/auth-guard/activity/activity-pending')
    })
  }
  doEdit(){
    this.isLoading = true
    this.activityService.editActivityInfo(this.activityId,this.activityInfo).subscribe((res)=>{
      console.log(res)
      this.isLoading = false
      this.message.success('修改成功')
      this.router.navigateByUrl('/auth-guard/activity/activity-pending')
    })
  }

  //获取该商家所有店铺
  getShops() {
    this.isLoading = true
    this.activityService.getShops().subscribe((res)=>{
      console.log(res)
      this.shops = res.data
      this.activityInfo.shop_id = this.shops[0].id
      this.isLoading = false
    })
  }

  callBackImg(e){
    this.activityInfo.thumb = e;
  }
  callBackFlow(e){
    this.activityInfo.flow = e;
  }
  callBackContent(e){
    this.activityInfo.content = e;
  }

  getFormControl(name) {
    return this.activityDetailForm.controls[ name ];
  }


  newArray = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  disabledSeconds = (h) => {
    return this.newArray(1, 60);
  };
  disabledMinutes = (h) => {
      return this.newArray(1, 60);
  };
}
