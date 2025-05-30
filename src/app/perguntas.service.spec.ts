import { TestBed } from '@angular/core/testing';

import { PerguntasService } from './perguntas.service';

describe('PerguntasService', () => {
  let service: PerguntasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerguntasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
