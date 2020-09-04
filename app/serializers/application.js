import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  deserialize(value) {
    console.log('from seriali', value);
    return value;
  }
  serialize(snapshot, options) {
    console.log(snapshot)
    console.log(options)

    let json = super.serialize(...arguments);

    json.data.attributes.cost = {
      amount: json.data.attributes.amount,
      currency: json.data.attributes.currency
    };

    delete json.data.attributes.amount;
    delete json.data.attributes.currency;

    return json;
  }
 
}
