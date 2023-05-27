import { Component } from '@angular/core';
import { Feature } from './feature-enabler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Feature = Feature;
  title = 'angular-feature-enabler';
}
