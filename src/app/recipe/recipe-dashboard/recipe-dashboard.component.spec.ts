import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDashboardComponent } from './recipe-dashboard.component';

describe('RecipesComponent', () => {
  let component: RecipeDashboardComponent;
  let fixture: ComponentFixture<RecipeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
