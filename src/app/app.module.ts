import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducerCardService } from './state/cards.reducer';
import {CardInfoEffects  } from './state/cards.effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterCardDetailsComponent } from './components/enter-card-details/enter-card-details.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'enter-card',
        component: EnterCardDetailsComponent,
        pathMatch: 'full',
      }
    ]

  }
];
@NgModule({
  declarations: [
    AppComponent,
    EnterCardDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, { runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true }}),
    StoreModule.forFeature('cardservice', reducerCardService),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
        name: 'Test App',
        maxAge: 25
    }),
    RouterModule.forChild(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AppModule { }
