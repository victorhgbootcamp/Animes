import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDetailPageComponent } from './anime-detail-page.component';

describe('AnimeDetailPageComponent', () => {
  let component: AnimeDetailPageComponent;
  let fixture: ComponentFixture<AnimeDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
