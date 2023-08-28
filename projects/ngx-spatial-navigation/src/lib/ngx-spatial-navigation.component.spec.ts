import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSpatialNavigationComponent } from './ngx-spatial-navigation.component';

describe('NgxSpatialNavigationComponent', () => {
  let component: NgxSpatialNavigationComponent;
  let fixture: ComponentFixture<NgxSpatialNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSpatialNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSpatialNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
