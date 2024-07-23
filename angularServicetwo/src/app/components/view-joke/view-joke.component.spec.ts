import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJokeComponent } from './view-joke.component';

describe('ViewJokeComponent', () => {
  let component: ViewJokeComponent;
  let fixture: ComponentFixture<ViewJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewJokeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
