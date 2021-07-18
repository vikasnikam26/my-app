import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponnentComponent } from './test-componnent.component';

describe('TestComponnentComponent', () => {
  let component: TestComponnentComponent;
  let fixture: ComponentFixture<TestComponnentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponnentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
