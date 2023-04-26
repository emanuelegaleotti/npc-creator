import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseGeneratorComponent } from './base-generator.component';

describe('BaseGeneratorComponent', () => {
  let component: BaseGeneratorComponent;
  let fixture: ComponentFixture<BaseGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
