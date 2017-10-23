import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatCardModule, MatIconModule} from "@angular/material";

import {FavoriteItemComponent} from './favorite-item.component';

describe('FavoriteItemComponent', () => {
  let component: FavoriteItemComponent;
  let fixture: ComponentFixture<FavoriteItemComponent>;

  const iconName = 'home';
  const item = "test";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteItemComponent],
      imports: [
        MatCardModule,
        MatIconModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteItemComponent);
    component = fixture.componentInstance;
    component.ngOnInit = () => {
      component.iconName = iconName;
      component.item = item;
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the expected @Input values', () => {
    expect(component.iconName).toBe('home');
    expect(component.item).toBe('test');
  });


});
