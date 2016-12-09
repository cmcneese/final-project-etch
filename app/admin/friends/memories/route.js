import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  spotify: Ember.inject.service('spotify-api'),

  model(params) {
    // TODO: use spotify service to fetch tracks for each memory
    return this.store.query('memory', { user: params.user_id });
  }
});
