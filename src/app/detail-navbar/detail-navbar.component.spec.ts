import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNavbarComponent } from './detail-navbar.component';

describe('DetailNavbarComponent', () => {
  let component: DetailNavbarComponent;
  let fixture: ComponentFixture<DetailNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
