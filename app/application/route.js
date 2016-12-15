import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  currentUser: Ember.inject.service(),

  sessionInvalidated() {
    this.get('currentUser').clearCurrentUser();
    this.transitionTo('login');
  },

  model() {
    this.get('currentUser').loadCurrentUser();
  }
});
