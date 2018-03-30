import {
  ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnInit,
  Output
} from '@angular/core';
import {UPLOAD_DOMAIN} from '../../constant/config';

@Component({
  selector: 'my-editor',
  templateUrl: './my-editor.component.html',
  styles: [`
    /*:host ::ng-deep a[href="https://www.froala.com/wysiwyg-editor?k=u"] {display: none !important;}*/
  `],
  providers:[]
})
export class MyEditorComponent implements OnInit,DoCheck {
  ngDoCheck(): void {
    this.callBack.emit(this.content);
  }


  @Input() content:any;
  @Output() callBack= new EventEmitter<any>();

  introductionOption:any={};

  ref:any;
  constructor(ref:ChangeDetectorRef) {
    this.ref = ref;
  }

  ngOnInit() {

    this.initFroala();
  }


  initFroala(){
    let $this = this;
    this.introductionOption = {
      language: 'zh_cn',
      heightMin: 200,
      heightMax: 600,
      placeholderText: '请输入信息',
      charCounterCount: true,
      toolbarVisibleWithoutSelection:true,
      toolbarButtons: ['fullscreen','fontSize', 'color', '|',
        'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
        'paragraphFormat', 'align',/* 'formatOL', 'formatUL',*/ 'outdent', 'indent', /*'quote',*/ '-',
        'insertLink', 'insertImage', 'insertHR',/* 'insertVideo', 'insertFile', 'insertTable',*/ '|',
        /*'emoticons',*/ 'specialCharacters', 'selectAll', 'clearFormatting', '|',
        'help','html', 'undo', 'redo'
      ],
      quickInsertButtons:['image', 'ul', 'ol', 'hr'],
      // imageEditButtons:['imageDisplay', 'imageAlign', 'imageInfo', 'imageRemove'],
      //Image
      imageAllowedTypes:['jpeg', 'jpg', 'png', 'gif'],
      imageDefaultWidth: 300,
      // 上传图片，视频等稳健配置
      // imageUploadMethod: 'PUT',
      imageUploadURL:UPLOAD_DOMAIN+"?type=editor",//GLOBAL.INCONFIG.getIP()+接口名称,
      // imageUploadParams:{qiniuKey:"111111111"},//接口其他传参,默认为空对象{},/*,imgName:this.imgName*/
      events: {
             }
    }
  }

}

