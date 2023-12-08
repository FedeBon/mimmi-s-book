import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInsertBookComponent } from './dialog-insert-book.component';

describe('DialogInsertBookComponent', () => {
  let component: DialogInsertBookComponent;
  let fixture: ComponentFixture<DialogInsertBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogInsertBookComponent]
    });
    fixture = TestBed.createComponent(DialogInsertBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
