import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubchildComponent } from './subchild.component';

describe('SubchildComponent', () => {
  let component: SubchildComponent;
  let fixture: ComponentFixture<SubchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
