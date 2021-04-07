import Component from '@glimmer/component';
import { action } from '@ember/object';
import { debounce } from '@ember/runloop';
import { guidFor } from '@ember/object/internals';

export default class SearchInputComponent extends Component {
  get inputId() {
    return this.args.id || `search-input__${guidFor(this)}`;
  }

  @action
  handleInput(event) {
    const { value } = event.target;
    const { onSearch } = this.args;
    debounce(
      {
        onSearch,
        value,
      },
      this.handleSearch,
      500
    );
  }

  handleSearch() {
    typeof this.onSearch === 'function' && this.onSearch(this.value);
  }
}
