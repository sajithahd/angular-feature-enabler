import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStateService } from './user-state.service';

@Injectable({
  providedIn: 'root',
})
export class FeatureEnablerService {

  // Ideally this matrix should be fetched from BE API as well. 
  // As that sould be managed by BE business logic.
  featurePlanMatrix: { [key: string]: Feature[] } = {
    trail: [
      Feature.Feature1
    ],
    starter: [
      Feature.Feature1,
      Feature.Feature2
    ],
    pro: [
      Feature.Feature1,
      Feature.Feature2,
      Feature.Feature3
    ],
    premium: [
      Feature.Feature1,
      Feature.Feature2,
      Feature.Feature3,
      Feature.Feature4,
    ]
  };

  constructor(private userStateService: UserStateService) { }

  public isEligibleFeature$(feature: Feature): Observable<boolean> {
    return this.userStateService.getCurrentUser$().pipe(
      map((user) => {
        if (!this.featurePlanMatrix[user.plan]) {
          return false;
        }
        return this.featurePlanMatrix[user.plan].includes(feature);
      })
    );
  }
}

export enum Feature {
  Feature1,
  Feature2,
  Feature3,
  Feature4,
}