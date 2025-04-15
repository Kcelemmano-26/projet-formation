import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',  // ✅ Correction : Un seul selector
  imports: [RouterOutlet],  // ✅ Correction : Importation correcte du RouterOutlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-formation Angular';
}
