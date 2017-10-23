import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";
@Injectable()

export class GetAPIService {

  /*To make the unit test run UNCOMMENT these lines  - no need Http service because the data is mock* /
  /* constructor() { }*/

  constructor(private http: Http) {}

  private baseUrl = 'http://127.0.0.1:8080/alfresco/api/-default-/public/alfresco/versions/1/people/-me-/favorites';
  private data = {
    "list": {
      "pagination": {
        "count": 13,
        "hasMoreItems": false,
        "totalItems": 13,
        "skipCount": 0,
        "maxItems": 100
      },
      "entries": [
        {
          "entry": {
            "targetGuid": "8ecb267d-9d20-4bf6-9b2e-c1f002809cfb",
            "createdAt": "2017-09-16T15:55:37.585+0000",
            "target": {
              "site": {
                "id": "testsite",
                "guid": "8ecb267d-9d20-4bf6-9b2e-c1f002809cfb",
                "title": "testsite",
                "visibility": "PUBLIC",
                "preset": "site-dashboard",
                "role": "SiteManager"
              }
            }
          }
        },
        {
          "entry": {
            "targetGuid": "feb2abec-e80f-425f-be2d-480426404097",
            "createdAt": "2017-09-11T12:28:54.062+0000",
            "target": {
              "site": {
                "id": "string",
                "guid": "feb2abec-e80f-425f-be2d-480426404097",
                "title": "MyTestAlfresco",
                "description": "SampleSiteforNew",
                "visibility": "PUBLIC",
                "preset": "site-dashboard",
                "role": "SiteManager"
              }
            }
          }
        }
      ]
    }
  };


  /*To make the unit test run COMMENT these lines*/

  getData(): Observable<any> {
    let headers = new Headers();
    headers.append('Authorization', "Basic YWRtaW46YWRtaW4=");
    headers.append('Accept', 'application/json');
    return this.http.get(this.baseUrl, {headers: headers});
  }

  /*To make the unit test run UNCOMMENT these lines*/

  /*getData() {
   return this.data;
   }*/
}
