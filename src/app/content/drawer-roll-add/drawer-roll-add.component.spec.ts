import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerRollAddComponent } from './drawer-roll-add.component';

describe('DrawerRollAddComponent', () => {
  let component: DrawerRollAddComponent;
  let fixture: ComponentFixture<DrawerRollAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerRollAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerRollAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
