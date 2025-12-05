import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { TrainingPlan } from '../core/models/trainings-plan.model';
import { DatabaseService } from '../core/services/database.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
  activePlan: TrainingPlan | null = null;

  constructor(private db: DatabaseService) {
  }

  async ngOnInit() {
    await this.loadActivePlan();
  }

  async loadActivePlan() {
    const plans = await this.db.getPlans();
    this.activePlan = plans.find(p => p.is_active) || null;
  }
}
