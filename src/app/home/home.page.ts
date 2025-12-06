import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { TrainingPlan } from '../core/models/trainings-plan.model';
import { DatabaseService } from '../core/services/database.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton, IonIcon,
    RouterLink
  ],
})
export class HomePage implements OnInit {
  plan$: Observable<TrainingPlan | null>;

  constructor(private db: DatabaseService) {
    this.plan$ = this.db.getActivePlan();
  }

  async ngOnInit() {
  }

}
