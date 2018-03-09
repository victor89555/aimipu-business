import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  imageData = [
    {src:'../../../../assets/img/default-image.jpg'},
    {src:'../../../../assets/img/default-image.jpg'},
    {src:'../../../../assets/img/default-image.jpg'},
    {src:'../../../../assets/img/default-image.jpg'},
    {src:'../../../../assets/img/default-image.jpg'},
    {src:'../../../../assets/img/default-image.jpg'},
    {src:'../../../../assets/img/default-image.jpg'},
    {src:'../../../../assets/img/default-image.jpg'},
  ]

  constructor() { }

  ngOnInit() {
  }

  toSelectImage() {
    document.getElementById("activity-image").click();
  }
}
