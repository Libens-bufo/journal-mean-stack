import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodRatingComponent } from './mood-rating.component';

describe('MoodRatingComponent', () => {
  let component: MoodRatingComponent;
  let fixture: ComponentFixture<MoodRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoodRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
