import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-panel', 'Integration | Component | bs panel', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{#bs-panel title="My Title"}}My Content{{/bs-panel}}`);

  assert.equal(this.$('.panel-title').text().trim(), "My Title");
  assert.equal(this.$('.panel-body').text().trim(), "My Content");
});
