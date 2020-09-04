import Controller from '@ember/controller';
import { computed, action } from '@ember/object';

export default class IndexController extends Controller {
  model = this.get('model');
  chosen = null;

  @action
  setExpanded(node) {
    this.set('chosen', node);
  }
}
