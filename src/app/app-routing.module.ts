import { InnerPickerComponent } from './inner-picker/inner-picker.component';
import { MainPickerVidComponent} from './main-picker-vid/main-picker-vid.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path: 'main-picker-vid', component: MainPickerVidComponent},
  {path: 'inner-picker/:vidID', component: InnerPickerComponent},
  {
    path : '**',
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [MainPickerVidComponent, InnerPickerComponent, NotFoundComponent];
