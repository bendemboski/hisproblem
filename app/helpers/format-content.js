import Ember from 'ember';

const {
  Helper: { helper },
  String: { htmlSafe }
} = Ember;

export function formatContent([ content ]) {
  return htmlSafe(content.replace(/\n/g, '<br>'));
}

export default helper(formatContent);
