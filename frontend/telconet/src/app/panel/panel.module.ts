import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuComponent } from './components/panel-menu/panel-menu.component';

import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  declarations: [PanelMenuComponent],
  imports: [CommonModule, PanelMenuModule],
  exports: [PanelMenuComponent],
})
export class PanelModule {}
