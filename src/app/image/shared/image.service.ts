import { Injectable } from '@angular/core';

@Injectable()
export class ImageService{
    visibleImages = [];
    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }

}

const IMAGES = [
    {"id": 1, "category": "boats", "caption": "caption image_1", "url":"assets/image1.jpg"},
    {"id": 2, "category": "boats", "caption": "caption image_2", "url":"assets/image2.jpg"},
    {"id": 3, "category": "boats", "caption": "caption image_3", "url":"assets/image3.jpg"},
    {"id": 4, "category": "boats", "url":"assets/image4.jpg"},
    {"id": 5, "category": "boats",  "url":"assets/image5.jpg"},
    {"id": 6, "category": "boats", "caption": "caption image_6", "url":"assets/image6.jpg"},
    {"id": 7, "category": "boats", "caption": "caption image_7", "url":"assets/image7.jpg"},
    {"id": 8, "category": "boats", "caption": "caption image_8", "url":"assets/image8.jpg"},

]