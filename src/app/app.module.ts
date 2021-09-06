import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxHoverOpacityModule } from 'ngx-hover-opacity';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const MATERIAL_MODULES = [MatCardModule, MatButtonModule];

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ...MATERIAL_MODULES, NgxHoverOpacityModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
