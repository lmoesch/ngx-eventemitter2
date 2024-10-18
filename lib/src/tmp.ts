import { ComponentRef, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export const initFactory = (init: InitService): (() => Observable<any>) => {
  console.log('APP_INITIALIZER factory called', init);
  return () => {
    console.log('APP_INITIALIZER callback');
    return of(true);
  };
};
export const platformInitFactory = (a: InitService): (() => void) => {
  console.log('PLATFORM_INITIALIZER factory called', a);
  return () => {
    console.log('PLATFORM_INITIALIZER callback');
  };
};
export const bootstrapFactory = (x: InitService): ((c: ComponentRef<any>) => void) => {
  console.log('APP_BOOTSTRAP_LISTENER factory called', x);
  return (c: ComponentRef<any>) => {
    console.log('APP_BOOTSTRAP_LISTENER Callback:', c.location.nativeElement);
  };
};

@Injectable({
  providedIn: 'root',
})
export class InitService {
 // nothing yet, I want to see how I can utilize this
}