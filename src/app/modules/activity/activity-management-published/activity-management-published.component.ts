import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'activity-management-published',
  templateUrl: './activity-management-published.component.html',
  styleUrls: ['./activity-management-published.component.scss']
})
export class ActivityManagementPublishedComponent implements OnInit {

  title = '已发布活动'
  data = [
    {
      title: '商品标题',
      source: '淘宝',
      shopName: 'xxxx淘宝店',
      issuedQuantity: 50,
      releaseTime: '2018-02-28',
      applicationNum: 100,
      submittedNum: 20,
      submitTime: '2018-02-28',
      applicationStatus: '待审核',
      auditOpinion: '审核意见详情内容随便写',
      activityTime: '2018-02-28~2018-04-01',
      totalNum: '100/50/45/30',
      status: 1,
    },
    {
      title: '商品标题',
      source: '淘宝',
      shopName: 'xxxx淘宝店',
      issuedQuantity: 50,
      releaseTime: '2018-02-28',
      applicationNum: 100,
      submittedNum: 20,
      submitTime: '2018-02-28',
      applicationStatus: '待审核',
      auditOpinion: '审核意见详情内容随便写',
      activityTime: '2018-02-28~2018-04-01',
      totalNum: '100/50/45/30',
      status: 2,
    },
    {
      title: '商品标题',
      source: '淘宝',
      shopName: 'xxxx淘宝店',
      issuedQuantity: 50,
      releaseTime: '2018-02-28',
      applicationNum: 100,
      submittedNum: 20,
      submitTime: '2018-02-28',
      applicationStatus: '待审核',
      auditOpinion: '审核意见详情内容随便写',
      activityTime: '2018-02-28~2018-04-01',
      totalNum: '100/50/45/30',
      status: 1,
    },
    {
      title: '商品标题',
      source: '淘宝',
      shopName: 'xxxx淘宝店',
      issuedQuantity: 50,
      releaseTime: '2018-02-28',
      applicationNum: 100,
      submittedNum: 20,
      submitTime: '2018-02-28',
      applicationStatus: '待审核',
      auditOpinion: '审核意见详情内容随便写',
      activityTime: '2018-02-28~2018-04-01',
      totalNum: '100/50/45/30',
      status: 2,
    },
  ];

  validateForm: FormGroup;

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      select: [ 1 ],
    });
  }

}
