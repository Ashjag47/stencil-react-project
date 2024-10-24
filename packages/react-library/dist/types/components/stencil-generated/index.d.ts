import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { MyButton as MyButtonElement } from "stencil-library/my-button";
import { MyComponent as MyComponentElement } from "stencil-library/my-component";
type MyButtonEvents = {
    onButtonClick: EventName<CustomEvent<any>>;
};
export declare const MyButton: StencilReactComponent<MyButtonElement, MyButtonEvents>;
type MyComponentEvents = NonNullable<unknown>;
export declare const MyComponent: StencilReactComponent<MyComponentElement, MyComponentEvents>;
export {};
