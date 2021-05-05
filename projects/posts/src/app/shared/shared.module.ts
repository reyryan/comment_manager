import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class SharedModule { }
