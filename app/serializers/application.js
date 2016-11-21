import DS from 'ember-data';

const { JSONAPISerializer } = DS;

export default JSONAPISerializer.extend({
  // Our API uses camelCase
  keyForAttribute(attr) {
    return attr;
  }
});
