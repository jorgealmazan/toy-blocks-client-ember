import Controller from '@ember/controller';
import { computed, action } from '@ember/object';

export default class IndexController extends Controller {
  model = this.get('model');
  chosen = null;

  ischosen(node){
    return chosen === node;
  }

  @action
  setExpanded(node) {
    console.log(node)
    console.log('called')
    console.log(this.get('chosen'))
    this.set('chosen', node);
  }
}
