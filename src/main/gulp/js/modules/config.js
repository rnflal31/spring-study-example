/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/

App.
    config(['$translateProvider', function ($translateProvider) {

        $translateProvider.useStaticFilesLoader({
            prefix : 'i18n/',
            suffix : '.json'
        });
        $translateProvider.preferredLanguage('ko');
        $translateProvider.useLocalStorage();
        $translateProvider.usePostCompiling(true);

    }]).

    config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 500;
    cfpLoadingBarProvider.parentSelector = '.wrapper > section';
  }])
.controller('NullController', function() {});
