import { TestBed } from '@angular/core/testing';

import { PostalpayService } from './postalpay.service';

describe('PostalpayService', () => {
  let service: PostalpayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostalpayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
