import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  model = this.model;
  chosen = null;

  @action
  setExpanded(node) {
    this.set('chosen', node);
  }
}
