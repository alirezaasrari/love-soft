import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsHeaderComponent } from './tools-header.component';

describe('ToolsHeaderComponent', () => {
  let component: ToolsHeaderComponent;
  let fixture: ComponentFixture<ToolsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
