import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['profile-page'],

  actions: {
    update(closeForm, formValues) {
      this.get('onUpdate')(closeForm, formValues);
    }
  }
});
