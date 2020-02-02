import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { ServerdataComponent } from './serverdata/serverdata.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopbarComponent,
    FormComponent,
    CardComponent,
    ServerdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
