import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  firstName: attr(),
  middleName: attr(),
  lastName: attr(),
  suffix: attr(),
  website: attr(),
  districtAddressLine1: attr(),
  districtAddressLine2: attr(),
  districtAddressLine3: attr(),
  districtPhone: attr(),
  dcAddress: attr(),
  party: attr()
});
