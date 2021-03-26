import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { hbs } from 'ember-template-imports';
import ButtonComponentStyles from './styles';

/**
 *
 * `Button` renders a button element that is styled.
 *
 * @class Button
 *
 */
export default class ButtonComponent extends Component {
  styles = ButtonComponentStyles;

  // errors out with: Attempted to resolve a modifier in a strict mode template, but it was not in scope: on
  static template = hbs`
    <button
      type="button"
      ...attributes
      class={{this.styles.button}}
      data-count={{this.count}}
      {{on "click" this.handleClick}}
    >
      {{yield}}
    </button>
  `;

  @tracked count = 0;

  @action handleClick() {
    this.count = this.count + 1;
    typeof this.args.onClick === 'function' && this.args.onClick(this.count);
  }
}
