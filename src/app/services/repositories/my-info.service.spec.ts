import { TestBed } from '@angular/core/testing';

import { MyInfoService } from './my-info.service';

describe('MyInfoService', () => {
  let service: MyInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
