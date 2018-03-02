/**
 * Created by zoushuiyun on 2016/12/26.
 */
import { Pipe, PipeTransform } from '@angular/core';
import {isNullOrUndefined} from "util";
import {GROUP_OPTION, sexOption, userStatusOption, yesNoOption} from "../../constant/dictionary";
import {myValidNull} from '../util/string-utils';


/**
 * 性别，从 dictionary 查找
 * one to one
 */
@Pipe({name: 'sexPipe'})
export class SexPipe implements PipeTransform {
  constructor(){}
  transform(value: number): string {
    let result = "";
    let sexDicts:any[]  = sexOption;
    for (let sex of sexDicts) {
      if(sex.key==value){
        result = sex.value;
        break;
      }
    }
    return result;
  }
}

/**
 * 1是0否状态，从 dictionary 查找
 * one to one
 */
@Pipe({name: 'yesNoPipe'})
export class YesNoPipe implements PipeTransform {
  constructor(){}
  transform(value: number): string {
    let result = "";
    let yesNoDicts:any[]  = yesNoOption;
    for (let o of yesNoDicts) {
      if(o.key==value){
        result = o.value;
        break;
      }
    }
    return result;
  }
}
/**
 * 用户状态，从 dictionary 查找
 * one to one
 */
@Pipe({name: 'userStatusPipe'})
export class UserStatusPipe implements PipeTransform {
  constructor(){}
  transform(value: number): string {
    let result = "";
    let userDicts:any[]  = userStatusOption;
    for (let user of userDicts) {
      if(user.key==value){
        result = user.value;
        break;
      }
    }
    return result;
  }
}
/**
 * 用户类型，从 dictionary 查找
 * one to one
 */
@Pipe({name: 'userGroupPipe'})
export class UserGroupPipe implements PipeTransform {
  constructor(){}
  transform(value: number): string {
    let result = "";
    let groupDicts:any[]  = GROUP_OPTION;
    for (let user of groupDicts) {
      if(user.key==value){
        result = user.value;
        break;
      }
    }
    return result;
  }
}
/**
 *  后台获取的字典 翻译器
 *
 *
 *  one to one
 */
@Pipe({name: 'dicsNamePipe'})
export class DicsNamePipe implements PipeTransform {
  constructor(){}
  transform(value: string,groupDicts:any[],key?:any,desc?:any ): string {
    let keyName:any = "value";
    let descName:any = "desc";
    if(!myValidNull(key)){
      keyName = key;
    }
    if(!myValidNull(desc)){
      descName = desc;
    }
    let result = "";
    for (let obj of groupDicts) {
      if(obj[keyName]==value){
        result = obj[descName];
        break;
      }
    }
    return result;
  }
}


/**
 * 字符串截取
 */
@Pipe({name: 'stringCutPipe'})
export class StringCutPipe implements PipeTransform {
  constructor(){}
  transform(value: string,args:number ): string {
    if(isNullOrUndefined(value)){
      return ""
    }
    if(value.length <= args) {
      return value;
    }else{
      return value.substring(0,args) ;
    }

  }
}

/**
 * 字符串截取 带。。。
 */
@Pipe({name: 'stringEllipsisCutPipe'})
export class stringEllipsisCutPipe implements PipeTransform {
  constructor(){}
  transform(value: string,args:number ): string {
    if(isNullOrUndefined(value)){
      return ""
    }
    if(value.length <= args) {
      return value;
    }else{
      return value.substring(0,args)+"..." ;
    }

  }
}
@Pipe({name: "filterPipe",pure:false})
export class FilterPipe {
  transform(array: Array<any>,filterName:string,filterValue:any): Array<any> {
    let result:Array<any>=new Array
    array.forEach((arr)=>{
      debugger
      if(arr[filterName]==filterValue){
        result.push(arr)
      }
    })
    return result;
  }
}

/**
 * 将arr中selected为true的元素排在前面 ---可自行扩展
 */
@Pipe({name: "selectedPipe",pure:false})
export class SelectedPipe {
  transform(array: Array<any>, args: string): Array<any> {
    let result:Array<any>=new Array
    array.forEach((arr)=>{
      if(arr.selected){
        result.push(arr)
      }
    })
    array.forEach((arr)=>{
      if(!arr.selected){
        result.push(arr)
      }
    })
    return result;
  }
}
