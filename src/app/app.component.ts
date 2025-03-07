import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompteurComponent } from "./compteur/compteur.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompteurComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Correction de styleUrl à styleUrls
})
export class AppComponent {
  title = 'projet-formation Angular';

  laValeur(event: any) {
    console.log('Valeur reçue du compteur : ', event);  // Affiche la valeur du compteur
  }
}
