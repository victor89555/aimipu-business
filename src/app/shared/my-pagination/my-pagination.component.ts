/**
 * Created by zoushuiyun on 2017/4/24.
 */
import {
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges,
  SimpleChanges
} from "@angular/core";
@Component({
  selector: 'my-pagination',
  styleUrls: ['./my-pagination.component.scss'],
  templateUrl:'./my-pagination.component.html',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyPaginationComponent implements OnChanges{

  static EFFECT_PAGE_RANGE_KEYS = ['total', 'pageSize', 'pageNo'];
  @Input() total = 0;
  @Input() pageNo = 1;
  @Input() pageSize:number=10;

  @Output() pageNoChange = new EventEmitter<number>()

  totalPage = 0;

  goPageNo:number

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    const shouldUpdateRanges = MyPaginationComponent.EFFECT_PAGE_RANGE_KEYS.some(key => !!changes[key]);
    if (shouldUpdateRanges) {
      this.totalPage = this.getTotalPage();
      this.pageNo = Math.max(Math.min(this.pageNo, this.totalPage), 1);
    }
  }
  private getTotalPage() {
    return Math.ceil(this.total / this.pageSize);
  }

  prev(): void {
    if (this.hasPrev()) {
      this.onpageNoChange(this.pageNo - 1);
    }
  }

  next(): void {
    if (this.hasNext()) {
      this.onpageNoChange(this.pageNo + 1);
    }
  }
  hasPrev(): boolean {
    return this.pageNo > 1;
  }

  hasNext(): boolean {
    return this.pageNo < this.totalPage;
  }

  onpageNoChange(pageNo: number) {
    if (this.pageNo !== pageNo) {
      this.goPageNo = null
      this.pageNoChange.emit(pageNo);
    }
  }
  gotoPageNo(pageNo:number){
    if (!isNaN(pageNo)&&this.pageNo !== pageNo) {
      this.pageNo = Math.min(pageNo, this.totalPage);
      this.goPageNo = this.pageNo
      this.pageNoChange.emit(this.pageNo);
    }
  }
}
