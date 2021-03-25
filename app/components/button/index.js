import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

/**
 *
 * `Button` renders a button element that is styled.
 *
 * @class Button
 *
 */

export default class ButtonComponent extends Component {
  @tracked count = 0;

  @action
  onClick() {
    this.count = this.count + 1;
    console.log(this.count);
    if (typeof this.args.onClick === 'function') {
      this.args.onClick(this.count);
    }
  }
}
