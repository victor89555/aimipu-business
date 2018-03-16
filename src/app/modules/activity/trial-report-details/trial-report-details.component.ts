import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-trial-report-details',
  templateUrl: './trial-report-details.component.html',
  styleUrls: ['./trial-report-details.component.scss']
})
export class TrialReportDetailsComponent implements OnInit {

  title = '试用申请详情'
  data:any[] = []
  validateForm: FormGroup
  $detail_info_side = document.getElementById('detail_info_side')
  style: any = {
    top: '20px'
  };
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      select: [ 1 ],
    });
    this.data = [
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',status:0},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',status:1,auditTime:'2018-02-28'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',status:2,auditTime:'2018-02-28'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',status:0},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',status:1,auditTime:'2018-02-28'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',status:2,auditTime:'2018-02-28'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',status:0},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',status:1,auditTime:'2018-02-28'},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',status:0},
      {user:'张三',phone:'15985800000',appTime:'2018-02-28',status:2,auditTime:'2018-02-28'},
    ]
    this.$detail_info_side = document.getElementById('detail_info_side')
  }

  open(e){
    this.$detail_info_side.style.right = '0px'
  }
  handleCancel(e){
    this.$detail_info_side.style.right = '-430px'
  }

}
