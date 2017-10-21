import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";
@Injectable()

export class GetAPIService {
  constructor(private http: Http) {
  }

  private baseUrl = 'http://127.0.0.1:8080/alfresco/api/-default-/public/alfresco/versions/1/people/-me-/favorites';

  getData(): Observable<any> {
    let headers = new Headers();
    headers.append('Authorization', "Basic YWRtaW46YWRtaW4=");
    headers.append('Accept', 'application/json');
    return this.http.get(this.baseUrl, {headers: headers});
  }
}
