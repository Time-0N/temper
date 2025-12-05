import { Component } from '@angular/core';
import { IonApp, IonTabs, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class AppComponent {
  constructor() {
  }
}
