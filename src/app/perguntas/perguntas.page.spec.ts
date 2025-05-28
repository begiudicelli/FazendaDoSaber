import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerguntasPage } from './perguntas.page';

describe('PerguntasPage', () => {
  let component: PerguntasPage;
  let fixture: ComponentFixture<PerguntasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerguntasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
