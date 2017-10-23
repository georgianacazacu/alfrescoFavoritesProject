import {TestBed, inject} from '@angular/core/testing';
import {GetAPIService} from './get-api.service';

describe('GetAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAPIService]
    });
  });

  it('should be properly created', inject([GetAPIService], (service: GetAPIService) => {
    expect(service).toBeTruthy();
    expect(service.getData).toBeDefined();

  }));


  it('should return the object', inject([GetAPIService], (service: GetAPIService) => {
    let data = service.getData();
    expect(data).toBeDefined();
    expect(data.list).toBeTruthy();
    expect(data.list.entries).toBeTruthy();
  }));

});
