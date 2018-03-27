import { Component, OnInit } from '@angular/core';
import {CacheService} from '../../../shared/service/cache.service';
import {User} from '../../users/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currUser: User = new User()
  userHeadImg: string;
  constructor( private cacheService: CacheService) { }

  ngOnInit() {
    this.currUser = this.cacheService.getCurrUser();
  }
}
