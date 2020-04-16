import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [FrontComponent, HomeComponent, PortfolioComponent, ContactComponent],
  imports: [
    CommonModule,
    FrontRoutingModule
  ],
  exports: [FrontComponent]
})
export class FrontModule { }
