import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'state-component',
  styleUrl: 'state-component.css',
  shadow: true,
})
export class StateComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
