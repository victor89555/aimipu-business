import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ImageService} from './image.service';

export class FileHolder {
  public serverResponse: { status: number, response: any };
  public pending: boolean = false;

  constructor(public src: string, public file: File) {
  }
}

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  providers: [ ImageService]
})
export class ImageUploadComponent implements OnInit {

  @Input() max: number = 100;
  @Input() imageData: any[] = [];
  @Input() url: string;
  @Input() preview: boolean = true;
  @Input() maxFileSize: number;
  @Input() withCredentials: boolean = false;
  @Input() partName: string;

  @Output()
  isPending: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  onFileUploadFinish: EventEmitter<FileHolder> = new EventEmitter<FileHolder>();
  @Output()
  onRemove: EventEmitter<FileHolder> = new EventEmitter<FileHolder>();

  imageFilesLength = 0
  canAdd: boolean = true
  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  toSelectImage() {
    document.getElementById("activity-image").click();
  }

  checkImageData() {
    this.canAdd = this.imageFilesLength >= this.max ? false : true
  }

  addImg(files) {
    var file = files[0];
    let _this = this

    // 接受 jpeg, jpg, png 类型的图片
    if (!/\/(?:jpeg|jpg|png)/i.test(file.type)) return;

    var reader = new FileReader();
    reader.onload = function() {
      var result = this.result;
      var img = new Image();

      // 如果图片小于 200kb，不压缩
      // if (result.length <= maxsize) {
      //   toPreviewer(result);
      //   return;
      // }

      img.onload = function() {
        // var compressedDataUrl = compress(img, file.type);
        toPreviewer(img);
        img = null;
      };

      img.src = result;
    };

    reader.readAsDataURL(file);

    function toPreviewer(img) {
      console.dir(img)

      _this.imageData.push(img)
    }

    function compress(img, fileType) {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext('2d');

      var width = img.width;
      var height = img.height;

      canvas.width = width;
      canvas.height = height;

      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, width, height);

      // 压缩
      var base64data = canvas.toDataURL(fileType, 0.75);
      canvas = ctx = null;

      return base64data;
    }

  }

  delImg(i){
    // console.log('delImg:' + i);
    this.imageData.splice(i,1)
    this.imageFilesLength--
    this.checkImageData();
  }
  fileChange(files: FileList) {
    // console.log('fileChange');
    // console.log(files);
    this.imageFilesLength += files.length
    this.addImg(files);
    this.checkImageData();
  }

  fileOver(e) {
    console.log('fileOver');
    console.log(e)
  }
}
