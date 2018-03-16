import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shop-management',
  templateUrl: './shop-management.component.html',
  styleUrls: ['./shop-management.component.scss']
})
export class ShopManagementComponent implements OnInit {

  title = '店铺管理'
  validateForm: FormGroup
  _startDate = ''
  _endDate = ''
  options = [];
  selectedOption;
  data = [
    {
      userId: '001',
      source: '淘宝',
      shopName: '淘宝店铺',
      webSrc: 'www.baidu.com',
      status: '已审核',
      auditTime: '2018-05-20'
    },
    {
      userId: '002',
      source: '京东',
      shopName: '京东店铺',
      webSrc: 'www.baidu.com',
      status: '待审核',
      auditTime: '2018-05-20'
    },
    {
      userId: '001',
      source: '淘宝',
      shopName: '淘宝店铺',
      webSrc: 'www.baidu.com',
      status: '不通过',
      auditTime: '2018-05-20'
    },
    {
      userId: '001',
      source: '淘宝',
      shopName: '淘宝店铺',
      webSrc: 'www.baidu.com',
      status: '已审核',
      auditTime: '2018-05-20'
    },
    {
      userId: '002',
      source: '京东',
      shopName: '京东店铺',
      webSrc: 'www.baidu.com',
      status: '待审核',
      auditTime: '2018-05-20'
    },
    {
      userId: '001',
      source: '淘宝',
      shopName: '淘宝店铺',
      webSrc: 'www.baidu.com',
      status: '不通过',
      auditTime: '2018-05-20'
    },
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      textInput: [ '', [ Validators.required ] ],
      status: [ 'Unaudited' ]
    })
    this.options = [
      { value: null, label: '全部' },
      { value: '1', label: '待审核' },
      { value: '2', label: '已审核' },
      { value: '3', label: '不通过' }
    ]
    this.selectedOption = this.options[0]
  }

}
