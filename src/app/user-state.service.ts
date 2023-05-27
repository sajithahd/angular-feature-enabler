import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  
  getCurrentUser$(): Observable<any> {
    const user = {
      id: 1,
      name: 'Sajitha HD',
      // plan: 'trail'
      // plan: 'starter'
      plan: 'pro'
      // plan: 'premium'
      
    };

    return of(user);
  }
}


