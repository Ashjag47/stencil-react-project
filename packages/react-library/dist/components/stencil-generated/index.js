'use client';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
import { MyButton as MyButtonElement, defineCustomElement as defineMyButton } from "stencil-library/my-button";
import { MyComponent as MyComponentElement, defineCustomElement as defineMyComponent } from "stencil-library/my-component";
export const MyButton = createComponent({
    tagName: 'my-button',
    elementClass: MyButtonElement,
    react: React,
    events: { onButtonClick: 'buttonClick' },
    defineCustomElement: defineMyButton
});
export const MyComponent = createComponent({
    tagName: 'my-component',
    elementClass: MyComponentElement,
    react: React,
    events: {},
    defineCustomElement: defineMyComponent
});
//# sourceMappingURL=index.js.map