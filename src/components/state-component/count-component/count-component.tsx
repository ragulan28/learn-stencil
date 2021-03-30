import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'count-component',
  styleUrl: 'count-component.css',
  shadow: true,
})
export class CountComponent {
  @Prop() count: number;

  render() {
    return (
     <div>
        {this.count}
     </div>
    );
  }

}
