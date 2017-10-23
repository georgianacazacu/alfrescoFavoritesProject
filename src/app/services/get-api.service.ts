import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";
@Injectable()

export class GetAPIService {
  constructor() {
  }
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
        },
        {
          "entry": {
            "targetGuid": "56892354-94b8-43b5-9194-f67b1184f30d",
            "createdAt": "2017-09-07T09:00:06.644+0000",
            "target": {
              "site": {
                "id": "test",
                "guid": "56892354-94b8-43b5-9194-f67b1184f30d",
                "title": "test",
                "description": "test string",
                "visibility": "PUBLIC",
                "preset": "site-dashboard",
                "role": "SiteManager"
              }
            }
          }
        },
        {
          "entry": {
            "targetGuid": "3a4b1df5-d7fb-4b85-87d6-7634206c2f07",
            "createdAt": "2017-08-31T14:02:57.309+0000",
            "target": {
              "site": {
                "id": "P002",
                "guid": "3a4b1df5-d7fb-4b85-87d6-7634206c2f07",
                "title": "Test",
                "visibility": "PUBLIC",
                "preset": "site-dashboard",
                "role": "SiteManager"
              }
            }
          }
        },
        {
          "entry": {
            "targetGuid": "7f88cd31-4e9b-4615-a0d5-422aa2dad19f",
            "createdAt": "2017-08-30T09:32:55.549+0000",
            "target": {
              "site": {
                "id": "TET",
                "guid": "7f88cd31-4e9b-4615-a0d5-422aa2dad19f",
                "title": "stTEring",
                "description": "T",
                "visibility": "PUBLIC",
                "preset": "site-dashboard",
                "role": "SiteManager"
              }
            }
          }
        },
        {
          "entry": {
            "targetGuid": "62125c49-423e-48a8-98df-8c630d557600",
            "createdAt": "2017-08-30T09:24:18.357+0000",
            "target": {
              "site": {
                "id": "TETETET",
                "guid": "62125c49-423e-48a8-98df-8c630d557600",
                "title": "sfas",
                "description": "sasdtring",
                "visibility": "PUBLIC",
                "preset": "site-dashboard",
                "role": "SiteManager"
              }
            }
          }
        },
        {
          "entry": {
            "targetGuid": "a548200b-d1d7-4638-a08a-4019510066ce",
            "createdAt": "2017-08-30T05:51:15.376+0000",
            "target": {
              "site": {
                "id": "TEETTE",
                "guid": "a548200b-d1d7-4638-a08a-4019510066ce",
                "title": "ETETE",
                "description": "TETETET",
                "visibility": "PUBLIC",
                "preset": "site-dashboard",
                "role": "SiteManager"
              }
            }
          }
        },
        {
          "entry": {
            "targetGuid": "5f9718fc-66e8-4a41-b9ab-84a2cbb38993",
            "createdAt": "2017-08-30T04:11:08.376+0000",
            "target": {
              "site": {
                "id": "NewTest",
                "guid": "5f9718fc-66e8-4a41-b9ab-84a2cbb38993",
                "title": "NewTest",
                "description": "NewTest",
                "visibility": "PUBLIC",
                "preset": "site-dashboard",
                "role": "SiteManager"
              }
            }
          }
        },
        {
          "entry": {
            "targetGuid": "604c1a48-c074-4c5b-ae3b-f9b91a9832f5",
            "createdAt": "2017-08-29T16:51:43.247+0000",
            "target": {
              "site": {
                "id": "sd",
                "guid": "604c1a48-c074-4c5b-ae3b-f9b91a9832f5",
                "title": "sd",
                "description": "dsds",
                "visibility": "PUBLIC",
                "preset": "site-dashboard",
                "role": "SiteManager"
              }
            }
          }
        },
        {
          "entry": {
            "targetGuid": "5137ac2f-a83b-4b72-b4fb-746cea88d5be",
            "createdAt": "2017-08-29T14:47:13.849+0000",
            "target": {
              "site": {
                "id": "TestAPID",
                "guid": "5137ac2f-a83b-4b72-b4fb-746cea88d5be",
                "title": "TestAPID",
                "description": "TestAPID Creation using API",
                "visibility": "PRIVATE",
                "preset": "site-dashboard",
                "role": "SiteManager"
              }
            }
          }
        },
        {
          "entry": {
            "targetGuid": "525f9297-9373-42a5-b23e-29e0a47559cb",
            "createdAt": "2017-08-29T14:35:31.485+0000",
            "target": {
              "site": {
                "id": "zzzzzzzzz",
                "guid": "525f9297-9373-42a5-b23e-29e0a47559cb",
                "title": "ffffff",
                "description": "gsdg",
                "visibility": "PUBLIC",
                "preset": "site-dashboard",
                "role": "SiteManager"
              }
            }
          }
        },
        {
          "entry": {
            "targetGuid": "de0fec0a-9dee-4d7e-bc81-accb6fc35532",
            "createdAt": "2017-08-29T14:31:05.363+0000",
            "target": {
              "site": {
                "id": "gsdg",
                "guid": "de0fec0a-9dee-4d7e-bc81-accb6fc35532",
                "title": "dsgsd",
                "description": "gsdg",
                "visibility": "PUBLIC",
                "preset": "site-dashboard",
                "role": "SiteManager"
              }
            }
          }
        },
        {
          "entry": {
            "targetGuid": "e280f13d-6ee2-4c35-92a9-7da272db1c11",
            "createdAt": "2017-08-29T13:55:49.910+0000",
            "target": {
              "site": {
                "id": "TestAPI",
                "guid": "e280f13d-6ee2-4c35-92a9-7da272db1c11",
                "title": "TestAPI",
                "description": "TestAPI Creation using API",
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
  private baseUrl = 'http://127.0.0.1:8080/alfresco/api/-default-/public/alfresco/versions/1/people/-me-/favorites';

  getData() {
 /*   let headers = new Headers();
    headers.append('Authorization', "Basic YWRtaW46YWRtaW4=");
    headers.append('Accept', 'application/json');
    return this.http.get(this.baseUrl, {headers: headers});*/
    return this.data;
  }
}
