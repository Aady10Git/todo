import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListInputFieldComponent } from './new-list-input-field.component';

describe('NewListInputFieldComponent', () => {
  let component: NewListInputFieldComponent;
  let fixture: ComponentFixture<NewListInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewListInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
