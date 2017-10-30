import { StateTemplate } from './state-template.class';
import { ViewContainerRef } from '@angular/core';
import { IStateButtonDirective } from './state-button-directive.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ButtonState } from './button-state';

describe('state-template.class', () => {
  let viewContainer: ViewContainerRef;
  let stateButton: IStateButtonDirective;

  beforeEach(() => {
    stateButton = {
      state: new BehaviorSubject<ButtonState>('IDLE')
    };
    viewContainer = <ViewContainerRef><any>{
      createEmbeddedView: () => { },
      remove: () => { }
    };
  });

  it('creates an embedded view when its triggering state is assigned', () => {
    spyOn(viewContainer, 'createEmbeddedView');
    const stateTemplate = new StateTemplate('DOING', viewContainer, null, stateButton);
    stateTemplate.ngOnInit();
    stateButton.state.next('DOING');
    expect(viewContainer.createEmbeddedView).toHaveBeenCalledTimes(1);
  });

  it('removes the embedded view and calls the destroy method the state differs and was previously the same', () => {
    const view = {
      destroy: () => {}
    };
    spyOn(viewContainer, 'createEmbeddedView').and.returnValue(view);
    spyOn(viewContainer, 'remove');
    spyOn(view, 'destroy');
    const stateTemplate = new StateTemplate('DOING', viewContainer, null, stateButton);
    stateTemplate.ngOnInit();
    stateButton.state.next('DOING');
    stateButton.state.next('IDLE');
    expect(viewContainer.remove).toHaveBeenCalledTimes(1);
    expect(view.destroy).toHaveBeenCalledTimes(1);
  });
});