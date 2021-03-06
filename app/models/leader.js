import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  title: attr(),
  party: attr(),
  name: attr(),
  districtNum: attr(),
  dcNum: attr()
});
