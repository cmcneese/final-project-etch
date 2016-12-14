import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),

  actions: {
    saveUser(formValues) {
      // Create a new user model
      const user = this.store.createRecord('user', formValues);

      // Save the new user model
      user.save().then(() => {
        // Login user
        const secretStuff = {
          identification: formValues.email,
          password: formValues.password
        };
        const authenticator = 'authenticator:jwt';

        return this.get('session').authenticate(authenticator, secretStuff);
      })
      .then(() => {
        return this.get('currentUser').loadCurrentUser();
      })
      .then(() => {
        this.transitionToRoute('admin');
      })
      .catch((e) => {
        console.log(e);
        alert('Error Creating User');
      });
    }
  }
});
