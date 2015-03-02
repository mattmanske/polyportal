/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    baseURL: '/',
    locationType: 'auto',
    environment: environment,
    modulePrefix: 'polyportal',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'style-src': "'self' 'unsafe-inline' 'unsafe-eval' fonts.googleapis.com code.ionicframework.com",
      'font-src': "'self' 'unsafe-inline' 'unsafe-eval' fonts.gstatic.com code.ionicframework.com",
    },
    
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/polyportal';
    ENV.locationType = 'hash';
  }

  return ENV;
};
