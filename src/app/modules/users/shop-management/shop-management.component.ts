import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {SHOP_ORIGIN, SHOP_STATUS} from '../../../constant/dictionary';
import {ShopService} from './shop.service';
import {myValidNull} from '../../../shared/util/string-utils';
import {ModalHelper} from '../../../shared/modal.helper';
import {EditShopComponent} from './edit-shop/edit-shop.component';
import {CacheService} from '../../../shared/service/cache.service';

@Component({
  selector: 'app-shop-management',
  templateUrl: './shop-management.component.html',
  styleUrls: ['./shop-management.component.scss']
})
export class ShopManagementComponent implements OnInit {

  title = '店铺管理'
  isLoading:boolean=false;
  keyword:any;
  origin:any;//1淘宝 2京东.
  status:any;
  page:any={current_page:1,per_page:10,total: 0,data:[]};

  shopStatus:any[]=SHOP_STATUS;
  shopOrigin:any[]=SHOP_ORIGIN

  constructor(private message:NzMessageService,
              private modalHelper:ModalHelper,
              private shopService:ShopService,
              private cacheService: CacheService) { }

  ngOnInit() {
    this.initPage();
  }

  initPage(){
    this.isLoading = true;
    this.page.keyword = this.keyword;
    this.page.origin = this.origin;
    this.page.status = this.status;
    this.shopService.pagination(this.page).subscribe((resp)=>{
      if(resp.status=="success"){
        this.page = resp.data;
      }else {
        this.message.warning(resp.message);
      }
      this.isLoading = false;
    },error=>{
      console.log(error)
      this.isLoading = false;
    })
  }
  search(){
    this.page={current_page:1,per_page:10,total: 0,data:[]};
    this.initPage();
  }

  changePageNo(pageNo){
    this.page={current_page:1,per_page:10,total: 0,data:[]};
    this.page.page=pageNo;
    this.initPage();
  }

  editEntity = (entity) => {
    let temp:boolean = myValidNull(entity.id)?true:false;
    let bak = {};
    Object.assign(bak,entity);
    this.modalHelper.open(EditShopComponent, {entity:bak}, 'lg',{title:'店铺信息',showConfirmLoading:true,footer:false}).subscribe(u => {
      console.log(u);
      temp?this.search():this.initPage();
      this.shopService.getAllShops().subscribe((res)=>{
        this.cacheService.setShops(res.data);
      })
    },(error)=>{
      console.error("弹窗回调出错：",error);
    })
  }

  delete = (data) => {
    this.shopService.deleteObj(data.id).subscribe((data)=>{
      if(this.page.data.length>1){
        this.changePageNo(this.page.current_page);
      }else {
        this.search()
      }
      this.message.success("删除成功")
    },error=>console.log("删除出错，后续处理"));
  }

}
