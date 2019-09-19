import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-pic-gallary',
  templateUrl: './pic-gallary.component.html',
  styleUrls: ['./pic-gallary.component.css']
})
export class PicGallaryComponent implements OnChanges {

  @Input() filterBy?: string ='all'
  visibleImages: any[] = [];
  constructor(private imageService: ImageService) { 
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

}
