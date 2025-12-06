import { Component } from '@angular/core';
import { IonApp, IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarOutline, home, barbell, camera, settings, add } from 'ionicons/icons';
import { environment } from 'src/environments/environment.prod';
import { DatabaseService } from './core/services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class AppComponent {
  constructor(private db: DatabaseService) {
    addIcons({ home, barbell, camera, settings, add, calendarOutline });
    this.initApp()
  }

  // TODO remove mock data later down development!
  async initApp() {
    await this.db.initialize(true);
  }
}
