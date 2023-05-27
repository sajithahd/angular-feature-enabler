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
      // plan: 'Trail'
      // plan: 'Starter'
      plan: 'Pro'
      // plan: 'Premium'
      
    };

    return of(user);
  }
}


