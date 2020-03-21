import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IposlistComponent } from './iposlist.component';

describe('IposlistComponent', () => {
  let component: IposlistComponent;
  let fixture: ComponentFixture<IposlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IposlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IposlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
