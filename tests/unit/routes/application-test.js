import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | application', function(hooks) {
  setupTest(hooks);

  test('it exists', async function(assert) {
    let route = this.owner.lookup('route:application');
    assert.ok(route);

    const testModel = await route.model();

    const expectedNodes = [
      {
        "blocks": [
          {
            "data": "The Human Torch",
            "index": "001"
          },
          {
            "data": "is denied",
            "index": "002"
          },
          {
            "data": "a bank loan",
            "index": "003"
          }
        ],
        "loading": false,
        "name": "Thawing Springs",
        "online": true,
        "url": "https://thawing-springs-53971.herokuapp.com"
      },
      {
        "blocks": [
          {
            "data": "every",
            "index": "001"
          },
          {
            "data": "good",
            "index": "002"
          },
          {
            "data": "boy",
            "index": "003"
          },
          {
            "data": "does",
            "index": "004"
          },
          {
            "data": "fine",
            "index": "005"
          }
        ],
        "loading": false,
        "name": "Secret Lowlands",
        "online": true,
        "url": "https://secret-lowlands-62331.herokuapp.com"
      },
      {
        "blocks": [
          {
            "data": "By reason of these things",
            "index": "001"
          },
          {
            "data": "then the whaling voyage was welcome",
            "index": "002"
          },
          {
            "data": "the great flood-gates of the wonder-world swung open",
            "index": "003"
          },
          {
            "data": "and in the wild conceits that swayed me to my purpose",
            "index": "004"
          },
          {
            "data": "two and two there floated into my inmost soul",
            "index": "005"
          },
          {
            "data": "endless processions of the whale",
            "index": "006"
          },
          {
            "data": "and mid most of them all",
            "index": "007"
          },
          {
            "data": "one grand hooded phantom",
            "index": "008"
          },
          {
            "data": "like a snow hill in the air",
            "index": "009"
          }
        ],
        "loading": false,
        "name": "Calm Anchorage",
        "online": true,
        "url": "https://calm-anchorage-82141.herokuapp.com"
      },
      {
        "loading": false,
        "name": "Node 4",
        "online": false,
        "url": "http://localhost:3002"
      }
    ];

    assert.deepEqual(testModel, expectedNodes);
  });
});
