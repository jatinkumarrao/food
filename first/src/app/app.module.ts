import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningalertComponent } from './warning-alert/warning-alert.component';
import { SuccessComponent } from './success/success.component';
import{FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningalertComponent,
    SuccessComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
