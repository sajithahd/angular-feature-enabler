import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStateService } from './user-state.service';


@Injectable({
  providedIn: 'root'
})
export class FeatureEnablerService {

  plan!: string;

  constructor(private userStateService: UserStateService) {
  }

  public isEligibleFeature$(feature: Feature): Observable<boolean> {
    return this.userStateService.getCurrentUser$().pipe(
      map(user => {
        const proPlans = ['Pro', 'Enterprise'];
        this.plan = user.plan;

        switch (feature) {
          case Feature.Feature1:
          case Feature.Feature2:
          case Feature.Feature3:
            return proPlans.includes(this.plan);
          default:
            return false;
        }
      })
    )
  }
}

export enum Feature {
  Feature1,
  Feature2,
  Feature3
}