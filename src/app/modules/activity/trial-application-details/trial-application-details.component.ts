import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-trial-application-details',
  templateUrl: './trial-application-details.component.html',
  styleUrls: ['./trial-application-details.component.scss']
})
export class TrialApplicationDetailsComponent implements OnInit {

  title = '试用申请详情'
  data:any[] = []
  validateForm: FormGroup
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
  }

  open(e){
    document.getElementById('detail_info_side').style.right = '0px'
  }
  handleCancel(e){
    document.getElementById('detail_info_side').style.right = '-430px'
  }
}
