import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokecomponentComponent } from './jokecomponent.component';

describe('JokecomponentComponent', () => {
  let component: JokecomponentComponent;
  let fixture: ComponentFixture<JokecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokecomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JokecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
