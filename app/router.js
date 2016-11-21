import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cta');
  this.route('leadership');
  this.route('senators');
  this.route('reps');
  this.route('tips');
  this.route('loading');
});

export default Router;
