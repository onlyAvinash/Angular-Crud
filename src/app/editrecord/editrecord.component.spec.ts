import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrecordComponent } from './editrecord.component';

describe('EditrecordComponent', () => {
  let component: EditrecordComponent;
  let fixture: ComponentFixture<EditrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditrecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
