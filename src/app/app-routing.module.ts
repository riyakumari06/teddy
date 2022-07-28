import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TypesComponent } from './types/types.component';

const routes: Routes = [
  {path: 'home', redirectTo: '/home', pathMatch: 'full'},
  {path:"home", component: HomeComponent },
  {path:"about", component: AboutComponent},
  {path:"types",component: TypesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
