import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  trackId: DS.attr('string'),
  emoji: DS.attr('string'),
  text: DS.attr('string'),
  lat: DS.attr('number'),
  lng: DS.attr('number'),
  createdAt: DS.attr('string'),
});
