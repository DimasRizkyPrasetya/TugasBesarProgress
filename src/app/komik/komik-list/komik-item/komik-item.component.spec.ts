/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KomikItemComponent } from './komik-item.component';

describe('KomikItemComponent', () => {
  let component: KomikItemComponent;
  let fixture: ComponentFixture<KomikItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomikItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomikItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
