import { Component, OnChanges,OnInit,Output, Input } from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import { ActivatedRoute,Router} from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-pic-gallary',
  templateUrl: './pic-gallary.component.html',
  styleUrls: ['./pic-gallary.component.css']
})
export class PicGallaryComponent implements OnChanges {

  @Input() filterBy?: string ='all'
  @Output() myEvent = new EventEmitter();
  
  image:any;
  id:number;
  visibleImages: any[] = [];
  constructor(private imageService: ImageService,private route: ActivatedRoute, private router: Router) { 
    this.visibleImages = this.imageService.getImages();
  }


  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
 

}
