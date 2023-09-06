/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScoreApiService } from './score-api.service';

describe('Service: ScoreApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreApiService]
    });
  });

  it('should ...', inject([ScoreApiService], (service: ScoreApiService) => {
    expect(service).toBeTruthy();
  }));
});
