import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'state-component',
  styleUrl: 'state-component.css',
  shadow: true,
})
export class StateComponent {

  @State() count: number = 1;

  onIncrement = () => {
    this.count = this.count + 1;
  };

  render() {
    return (
      <div>
        <count-component count={this.count}/>
        <button onClick={() => this.onIncrement()}>increment</button>
      </div>
    );
  }

}
