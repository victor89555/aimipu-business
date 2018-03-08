import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-trial-report-details',
  templateUrl: './trial-report-details.component.html',
  styleUrls: ['./trial-report-details.component.scss']
})
export class TrialReportDetailsComponent implements OnInit {

  data:any[] = []
  validateForm: FormGroup
  isVisible = false;
  style: any = {
    top: '20px'
  };
  isVisibleDetail = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      select: [ 1 ],
    });
    this.data = [
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',auditTime:'2018-02-28',submitTime:'2018-02-28',completeTime:'2018-02-28',terminateTime:'2018-02-28',modifyTime:'2018-02-28',id:'逍遥一',orderNum:'466995111'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',auditTime:'2018-02-28',submitTime:'2018-02-28',completeTime:'2018-02-28',terminateTime:'2018-02-28',modifyTime:'2018-02-28',id:'逍遥一',orderNum:'466995111'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',auditTime:'2018-02-28',submitTime:'2018-02-28',completeTime:'2018-02-28',terminateTime:'2018-02-28',modifyTime:'2018-02-28',id:'逍遥一',orderNum:'466995111'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',auditTime:'2018-02-28',submitTime:'2018-02-28',completeTime:'2018-02-28',terminateTime:'2018-02-28',modifyTime:'2018-02-28',id:'逍遥一',orderNum:'466995111'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',auditTime:'2018-02-28',submitTime:'2018-02-28',completeTime:'2018-02-28',terminateTime:'2018-02-28',modifyTime:'2018-02-28',id:'逍遥一',orderNum:'466995111'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',auditTime:'2018-02-28',submitTime:'2018-02-28',completeTime:'2018-02-28',terminateTime:'2018-02-28',modifyTime:'2018-02-28',id:'逍遥一',orderNum:'466995111'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',auditTime:'2018-02-28',submitTime:'2018-02-28',completeTime:'2018-02-28',terminateTime:'2018-02-28',modifyTime:'2018-02-28',id:'逍遥一',orderNum:'466995111'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',auditTime:'2018-02-28',submitTime:'2018-02-28',completeTime:'2018-02-28',terminateTime:'2018-02-28',modifyTime:'2018-02-28',id:'逍遥一',orderNum:'466995111'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',auditTime:'2018-02-28',submitTime:'2018-02-28',completeTime:'2018-02-28',terminateTime:'2018-02-28',modifyTime:'2018-02-28',id:'逍遥一',orderNum:'466995111'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',auditTime:'2018-02-28',submitTime:'2018-02-28',completeTime:'2018-02-28',terminateTime:'2018-02-28',modifyTime:'2018-02-28',id:'逍遥一',orderNum:'466995111'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',auditTime:'2018-02-28',submitTime:'2018-02-28',completeTime:'2018-02-28',terminateTime:'2018-02-28',modifyTime:'2018-02-28',id:'逍遥一',orderNum:'466995111'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',auditTime:'2018-02-28',submitTime:'2018-02-28',completeTime:'2018-02-28',terminateTime:'2018-02-28',modifyTime:'2018-02-28',id:'逍遥一',orderNum:'466995111'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',auditTime:'2018-02-28',submitTime:'2018-02-28',completeTime:'2018-02-28',terminateTime:'2018-02-28',modifyTime:'2018-02-28',id:'逍遥一',orderNum:'466995111'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',auditTime:'2018-02-28',submitTime:'2018-02-28',completeTime:'2018-02-28',terminateTime:'2018-02-28',modifyTime:'2018-02-28',id:'逍遥一',orderNum:'466995111'},
    ]
  }

  open(e){
    this.isVisible = true;
  }
  handleCancel(e){
    this.isVisible = false;
  }
  handleOk(e){
    this.isVisible = false;
  }
  openReportDetail(e){
    this.isVisibleDetail = true;
  }
  handleCancelDetail(e){
    this.isVisibleDetail = false;
  }
  handleOkDetail(e){
    this.isVisibleDetail = false;
  }
}
