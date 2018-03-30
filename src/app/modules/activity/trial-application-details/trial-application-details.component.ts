import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {ActivityService} from '../share/service/activity.service';

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


  style: any = {
    top: '20px'
  };

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private activityService: ActivityService) { }

  ngOnInit() {
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
      this.selectTab(this.index)
      this.isLoading = false
    })
  }

}
