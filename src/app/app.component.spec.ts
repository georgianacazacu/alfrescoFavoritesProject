import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MatCardModule, MatIconModule} from "@angular/material";
import {GetAPIService} from "./services/get-api.service";
import {FavoriteItemComponent} from "./components/favorite-item/favorite-item.component";
import {By}              from '@angular/platform-browser';
import {DebugElement}    from '@angular/core';


describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let mockGetAPIService;
  let mockService;

  beforeEach(async(() => {
    mockGetAPIService = {};
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
        {provide: GetAPIService, useValue: mockGetAPIService}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    mockService = TestBed.get(GetAPIService);
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  }));

  beforeEach(() => {

    mockService.getData = () => {
      return {
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
            }
          ]
        }
      };
    };


  });


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

  it('stub object and injected service should not be the same', () => {
    expect(mockGetAPIService === mockService).toBe(false);
  });

  it('should get the correct result from returned object', () => {

    fixture.detectChanges();
    expect(comp.results).toBeTruthy();
    expect(comp.folders).toBeDefined(); // are defined but are empty
    expect(comp.files).toBeDefined();
    expect(comp.sites).toBeTruthy();
    expect(comp.sites.length).toBe(1);
    // the object don't contains files and folders
    expect(comp.files.lenght).not.toBeDefined();
    expect(comp.folders.lenght).toBe(undefined);


  });

  it('should have the expected content', () => {
    fixture.detectChanges();
    let content = el.textContent;
    expect(content).toBe('View your favorites!');

    de = fixture.debugElement.query(By.css('mat-card-title'));
    el = de.nativeElement;
    content = el.textContent;
    expect(content).toContain('testsite');
  });


  fit('should have the expected subtitles', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.favorites li span'));
    el = de.nativeElement;
    let content = el.textContent;
    expect(content).toContain('Favorites sites');
  });





});

