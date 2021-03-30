import { Component, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';

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
        {this.count}
      </div>
    );
  }

}
