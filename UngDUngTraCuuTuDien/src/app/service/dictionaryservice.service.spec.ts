import { TestBed } from '@angular/core/testing';

import { DictionaryserviceService } from './dictionaryservice.service';

describe('DictionaryserviceService', () => {
  let service: DictionaryserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionaryserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
