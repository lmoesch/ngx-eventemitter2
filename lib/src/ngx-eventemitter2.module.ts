import { APP_BOOTSTRAP_LISTENER, APP_INITIALIZER, NgModule } from "@angular/core";

import EventEmitter2, { ConstructorOptions } from "eventemitter2";
import { bootstrapFactory, InitService, initFactory } from "./tmp";

@NgModule({})
export class NgxEventEmitter2Module {
  static forRoot(options?: ConstructorOptions) {
    return {
      ngModule: NgxEventEmitter2Module,
      providers: [
        {
          provide: APP_BOOTSTRAP_LISTENER,
          useFactory: bootstrapFactory, // will be created
          multi: true,
          deps: [InitService], // will be created to see if it works
        },
        {
          provide: APP_INITIALIZER,
          useFactory: initFactory, // will be created
          multi: true,
          deps: [InitService], // will be created to see if it works
        },
        {
          provide: EventEmitter2,
          useValue: new EventEmitter2(options)
        }
      ],
      exports: [EventEmitter2]
    };
  }
}
