import  { Routes } from "@angular/router";
import { PicGallaryComponent } from './app/pic-gallary/pic-gallary.component';
import { ImageComponent } from './app/image/image.component';

export const appRoutes:Routes = [
    {path:"", redirectTo:"/gallery", pathMatch: 'full'},
    {path:"gallery", component: PicGallaryComponent},
    {path:"image/:id", component: ImageComponent}]