import Ember from 'ember';

export default Ember.Controller.extend({

  identification: 'othoniel@example.org',

  password: 'secreto',

  actions: {

    authenticate: function() {
      var credentials = this.getProperties('identification', 'password');
      var authenticator = 'simple-auth-authenticator:oauth2-password-grant';
      var _this = this;
      this.get('session').authenticate(authenticator, credentials).then(function() {
        //TODO: waiting for feedback 
        // https://github.com/simplabs/ember-simple-auth/pull/483
        var token = _this.get('session.secure.token');
        _this.set('session.secure.access_token', token);
      });
    }

  }

});
