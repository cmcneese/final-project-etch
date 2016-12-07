import Ember from 'ember';

const SPOTIFY_URL = 'https://api.spotify.com/v1/search';

export default Ember.Service.extend({
  tracks(query) {
    const url = `${SPOTIFY_URL}?q=${query}&type=track`;
    return fetch(url)
    .then(res => res.json())
    .then(data => data.tracks.items);
  }
});
