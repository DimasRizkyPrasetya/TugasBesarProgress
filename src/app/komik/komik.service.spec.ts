/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KomikService } from './komik.service';

describe('Service: Komik', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KomikService]
    });
  });

  it('should ...', inject([KomikService], (service: KomikService) => {
    expect(service).toBeTruthy();
  }));
});
