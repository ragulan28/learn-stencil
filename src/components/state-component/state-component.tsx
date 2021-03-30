import { Component, h, State, Watch } from '@stencil/core';

@Component({
  tag: 'state-component',
  styleUrl: 'state-component.css',
  shadow: true,
})
export class StateComponent {

  @State() count: number = 1;

  @Watch('count')
  watchHandler(newValue: boolean, oldValue: boolean) {
    console.log('The new value of activated is: ', newValue, oldValue);
  }

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
