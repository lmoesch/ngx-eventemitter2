import { inject, Injector } from "@angular/core";
import { EventEmitter2 } from "../ngx-eventemitter2.module";

/**
 * `@OnEvent` decorator metadata
 */
export interface OnEventMetadata {
    /**
     * Event (name or pattern) to subscribe to.
     */
    event: string | symbol | Array<string | symbol>;
    /**
     * Subscription options.
     */
    options?: any;
  }

/**
 * `@OnEvent` decorator event type
 */
export type OnEventType = string | symbol | Array<string | symbol>;

export function OnEvent(event: string | symbol | Array<string | symbol>): MethodDecorator {
    console.log('OnEvent Decorator')
    const decoratorFactory = (
        target: any,
        key?: any,
        descriptor?: TypedPropertyDescriptor<any>,
      ) => {

      };

    return decoratorFactory;
} 