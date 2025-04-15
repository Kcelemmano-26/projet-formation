import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// 👉 Importer Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    //AppComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,           // 📌 Icônes Material
    RouterModule.forRoot([]),  // 📌 Importer le module de routage
    ReactiveFormsModule,  // 📌 Pour les formulaires réactifs
    MatInputModule,       // 📌 Champs de saisie Material
    MatFormFieldModule,   // 📌 Champs de formulaire Material
    MatButtonModule,      // 📌 Boutons Material
    MatCardModule,         // 📌 Cartes Material
    MatMenuModule          // 📌 Menu Material
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
