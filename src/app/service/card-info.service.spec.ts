import { TestBed } from '@angular/core/testing';

import { CardInfoService } from './card-info.service';

describe('CardInfoService', () => {
  let service: CardInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
