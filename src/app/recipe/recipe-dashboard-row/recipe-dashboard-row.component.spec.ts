import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDashboardRowComponent } from './recipe-dashboard-row.component';

describe('RecipeComponent', () => {
  let component: RecipeDashboardRowComponent;
  let fixture: ComponentFixture<RecipeDashboardRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDashboardRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDashboardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
