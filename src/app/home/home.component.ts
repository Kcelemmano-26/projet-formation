import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    NgFor,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private slideInterval: any;
  
  slides = [
    {
      title: 'Gérez votre entreprise efficacement',
      subtitle: 'Une solution complète pour optimiser vos processus',
      image: 'assets/images/slide1.jpg',
      cta: 'Commencer maintenant'
    },
    {
      title: 'Analysez vos performances',
      subtitle: 'Des tableaux de bord intuitifs pour prendre les bonnes décisions',
      image: 'assets/images/slide2.webp',
      cta: 'Découvrir les analyses'
    },
    {
      title: 'Collaborez en temps réel',
      subtitle: 'Travaillez ensemble, où que vous soyez',
      image: 'assets/images/slide3.jpg',
      cta: 'Essayer gratuitement'
    }
  ];

  features = [
    {
      icon: 'dashboard',
      title: 'Tableau de bord intuitif',
      description: 'Accédez à toutes vos informations importantes en un coup d\'œil'
    },
    {
      icon: 'analytics',
      title: 'Analyses détaillées',
      description: 'Suivez vos performances avec des graphiques et rapports détaillés'
    },
    {
      icon: 'group',
      title: 'Gestion d\'équipe',
      description: 'Gérez efficacement votre équipe et vos collaborateurs'
    },
    {
      icon: 'notifications',
      title: 'Notifications en temps réel',
      description: 'Restez informé des mises à jour importantes de votre entreprise'
    }
  ];

  testimonials = [
    {
      name: 'Sophie Martin',
      role: 'Directrice Marketing',
      content: 'Un outil indispensable pour notre équipe marketing. La collaboration n\'a jamais été aussi simple !',
      avatar: 'assets/images/avatar1.jpg'
    },
    {
      name: 'Thomas Dubois',
      role: 'Chef de Projet',
      content: 'L\'interface intuitive nous permet de gagner un temps précieux dans la gestion de nos projets.',
      avatar: 'assets/images/avatar2.jpg'
    }
  ];

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change de slide toutes les 5 secondes
  }

  setCurrentSlide(index: number) {
    this.currentSlide = index;
    // Réinitialise le timer quand on clique sur un indicateur
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.startSlideShow();
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
