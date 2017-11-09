import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule }   from '@angular/forms';


const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contact/:id', component: ContactComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
  FormsModule,
  RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
