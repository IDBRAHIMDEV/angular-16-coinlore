import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeListComponent } from './exchange-list.component';

describe('ExchangeListComponent', () => {
  let component: ExchangeListComponent;
  let fixture: ComponentFixture<ExchangeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeListComponent]
    });
    fixture = TestBed.createComponent(ExchangeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
