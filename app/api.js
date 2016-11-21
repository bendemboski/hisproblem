import Ember from 'ember';
import ENV from './config/environment';

const { $ } = Ember;

export default function get(url) {
  return $.get(`${ENV.APP.apiUrl}${url}`);
}
