import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicGallaryComponent } from './pic-gallary/pic-gallary.component';

describe('PicGallaryComponent', () => {
  let component: PicGallaryComponent;
  let fixture: ComponentFixture<PicGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
