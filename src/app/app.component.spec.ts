import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MatCardModule, MatIconModule} from "@angular/material";
import {GetAPIService} from "./services/get-api.service";
import {FavoriteItemComponent} from "./components/favorite-item/favorite-item.component";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule
      ],
      declarations: [
        AppComponent,
        FavoriteItemComponent
      ],
      providers: [
        {provide: GetAPIService}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'View your favorites'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('View your favorites');
  }));

});

