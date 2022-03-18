import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from "./token";

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss']
})
export class ImgSliderComponent implements OnInit {
  listImage = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];

  index: number=0;

  itemWidth: number = 0;
  config = 4;

  constructor(
    @Inject(GalleryConfig)
    @Optional()
      config: number
  ) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit(): void {
    this.itemWidth = 100 / this.config;
  }

  next(idx: number) {
    if (idx === this.listImage.length-1) {
      return this.index = this.listImage.length-1;
    } else {
      return this.index += 1;
    }
  }

  previous(idx: number) {
    if (idx === 0) {
      return this.index = 0;
    } else {
      return this.index -= 1;
    }
  }

}
