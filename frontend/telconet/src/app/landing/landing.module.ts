import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';

import { LandingComponent } from './components/landing/landing.component';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, ImageModule, LandingRoutingModule],
})
export class LandingModule {}
