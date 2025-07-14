import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
//import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

declare var bootstrap: any; 

@Component({
  selector: 'app-landing-main',
  standalone: true,
  imports: [
    CommonModule,
    //TranslateModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './landing-main.component.html',
  styleUrls: ['./landing-main.component.css']
})
export class LandingMainComponent {
    heading: Heading = {
    imageUrl: 'assets/images/header_component.png',
    businessName: 'Ribas English',
    businessDescription: 'Learn English with expert native instructors.'
  };

  services: Service[] = [
    {
      id:1,
      imageUrl: 'https://dummyimage.com/900x400/6f42c1/ffffff',
      name: 'Private Lessons',
      description: 'One-on-one English lessons tailored to your needs.'
    },
    {
      id:2,
      imageUrl: 'https://dummyimage.com/900x400/28a745/ffffff',
      name: 'Group Lessons',
      description: 'One-on-one English lessons tailored to your needs.'
    },
    {
      id:3,
      imageUrl: 'https://dummyimage.com/900x400/007bff/ffffff',
      name: 'Consultation Lessons',
      description: 'One-on-one English lessons tailored to your needs.'
    }
  ];

  classTypes: ClassType[] = [
    {
      id:1,
      imageUrl: 'https://dummyimage.com/200x200/007bff/ffffff',
      name: 'Group Class',
      description: 'Interactive learning in small groups.'
    },
    {
      id:2,
      imageUrl: 'https://dummyimage.com/200x200/007bff/ffffff',
      name: 'Group Class',
      description: 'Interactive learning in small groups.'
    },
    {
      id:3,
      imageUrl: 'https://dummyimage.com/200x200/007bff/ffffff',
      name: 'Group Class',
      description: 'Interactive learning in small groups.'
    }
  ];

  courses: Course[] = [
    {
      id:1,
      imageUrl: 'https://dummyimage.com/200x200/007bff/ffffff',
      name: 'English for Business',
      description: 'Focus on professional vocabulary and communication.',
      price: 120
    },
    {
      id:2,
      imageUrl: 'https://dummyimage.com/200x200/007bff/ffffff',
      name: 'English for Business',
      description: 'Focus on professional vocabulary and communication.',
      price: 120
    },
    {
      id:3,
      imageUrl: 'https://dummyimage.com/200x200/007bff/ffffff',
      name: 'English for Business',
      description: 'Focus on professional vocabulary and communication.',
      price: 120
    }
  ];

  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(fragment: string) {
    this.viewportScroller.scrollToAnchor(fragment);
  }

   ngAfterViewInit() {
    this.initCarousel();
    this.viewportScroller.setOffset([0, 70]);
  }

  private initCarousel() {
    // Inicializa el carrusel manualmente
    const carouselElement = document.getElementById('services');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 3000, // 3 segundos entre transiciones
        ride: 'carousel', // Inicia automáticamente
        wrap: true // Permite bucle infinito
      });
    }
  }
}

export class Heading {
  imageUrl!: string;
  businessName!: string;
  businessDescription!: string;
}

export class Service {
  id!:number;
  imageUrl!: string;
  name!: string;
  description!: string;
}

export class ClassType {
  id!:number;
  imageUrl!: string;
  name!: string;
  description!: string;
}

export class Course {
  id!:number;
  imageUrl!: string;
  name!: string;
  description!: string;
  price!: number;
}

