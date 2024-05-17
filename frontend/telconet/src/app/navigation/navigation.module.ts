import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, MenubarModule, ButtonModule],
  exports: [NavigationComponent],
})
export class NavigationModule {}
