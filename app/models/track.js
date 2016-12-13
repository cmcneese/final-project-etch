import DS from 'ember-data';

export default DS.Model.extend({
  album: DS.attr(),
  artists: DS.attr(),
  externalUrls: DS.attr(),
  name: DS.attr()
});
