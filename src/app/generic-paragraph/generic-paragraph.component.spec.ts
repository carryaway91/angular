import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericParagraphComponent } from './generic-paragraph.component';

describe('GenericParagraphComponent', () => {
  let component: GenericParagraphComponent;
  let fixture: ComponentFixture<GenericParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericParagraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
