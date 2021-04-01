import { Component, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';
import { CountFunctional } from '../count-funectional-component';

@Component({
  tag: 'count-component',
  styleUrl: 'count-component.css',
  shadow: true,
})
export class CountComponent {
  @Prop() count: number;
  @Event() onCountLimit: EventEmitter<string>;

  @Watch('count')
  watchHandler(newValue: number, oldValue: number) {
    if (newValue > 4) {
      this.countEmitter();
    }
  }

  countEmitter() {
    this.onCountLimit.emit('is rater than 4');
  }

  render() {
    return (
      <div>
        <CountFunctional name='count'> {this.count}</CountFunctional>
      </div>
    );
  }

}
