import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesSectionComponent } from './rules-section.component';

describe('RulesSectionComponent', () => {
  let component: RulesSectionComponent;
  let fixture: ComponentFixture<RulesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RulesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
