import {TestBed, inject} from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';
import {GetAPIService} from './get-api.service';
import {Http, HttpModule, XHRBackend, Response, ResponseOptions} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";

describe('GetAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAPIService, Http, HttpModule,
        {provide: XHRBackend, useClass: MockBackend},
      ],
      imports: [HttpModule, BrowserModule]
    });
  });

  it('should be created', inject([GetAPIService, XHRBackend], (service, mockBackend) => {
    const mockResponse = {
          data: [
            { id: 0, name: 'Video 0' },
            { id: 1, name: 'Video 1' },
            { id: 2, name: 'Video 2' },
            { id: 3, name: 'Video 3' },
          ]
        };
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });
    expect(service).toBeTruthy();
  }));
});
