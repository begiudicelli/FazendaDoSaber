import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmaRegiaoPage } from './confirma-regiao.page';

describe('ConfirmaRegiaoPage', () => {
  let component: ConfirmaRegiaoPage;
  let fixture: ComponentFixture<ConfirmaRegiaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmaRegiaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
