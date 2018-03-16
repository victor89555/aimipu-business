import {Component, OnChanges, OnInit} from '@angular/core';
import {ImageService} from './image.service';

@Component({
  selector: 'img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.scss']
})
export class ImgUploadComponent implements OnInit {
  imageData = []
  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  toSelectImage() {
    document.getElementById("activity-image").click();
  }

  delImg(i){
    console.log('delImg');
  }
  onChange(e) {
    console.log(e.target.files);
  }
}
