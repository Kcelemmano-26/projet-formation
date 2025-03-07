import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compteur',
  template: `
    <h2>Compteur: <i>{{ counter }}</i></h2>
    <button (click)="increment()">Plus</button>
  `,
  styles: `
    button {
      background: blue;
      color: yellow;
      font-size: 20px;
      padding 17px 20px;
      border: 2px green solid;
      border-radius: 50px;  /* Correction ici */
      padding: 10px 20px;  /* Pour rendre le bouton plus lisible */
    }
  `
})
export class CompteurComponent {
  @Input() counter: number = 0;  // Valeur initiale du compteur

  @Input() nomducompteur: string = 'C 1'; // Nom du compteur

  @Output() getValue = new EventEmitter<number>(); // Émetteur de l'événement pour la valeur du compteur

  increment() {
    this.counter = this.counter + 1;  // Incrémentation du compteur
    this.getValue.emit(this.counter);  // Émet le compteur mis à jour
  }
}
