import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionarydetailComponent } from './dictionarydetail.component';

describe('DictionarydetailComponent', () => {
  let component: DictionarydetailComponent;
  let fixture: ComponentFixture<DictionarydetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionarydetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionarydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
