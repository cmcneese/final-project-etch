import Ember from 'ember';

export function add([a, b]/*, hash*/) {
  return a + b;
}

export default Ember.Helper.helper(add);
