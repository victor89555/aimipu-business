import { Component, OnInit } from '@angular/core';
import {Count_Info} from './count_Info.model';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  _bordered = true;
  _loading = false;
  _pagination = false;
  _header = false;
  _title = true;
  _footer = false;
  _fixHeader = false;
  _size = 'small';

  countInfo: Count_Info = new Count_Info()
  applicationList: any = []
  reportLst: any = []
  constructor(private homeSevice: HomeService) {
  }

  ngOnInit() {
    //获取首页统计信息
    this.getCountInfo()

    //获取相关列表
    this.getApplicationList()
    this.getReportLst()

  }

  getCountInfo(){
    this.homeSevice.getCountInfo().subscribe((res)=>{
      console.log(res)
      this.countInfo = {
        activies: res.data.projects,
        applies: res.data.applies1,
        participants: res.data.applies2,
        reports: res.data.applies3,
      }
    })
  }

  getApplicationList(){
    //假数据
    for (let i = 1; i <= 10; i++) {
      this.applicationList.push({
        key        : i,
        name       : 'John Brown',
        age        : `${i}2`,
        address    : `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
      });
    }
  }

  getReportLst(){
    //假数据
    for (let i = 1; i <= 10; i++) {
      this.reportLst.push({
        key        : i,
        name       : 'John Brown',
        age        : `${i}2`,
        address    : `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
      });
    }
  }

}
