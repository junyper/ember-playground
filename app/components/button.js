import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import ButtonComponentStyles from './button.css';

/**
 *
 * `Button` renders a button element that is styled.
 *
 * @class Button
 *
 */
export default class ButtonComponent extends Component {
  styles = ButtonComponentStyles;

  @tracked count = 0;

  @action handleClick() {
    this.count = this.count + 1;
    typeof this.args.onClick === 'function' && this.args.onClick(this.count);
  }
}
