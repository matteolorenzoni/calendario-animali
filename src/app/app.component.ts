import { Component } from '@angular/core';
import { FirebaseInitializeService } from './service/firebase/firebase-initialize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private firebaseInitializeService: FirebaseInitializeService) {}

  title = 'Calendario animali';
}
