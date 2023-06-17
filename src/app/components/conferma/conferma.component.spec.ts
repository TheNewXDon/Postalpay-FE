import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfermaComponent } from './conferma.component';

describe('ConfermaComponent', () => {
  let component: ConfermaComponent;
  let fixture: ComponentFixture<ConfermaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfermaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfermaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
