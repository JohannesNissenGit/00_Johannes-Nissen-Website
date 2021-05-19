import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallexEffectComponent } from './parallex-effect.component';

describe('ParallexEffectComponent', () => {
  let component: ParallexEffectComponent;
  let fixture: ComponentFixture<ParallexEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallexEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallexEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
