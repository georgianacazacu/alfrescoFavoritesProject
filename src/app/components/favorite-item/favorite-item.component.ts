import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.css']
})
export class FavoriteItemComponent implements OnInit {
  @Input() item: AppComponent;
  @Input('iconName') iconName: string;
  constructor() { }

  ngOnInit() {
  }

}
