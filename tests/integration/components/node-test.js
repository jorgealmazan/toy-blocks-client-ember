import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import fetchMock from 'fetch-mock';

module('Integration | Component | node', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    fetchMock.get("https://thawing-springs-53971.herokuapp.com", {node_name: "Thawing Springs"});
    fetchMock.get("https://thawing-springs-53972.herokuapp.com", {node_name: "Thawing Springs 2"});
  });

  hooks.afterEach(function() {
    fetchMock.restore();
  });

  test('it renders when online', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // await render(hbs`<Node />`);

    // assert.equal(this.element.textContent.trim(), '');

    this.set("name", "Node 1")
    this.set("url", "https://thawing-springs-53971.herokuapp.com")

    // Template block usage:
    await render(hbs`
      <Node @name={{name}} @url={{url}}/>
    `);
    assert.equal(this.element.querySelector('.md-panel-title').textContent.trim(), "Node 1")
    assert.equal(this.element.querySelector('.md-panel-summary').textContent.trim(), "https://thawing-springs-53971.herokuapp.com")
    assert.equal(this.element.querySelector('.md-secondary-container .status').textContent.trim(), "ONLINE")
  });

  test('it renders when 404', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // await render(hbs`<Node />`);

    // assert.equal(this.element.textContent.trim(), '');

    this.set("name", "Node 2")
    this.set("url", "https://thawing-springs-53972.herokuapp.com")

    // Template block usage:
    await render(hbs`
      <Node @name={{name}} @url={{url}}/>
    `);

    assert.equal(this.element.querySelector('.md-panel-title').textContent.trim(), "Node 2")
    assert.equal(this.element.querySelector('.md-panel-summary').textContent.trim(), "https://thawing-springs-53972.herokuapp.com")
    assert.equal(this.element.querySelector('.md-secondary-container .status').textContent.trim(), "OFFLINE")
  });
});
