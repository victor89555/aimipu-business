import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-trial-report-list',
  templateUrl: './trial-report-list.component.html',
  styleUrls: ['./trial-report-list.component.scss']
})
export class TrialReportListComponent implements OnInit {

  title = '试用报告列表'
  validateForm: FormGroup;
  _startDate = ''
  _endDate = ''
  data = [
    {
      id: 1,
      shopName: '某某淘宝店',
      source: '淘宝',
      postage: '邮费',
      number: 100,
      price: 20,
      endTime: '2018-02-25'
    },
    {
      id: 1,
      shopName: '某某淘宝店',
      source: '淘宝',
      postage: '邮费',
      number: 100,
      price: 20,
      endTime: '2018-02-25'
    },
    {
      id: 1,
      shopName: '某某淘宝店',
      source: '淘宝',
      postage: '免邮费',
      number: 100,
      price: 20,
      endTime: '2018-02-25'
    },
    {
      id: 1,
      shopName: '某某淘宝店',
      source: '淘宝',
      postage: '邮费',
      number: 100,
      price: 20,
      endTime: '2018-02-25'
    },
    {
      id: 1,
      shopName: '某某淘宝店',
      source: '淘宝',
      postage: '邮费',
      number: 100,
      price: 20,
      endTime: '2018-02-25'
    },
    {
      id: 1,
      shopName: '某某淘宝店',
      source: '淘宝',
      postage: '邮费',
      number: 100,
      price: 20,
      endTime: '2018-02-25'
    },
    {
      id: 1,
      shopName: '某某淘宝店',
      source: '淘宝',
      postage: '邮费',
      number: 100,
      price: 20,
      endTime: '2018-02-25'
    },
    {
      id: 1,
      shopName: '某某淘宝店',
      source: '淘宝',
      postage: '邮费',
      number: 100,
      price: 20,
      endTime: '2018-02-25'
    },
    {
      id: 1,
      shopName: '某某淘宝店',
      source: '淘宝',
      postage: '邮费',
      number: 100,
      price: 20,
      endTime: '2018-02-25'
    },
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      textInput: [ '', [ Validators.required ] ]
    })
  }

}
