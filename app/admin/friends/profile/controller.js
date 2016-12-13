import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login(formValues, resetForm) {
      fetch('/login', {
        method: 'POST',
        data: JSON.stringify(formValues)
      }).then((res) => res.json())
        .then(() => {
          resetForm();
        });
    },
  },
});
