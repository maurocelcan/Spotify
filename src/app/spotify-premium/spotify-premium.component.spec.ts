import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyPremiumComponent } from './spotify-premium.component';

describe('SpotifyPremiumComponent', () => {
  let component: SpotifyPremiumComponent;
  let fixture: ComponentFixture<SpotifyPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotifyPremiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifyPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
