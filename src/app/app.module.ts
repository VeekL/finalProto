import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPickerVidComponent } from './main-picker-vid/main-picker-vid.component';
import { InnerPickerComponent } from './inner-picker/inner-picker.component';
import { ObjectComponent } from './object/object.component';
import { SceneComponent } from './scene/scene.component';
import { EventComponent } from './event/event.component';
import { ActionComponent } from './action/action.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule } from '@angular/material';


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatCard } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainPickerVidComponent,
    InnerPickerComponent,
    ObjectComponent,
    SceneComponent,
    EventComponent,
    ActionComponent,
  routingComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
