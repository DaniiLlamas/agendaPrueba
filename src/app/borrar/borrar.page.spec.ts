import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BorrarPage } from './borrar.page';

describe('BorrarPage', () => {
  let component: BorrarPage;
  let fixture: ComponentFixture<BorrarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BorrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
