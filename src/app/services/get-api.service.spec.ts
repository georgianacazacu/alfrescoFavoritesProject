import { TestBed, inject } from '@angular/core/testing';

import { GetAPIService } from './get-api.service';

describe('GetAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAPIService]
    });
  });

  it('should be created', inject([GetAPIService], (service: GetAPIService) => {
    expect(service).toBeTruthy();
  }));
});
