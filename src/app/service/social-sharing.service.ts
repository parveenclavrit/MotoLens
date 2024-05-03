import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialSharingService {

  constructor() { }
  public sharedItemSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  sharedItem$: Observable<any> = this.sharedItemSubject.asObservable();

  setSharedItem(item: any) {
    this.sharedItemSubject.next(item);
  }
}
