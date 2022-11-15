import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodRatingItemComponent } from './mood-rating-item.component';

describe('MoodRatingItemComponent', () => {
  let component: MoodRatingItemComponent;
  let fixture: ComponentFixture<MoodRatingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoodRatingItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodRatingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
