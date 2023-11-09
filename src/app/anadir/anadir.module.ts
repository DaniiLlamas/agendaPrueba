import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AnadirPageRoutingModule } from './anadir-routing.module';
import { AnadirPage } from './anadir.page';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AnadirPageRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AnadirPage]
})
export class AnadirPageModule {}
