import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  state: attr(),
  lastName: attr(),
  firstName: attr(),
  party: attr(),
  districtAddressLine1: attr(),
  districtAddressLine2: attr(),
  districtAddressLine3: attr(),
  districtPhone: attr(),
  dcAddress: attr(),
  dcPhone: attr(),
  email: attr(),
  website: attr()
});
