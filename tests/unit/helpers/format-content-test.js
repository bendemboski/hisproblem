import Ember from 'ember';
import { formatContent } from 'hisproblem/helpers/format-content';
import { module, test } from 'qunit';

const {
  String: { isHTMLSafe }
} = Ember;

module('Unit | Helper | format content');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = formatContent(["Here is\na string with\nnewlines"]);

  assert.ok(isHTMLSafe(result));
  assert.equal(result, "Here is<br>a string with<br>newlines");
});

