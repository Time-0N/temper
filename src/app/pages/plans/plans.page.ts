import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonBadge, IonProgressBar, IonCardSubtitle, IonButton } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { TrainingPlan } from 'src/app/core/models/trainings-plan.model';
import { DatabaseService } from 'src/app/core/services/database.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonCard, IonCol, IonRow, IonCardContent, IonCardHeader, IonCardTitle, IonBadge, IonProgressBar, IonCardSubtitle, IonButton]
})
export class PlansPage implements OnInit {
  plans$: Observable<TrainingPlan[]>;

  constructor(private db: DatabaseService) {
    this.plans$ = this.db.getPlans();
  }

  openPlan(plan: TrainingPlan) {
    //TODO implementation
  }

  async activatePlan(event: Event, plan: TrainingPlan) {
    event.stopPropagation();
    await this.db.setActivePlan(plan.id);
  }

  ngOnInit() { }

}
