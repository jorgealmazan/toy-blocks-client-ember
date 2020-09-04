import { module, test } from 'qunit';
import { visit, currentURL, click, findAll, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /application', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
    assert.equal(findAll('.node-container').length, 4);

    const initBlocks = findAll('.block-container');
    assert.equal(initBlocks.length, 0);

    await click(findAll('.node-container')[0]);

    const shownBlocks = findAll('.block-container');
    assert.equal(shownBlocks.length, 1);
  });
});
