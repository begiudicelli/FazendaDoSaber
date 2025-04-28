import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscolhaRegioesPage } from './escolha-regioes.page';

describe('EscolhaRegioesPage', () => {
  let component: EscolhaRegioesPage;
  let fixture: ComponentFixture<EscolhaRegioesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaRegioesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
