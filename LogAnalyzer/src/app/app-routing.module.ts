import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = 
[

  // {
  //   path : '' ,
  //   component : DisplayComponent
  // },

  {
    path : '' ,
    component : HomeComponent
  },
  
  {
    path : 'home' ,
    component : HomeComponent
  },

  {
    path: 'dashboard', 
    redirectTo: 'dashboard', pathMatch: 'full' 
  },

  { 
    path: '**',
    component: PageNotFoundComponent 
  }

];
