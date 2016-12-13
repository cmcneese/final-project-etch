export default Ember.Controller.extend({
  lat: 36.152675,
  lng: -86.776183,
  zoom: 10,
  myFirstMemory: [36.152675, -86.776183],
  actions: {
    updateCenter(e) {
      let center = e.target.getCenter();
      this.set('lat', center.lat);
      this.set('lng', center.lng);
    }
  }
});
