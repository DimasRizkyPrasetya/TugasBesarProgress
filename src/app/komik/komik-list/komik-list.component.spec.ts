/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KomikListComponent } from './komik-list.component';

describe('KomikListComponent', () => {
  let component: KomikListComponent;
  let fixture: ComponentFixture<KomikListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomikListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
