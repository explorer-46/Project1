import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { RouterModule, Routes } from '@angular/router';
import { PassengerComponent } from './passenger/passenger.component';
import{ HttpClientModule} from '@angular/common/http';

const link:Routes=[
  {path:"",component:AirlinesComponent},
  {path:"view",component:PassengerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AirlinesComponent,
    PassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(link)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
