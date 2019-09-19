import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { PicGallaryComponent } from './pic-gallary/pic-gallary.component';
import { ImageComponent } from './image/image.component';
import { ImageService } from './image/shared/image.service';
import { appRoutes } from '../routes';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PicGallaryComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
