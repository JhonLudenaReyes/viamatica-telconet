import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [AdministratorComponent],
  imports: [CommonModule, ImageModule],
  exports: [AdministratorComponent],
})
export class DashboardModule {}
