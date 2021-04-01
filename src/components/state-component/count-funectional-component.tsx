import { h } from '@stencil/core';


export const CountFunctional = (props,children) => [
  <h1>Hello, {props.name}</h1>,
  children
];
