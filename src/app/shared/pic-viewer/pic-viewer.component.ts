import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pic-viewer',
  templateUrl: './pic-viewer.component.html',
  styleUrls: ['./pic-viewer.component.scss']
})
export class PicViewerComponent implements OnInit,OnChanges {


  @Input() picList:any[] = []
  @Input() show:boolean = false
  @Input() picIdx:number = 0

  @Output() onClose:EventEmitter<any> = new EventEmitter();

  picNum:number = 0
  showPrev:boolean = false
  showNext:boolean = false


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.picNum = this.picList?this.picList.length:0
    console.log(this.picNum)
    this.checkList()
  }

  //上一页
  doPrev(){
    --this.picIdx
    this.checkList()
  }

  //下一页
  doNext(){
    ++this.picIdx
    this.checkList()
  }

  checkList(){
    this.picIdx<=0 && (this.showPrev = false)
    this.picIdx>=this.picNum-1 && (this.showNext = false)
    this.picIdx>0 && (this.showPrev = true)
    this.picIdx<this.picNum-1 && (this.showNext = true)
  }

  close(){
    this.show = false
    this.onClose.emit(this.show)
  }

}
