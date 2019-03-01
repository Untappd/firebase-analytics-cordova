var exec = require('cordova/exec');
var PLUGIN_NAME = 'FirebaseAnalytics';

const execPromise = function(cls, action, arg) {
  return new Promise(function(resolve, reject) {
    exec(resolve, reject, cls, action, arg);
  });
};

const execPlugin = function(action, arg) {
  execPromise(PLUGIN_NAME, action, arg);
};

// TODO: deduplicate function names, refactor array conversions
module.exports = {
  // TODO: validate logEvent parameters
  logEvent: function(name, params) {
    execPlugin('logEvent', [name, params || {}]);
  },
  setUserId: function(userId) {
    execPlugin('setUserId', [userId]);
  },
  setUserProperty: function(name, value) {
    execPlugin('setUserProperty', [name, value]);
  },
  resetAnalyticsData: function() {
    execPlugin('resetAnalyticsData', []);
  },
  setEnabled: function(enabled) {
    execPlugin('setEnabled', [enabled]);
  },
  setCurrentScreen: function(name) {
    execPlugin('setCurrentScreen', [name]);
  }
};
