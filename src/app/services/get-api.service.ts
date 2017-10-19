import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Site} from "../model/siteModel";
import {File} from "../model/fileModel";
import {Observable} from "rxjs";
import {Folder} from "../model/folderModel";
@Injectable()

export class GetAPIService {
  constructor(private http: Http) {}

  private baseUrl = 'http://127.0.0.1:8080/alfresco/api/-default-/public/alfresco/versions/1/people/-me-/favorites';
  getData(): Observable<any> {
       let headers = new Headers();
    headers.append('Authorization', "Basic YWRtaW46YWRtaW4=");
    headers.append('Accept', 'application/json');

    let list: any = this.http.get(this.baseUrl, {headers: headers});
    return list;

  }

   toSite(r: any) {
    let site = <Site> ({
      id: r.entry.target,
      title: r.entry.target
    });
    return site;
  }

  toFile (r: any) {
    let file = <File> ({
      file: r.entry.target.file
    });
    return file;
  }

  toFolder(r:any) {
    let folder = <Folder> ({
      folder:  r.entry.target.folder
    });
    return folder
  }



}
