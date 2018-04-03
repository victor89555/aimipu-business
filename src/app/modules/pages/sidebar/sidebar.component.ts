import { Component, OnInit } from '@angular/core';
import {CacheService} from '../../../shared/service/cache.service';
import {CurrUserService} from '../../../shared/service/curr-user.service';
import {CurrUserModel} from '../../../shared/models/curr-user.model';
import {LoginService} from '../login/login.service';
import {AuthorizationService} from 'rebirth-permission';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers:[LoginService]
})
export class SidebarComponent implements OnInit {
  currUser:CurrUserModel=  new CurrUserModel(null,null,null);
  constructor( private cacheService: CacheService,
               private authorizationService: AuthorizationService,
               private loginService:LoginService,
               private router:Router,
               private currUserService:CurrUserService) { }

  ngOnInit() {
    this.currUser = this.cacheService.getCurrUser();
    this.currUserService.currUserChange.subscribe((currUserModel) => {
      this.currUser = currUserModel;
    });
  }

  logout(){
      this.loginService.logout().subscribe((resp)=>{
        this.cacheService.clear();
        this.currUserService.clearCurrUser();
        this.authorizationService.logout();
        this.router.navigate(["/login"])
      },error=>{

      })
  }
}
