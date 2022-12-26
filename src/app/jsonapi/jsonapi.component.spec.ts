import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonapiComponent } from './jsonapi.component';

describe('JsonapiComponent', () => {
  let component: JsonapiComponent;
  let fixture: ComponentFixture<JsonapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
