import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksReferencePopupComponent } from './books-reference-popup.component';

describe('BooksReferencePopupComponent', () => {
  let component: BooksReferencePopupComponent;
  let fixture: ComponentFixture<BooksReferencePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksReferencePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksReferencePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
