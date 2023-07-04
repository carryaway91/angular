import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomConditionalsComponent } from './custom-conditionals.component';

describe('CustomConditionalsComponent', () => {
  let component: CustomConditionalsComponent;
  let fixture: ComponentFixture<CustomConditionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomConditionalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomConditionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
