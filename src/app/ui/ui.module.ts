import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckboxModule } from './checkbox/checkbox.module';
import { MultilineEllipsisModule } from './multiline-ellipsis/multiline-ellipsis.module';
import { PopoverModule } from './popover/popover.module';
import { StateButtonModule } from './state-button/state-button.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { NavigationModule } from './navigation/navigation.module';
import { TreeModule } from './tree/tree.module';

@NgModule({
  imports: [
    CommonModule,
    PopoverModule,
    TooltipModule,
    StateButtonModule,
    CheckboxModule,
    MultilineEllipsisModule,
    NavigationModule,
    TreeModule
  ],
  exports: [
    PopoverModule,
    TooltipModule,
    StateButtonModule,
    CheckboxModule,
    MultilineEllipsisModule,
    NavigationModule,
    TreeModule
  ]
})
export class UiModule { }
