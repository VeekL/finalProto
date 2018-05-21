import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPickerVidComponent } from './main-picker-vid/main-picker-vid.component';
import { InnerPickerComponent } from './inner-picker/inner-picker.component';
import { ObjectComponent } from './object/object.component';
import { SceneComponent } from './scene/scene.component';
import { EventComponent } from './event/event.component';
import { ActionComponent } from './action/action.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPickerVidComponent,
    InnerPickerComponent,
    ObjectComponent,
    SceneComponent,
    EventComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
