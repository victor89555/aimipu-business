import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'my-loading',
  template: `
    <div class="mask-loading" *ngIf="show">
      <div class="load-effect" >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `,
  styles: [`
      .mask-loading{
        position: fixed;
        /*background-color: rgba(0, 0, 0, 0.3);*/
        height: 100%;
        width: 100%;
        left: 0px;
        top: 0px;
        z-index: 99999;
      }
      .load-effect{
        width: 100px;
        height: 100px;
        position: relative;
        margin: 50% auto 0 auto;
      }
      .load-effect span{
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #a0a2a3;;
        position: absolute;
        -webkit-animation: load 1.04s ease infinite;
      }
      @-webkit-keyframes load{
        0%{
          opacity: 1;
        }
        100%{
          opacity: 0.2;
        }
      }
      .load-effect span:nth-child(1){
        left: 0;
        top: 50%;
        margin-top:-8px;
        -webkit-animation-delay:0.13s;
      }
      .load-effect span:nth-child(2){
        left: 14px;
        top: 14px;
        -webkit-animation-delay:0.26s;
      }
      .load-effect span:nth-child(3){
        left: 50%;
        top: 0;
        margin-left: -8px;
        -webkit-animation-delay:0.39s;
      }
      .load-effect span:nth-child(4){
        top: 14px;
        right:14px;
        -webkit-animation-delay:0.52s;
      }
      .load-effect span:nth-child(5){
        right: 0;
        top: 50%;
        margin-top:-8px;
        -webkit-animation-delay:0.65s;
      }
      .load-effect span:nth-child(6){
        right: 14px;
        bottom:14px;
        -webkit-animation-delay:0.78s;
      }
      .load-effect span:nth-child(7){
        bottom: 0;
        left: 50%;
        margin-left: -8px;
        -webkit-animation-delay:0.91s;
      }
      .load-effect span:nth-child(8){
        bottom: 14px;
        left: 14px;
        -webkit-animation-delay:1.04s;
      }

    `]
})
export class LoadingComponent implements OnInit {

  @Input() show:boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
