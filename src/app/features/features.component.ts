import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, HeaderComponent, FooterComponent],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: 'speed',
      title: 'Performance Optimale',
      description: 'Une application rapide et réactive pour une expérience utilisateur fluide'
    },
    {
      icon: 'security',
      title: 'Sécurité Renforcée',
      description: 'Protection des données et authentification sécurisée'
    },
    {
      icon: 'devices',
      title: 'Multi-plateformes',
      description: 'Accessible sur tous vos appareils avec une interface adaptative'
    },
    {
      icon: 'analytics',
      title: 'Analyses Détaillées',
      description: 'Tableaux de bord et rapports personnalisables'
    },
    {
      icon: 'cloud_sync',
      title: 'Synchronisation Cloud',
      description: 'Vos données accessibles partout, tout le temps'
    },
    {
      icon: 'support_agent',
      title: 'Support Premium',
      description: 'Assistance technique 24/7 et accompagnement personnalisé'
    }
  ];
}
