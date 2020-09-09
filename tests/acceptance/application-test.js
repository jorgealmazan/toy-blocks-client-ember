import { module, test } from 'qunit';
import { visit, currentURL, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /application', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
    assert.equal(findAll('md-expansion-panel').length, 4);
  });
});
