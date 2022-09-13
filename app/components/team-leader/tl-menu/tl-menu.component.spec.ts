import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlMenuComponent } from './tl-menu.component';

describe('TlMenuComponent', () => {
  let component: TlMenuComponent;
  let fixture: ComponentFixture<TlMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TlMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
