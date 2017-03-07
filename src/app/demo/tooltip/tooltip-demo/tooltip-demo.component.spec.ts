/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TooltipDemoComponent } from './tooltip-demo.component';
import { UiModule } from '../../../ui/ui.module';

describe('TooltipDemoComponent', () => {
  let component: TooltipDemoComponent;
  let fixture: ComponentFixture<TooltipDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemoComponent ],
      imports: [
        UiModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});