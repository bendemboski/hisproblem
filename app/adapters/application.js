import DS from 'ember-data';
import ENV from '../config/environment';

const { JSONAPIAdapter } = DS;
const {
  APP: {
    apiHost,
    apiPath
  }
} = ENV;

export default JSONAPIAdapter.extend({
  host: apiHost,
  namespace: apiPath
});
