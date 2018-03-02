import { Component, OnInit } from '@angular/core';
import {CurrUserService} from '../../../shared/service/curr-user.service';
import {CurrUserModel} from '../../../shared/models/curr-user.model';
import {CacheService} from '../../../shared/service/cache.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isCollapsed = false;
  isCollapsedRight = false;
  currUser:CurrUserModel=  new CurrUserModel(null,null,null);
  constructor( private cacheService: CacheService,
    private currUserService:CurrUserService,) { }

  ngOnInit() {
    this.currUser = this.cacheService.getCurrUser()
    this.currUserService.currUserChange.subscribe((currUserModel) => {
      this.currUser = currUserModel;
    });
  }
}
