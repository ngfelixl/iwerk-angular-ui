import {
  Injectable,
  TemplateRef,
  ComponentRef,
  Injector,
  ComponentFactoryResolver,
  ApplicationRef,
  EmbeddedViewRef,
  Type,
  ReflectiveInjector,
  Optional,
  Inject
} from '@angular/core';
import { PopoverContainerComponent } from './popover-container/popover-container.component';
import { PopoverScrollMaskComponent } from './popover-scroll-mask/popover-scroll-mask.component';
import { IW_POPOVER_CONFIG } from './popover.config';
import { PopoverConfig } from './popover-config.interface';
import { smartPosition, addClasses } from './helpers';
import { PopoverOptions } from './popover-options.interface';
export { PopoverPosition } from './popover-position.interface';
export { PopoverOptions };

export interface IPopover {
  close: () => void;
}

@Injectable()
export class Popover {
  private __instance: IPopover;

  constructor() { }

  close() {
    this.__instance.close();
  }

  setInstance(instance: IPopover) {
    this.__instance = instance;
  }
}

@Injectable()
export class PopoverService {

  constructor(
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    @Optional() @Inject(IW_POPOVER_CONFIG) private popoverConfig: PopoverConfig
  ) { }

  openTemplateRef<T>(templateRef: TemplateRef<T>, target: HTMLElement, options: PopoverOptions): IPopover {
    return this.__open(null, templateRef.createEmbeddedView(null), target, this.__combineOptionsAndDefaults(options));
  }

  open<T>(componentType: Type<T>, target: HTMLElement, options?: PopoverOptions, init?: (component: T) => void): IPopover {
    const reflInj = ReflectiveInjector.resolveAndCreate([Popover], this.injector);

    const factory = this.componentFactoryResolver
      .resolveComponentFactory(
      componentType
      );
    const component = factory.create(reflInj);
    if (init) {
      init(component.instance);
    }
    const popover: Popover = reflInj.get(Popover);
    const popoverOptions: PopoverOptions = Object.assign({}, options || {});
    popoverOptions.shouldClose = () => {
      if (options.shouldClose) {
        options.shouldClose();
      }
      popover.close();
    };

    const instance = this.__open(component, null, target, this.__combineOptionsAndDefaults(popoverOptions));
    popover.setInstance(instance);
    return instance;
  }

  private __combineOptionsAndDefaults(options: PopoverOptions): PopoverOptions {
    const config = this.popoverConfig || {};
    const defaultOptions = {
      escToClose: config.escToClose === undefined ? true : config.escToClose,
      clickOutsideToClose: config.clickOutsideToClose === undefined ? true : config.clickOutsideToClose,
      arrowClass: config.arrowClass === undefined ? '' : config.arrowClass,
      popoverClass: config.popoverClass === undefined ? '' : config.popoverClass,
      scrollMaskClass: config.scrollMaskClass === undefined ? '' : config.scrollMaskClass,
      horizontalAlignment: config.horizontalAlignment
    };
    const result = {
      escToClose: options.escToClose === undefined ? defaultOptions.escToClose : options.escToClose,
      clickOutsideToClose: options.clickOutsideToClose === undefined ? defaultOptions.clickOutsideToClose : options.clickOutsideToClose,
      arrowClass: (options.arrowClass || '') + ' ' + defaultOptions.arrowClass,
      popoverClass: (options.popoverClass || '') + ' ' + defaultOptions.popoverClass,
      scrollMaskClass: (options.scrollMaskClass || '') + ' ' + defaultOptions.scrollMaskClass,
      horizontalAlignment: options.horizontalAlignment || defaultOptions.horizontalAlignment,
      shouldClose: options.shouldClose || (() => { }),
      popoverPosition: options.popoverPosition || (() => { })
    };
    return result;
  }

  private __open<T>(
    componentRef: ComponentRef<T>,
    embeddedViewRef: EmbeddedViewRef<T>,
    target: HTMLElement,
    options: PopoverOptions
  ) {
    const arrowElement = document.createElement('div');
    arrowElement.classList.add('iw-popover-arrow-element');

    // create the popover container
    const container = this.componentFactoryResolver.resolveComponentFactory(PopoverContainerComponent)
      .create(this.injector, componentRef ? [[componentRef.location.nativeElement]] : [embeddedViewRef.rootNodes]);
    // create the mask component
    const scrollMask = this.componentFactoryResolver.resolveComponentFactory(PopoverScrollMaskComponent)
      .create(this.injector, [[container.location.nativeElement, arrowElement]]);

    // we bind to the output (which is an observable)
    scrollMask.instance.clickOutsideToClose = options.clickOutsideToClose;
    scrollMask.instance.onClose.subscribe(() => {
      options.shouldClose();
    });

    container.instance.escToClose = options.escToClose;
    container.instance.onClose.subscribe(() => {
      options.shouldClose();
    });


    if (componentRef) {
      this.appRef.attachView(componentRef.hostView);
    }
    if (embeddedViewRef) {
      this.appRef.attachView(embeddedViewRef);
    }
    this.appRef.attachView(container.hostView);
    this.appRef.attachView(scrollMask.hostView);

    this.__showPopover({
      arrowElement,
      container: container.location.nativeElement,
      scrollMask: scrollMask.location.nativeElement,
      target
    }, options);

    const instance = {
      close: () => {
        if (embeddedViewRef) {
          embeddedViewRef.destroy();
          this.appRef.detachView(embeddedViewRef);
        }
        if (componentRef) {
          componentRef.destroy();
          this.appRef.detachView(componentRef.hostView);
        }
        this.appRef.detachView(container.hostView);
        this.appRef.detachView(scrollMask.hostView);
        container.destroy();
        scrollMask.destroy();
      }
    };

    return instance;
  }

  private __showPopover(elements: {
    container: HTMLElement
    scrollMask: HTMLElement
    arrowElement: HTMLElement
    target: HTMLElement
  }, options: PopoverOptions) {
    const container: HTMLElement = elements.container;
    const scrollMask: HTMLElement = elements.scrollMask;
    const arrowElement: HTMLElement = elements.arrowElement;

    setTimeout(() => {
      container.style.visibility = 'hidden';
      arrowElement.style.visibility = 'hidden';
      addClasses(container, options.popoverClass);
      addClasses(scrollMask, options.scrollMaskClass);
      addClasses(arrowElement, options.arrowClass);
      document.body.appendChild(scrollMask);

      smartPosition(elements, options);

      container.classList.add('iw-popover-container--visible');
      arrowElement.classList.add('iw-popover-arrow-element--visible');
    }, 0);
  }

}

