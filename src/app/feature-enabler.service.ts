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
  featurePlanMatrix: FeaturePlanMatrix = {
    trail: [
      {
        feature: Feature.Feature1,
        visibility: Visibility.Hide
      }
    ],
    starter: [
      {
        feature: Feature.Feature1,
        visibility: Visibility.Hide
      },
      {
        feature: Feature.Feature2,
        visibility: Visibility.Hide
      }
    ],
    pro: [
      {
        feature: Feature.Feature1,
        visibility: Visibility.Hide
      }, {
        feature: Feature.Feature2,
        visibility: Visibility.Hide
      }, {
        feature: Feature.Feature3,
        visibility: Visibility.Hide
      }
    ],
    premium: [
      {
        feature: Feature.Feature1,
        visibility: Visibility.Hide
      }, {
        feature: Feature.Feature2,
        visibility: Visibility.Hide
      }, {
        feature: Feature.Feature3,
        visibility: Visibility.Hide
      }, {
        feature: Feature.Feature4,
        visibility: Visibility.Disable
      }
    ],
  };

  constructor(private userStateService: UserStateService) { }

  public isEligibleFeature$(feature: Feature): Observable<[boolean, Visibility]> {
    return this.userStateService.getCurrentUser$().pipe(
      map((user) => {
        if (!this.featurePlanMatrix[user.plan]) {
          return ([false, Visibility.Hide]);
        }

        const featureObj : FeaturePlan | undefined = this.featurePlanMatrix[user.plan]
         .find(item => item.feature === feature);
        if(featureObj){ 
          return ([true, featureObj.visibility]);
        } else {
          return ([false, Visibility.Hide])
        }

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

export enum Visibility {
  Show,
  Hide,
  Disable
}

type FeaturePlan = {
  feature: Feature;
  visibility: Visibility;
};

type FeaturePlanMatrix = {
  [key: string]: FeaturePlan[];
};