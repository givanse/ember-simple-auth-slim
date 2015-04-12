import Ember from 'ember';

export default Ember.Controller.extend({

  identification: 'othoniel@example.org',

  password: 'secreto',

  actions: {

    authenticate: function() {
      var credentials = this.getProperties('identification', 'password');
      var authenticator = 'simple-auth-authenticator:oauth2-password-grant';
      this.get('session').authenticate(authenticator, credentials);
    }

  }

});
