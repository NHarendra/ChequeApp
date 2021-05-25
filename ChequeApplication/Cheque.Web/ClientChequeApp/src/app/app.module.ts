import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { HttpClientModule,HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorHandlerService, ChequeService } from './cheque.service';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {ChartModule} from 'primeng/chart';
import { CalendarModule } from "primeng/primeng";
import { EditorModule } from "primeng/primeng";
import { ToastrModule } from 'ngx-toastr';
import { GenerateChequeComponent } from './home/generate-cheque/generate-cheque.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GenerateChequeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EditorModule,
    TableModule,
    DropdownModule,
    ChartModule,
    CalendarModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [ChequeService,ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
