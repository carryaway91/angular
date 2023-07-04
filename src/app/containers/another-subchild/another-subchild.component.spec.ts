import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherSubchildComponent } from './another-subchild.component';

describe('AnotherSubchildComponent', () => {
  let component: AnotherSubchildComponent;
  let fixture: ComponentFixture<AnotherSubchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherSubchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherSubchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
