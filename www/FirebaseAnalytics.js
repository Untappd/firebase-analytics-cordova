var exec = require("cordova/exec");
var PLUGIN_NAME = "FirebaseAnalytics";

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
    logEvent: (name, params) => execPlugin("logEvent", [name, params || {}]),
    setUserId: userId => execPlugin("setUserId", [userId]),
    setUserProperty: (name, value) => execPlugin("setUserProperty", [name, value]),
    resetAnalyticsData: () => execPlugin("resetAnalyticsData", []),
    setEnabled: enabled => execPlugin("setEnabled", [enabled]),
    setCurrentScreen: name => execPlugin("setCurrentScreen", [name]),
};
