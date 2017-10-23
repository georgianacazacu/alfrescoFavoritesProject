import {Component, OnInit} from '@angular/core';
import {GetAPIService} from "./services/get-api.service";
import * as _ from 'lodash'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'View your favorites';
  results: any;
  sites: any;
  files: any;
  folders: any;
  iconHome = 'home';
  iconFile = 'attachment';
  iconFolder = 'folder';

  constructor(private api: GetAPIService) {
  }

  ngOnInit() {

    /*To make the unit test run COMMENT these lines*/

    this.api.getData().subscribe(
     (data) => {
     this.results = JSON.parse(data._body);
     this.results = this.results.list.entries;
     this.results = this.results.map(item => item.entry.target);

     this.sites = _.filter(this.results, function (o) {
     return o.site;
     });

     this.files = _.filter(this.results, function (o) {
     return o.file;
     });

     this.folders = _.filter(this.results, function (o) {
     return o.folder;
     });
     }
     );

    /*unit tests*/

    /*To make the unit test run UNCOMMENT these lines*/

/*  this.results = this.api.getData();
    this.results = this.results.list.entries;
    this.results = this.results.map(item => item.entry.target);

    this.sites = _.filter(this.results, function (o) {
      return o.site;
    });

    this.files = _.filter(this.results, function (o) {
      return o.file;
    });

    this.folders = _.filter(this.results, function (o) {
      return o.folder;
    });*/
  }
 }
