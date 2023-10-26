import { TestBed } from '@angular/core/testing';

import { CheckBrowserService } from './check-browser.service';

describe('CheckBrowserService', () => {
  let service: CheckBrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckBrowserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
