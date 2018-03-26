import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-trial-application-list',
  templateUrl: './trial-application-list.component.html',
  styleUrls: ['./trial-application-list.component.scss']
})
export class TrialApplicationListComponent implements OnInit {

  title = '试用申请列表'
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
