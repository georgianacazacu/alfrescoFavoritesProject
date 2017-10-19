import {Component, OnInit} from '@angular/core';
import {GetAPIService} from "./services/get-api.service";
import {MatCardModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Favorite List Cards';
  results: any;
  sites: any;
  files: any;
  folders: any;

  constructor(private api: GetAPIService) {}
  ngOnInit() {
    this.api.getData().subscribe(
      (data)  => {
        console.log("what are all entries ", data._body);
        this.results = JSON.parse(data._body);
        this.results = this.results.list.entries;
        this.files = this.results.map(this.api.toFile);
        this.sites = this.results.map(this.api.toSite);
        this.folders = this.results.map(this.api.toFolder);
       console.log("all result ", this.results);
       console.log("all files", this.files);
       console.log("all folders", this.folders);


      }
    );
  }
}
