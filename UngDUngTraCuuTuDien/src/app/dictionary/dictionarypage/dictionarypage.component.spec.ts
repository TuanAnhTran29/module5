import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionarypageComponent } from './dictionarypage.component';

describe('DictionarypageComponent', () => {
  let component: DictionarypageComponent;
  let fixture: ComponentFixture<DictionarypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictionarypageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionarypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
