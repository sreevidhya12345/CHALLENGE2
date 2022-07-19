import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PortserviceComponent } from './portservice/portservice.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  ContactComponent,
  FooterComponent,
  PortserviceComponent,
  BodyComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
