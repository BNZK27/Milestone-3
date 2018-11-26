angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.event', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/event.html',
        controller: 'eventCtrl'
      }
    }
  })

  .state('tabsController.organizers', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/organizers.html',
        controller: 'organizersCtrl'
      }
    }
  })

  .state('tabsController.venues', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/venues.html',
        controller: 'venuesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.detail'
      2) Using $state.go programatically:
        $state.go('tabsController.detail');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page6
      /page1/tab2/page6
      /page1/tab3/page6
      /page1/tab4/page6
  */
  .state('tabsController.detail', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/detail.html',
        controller: 'detailCtrl'
      },
      'tab2': {
        templateUrl: 'templates/detail.html',
        controller: 'detailCtrl'
      },
      'tab3': {
        templateUrl: 'templates/detail.html',
        controller: 'detailCtrl'
      },
      'tab4': {
        templateUrl: 'templates/detail.html',
        controller: 'detailCtrl'
      }
    }
  })

  .state('departmentOfComputerScience', {
    url: '/page8',
    templateUrl: 'templates/departmentOfComputerScience.html',
    controller: 'departmentOfComputerScienceCtrl'
  })

  .state('tabsController.computerScience', {
    url: '/page9',
    views: {
      'tab2': {
        templateUrl: 'templates/computerScience.html',
        controller: 'computerScienceCtrl'
      }
    }
  })

  .state('tabsController.login', {
    url: '/page11',
    views: {
      'tab4': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('page', {
    url: '/page12',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('tabsController.realLogin', {
    url: '/page13',
    views: {
      'tab4': {
        templateUrl: 'templates/realLogin.html',
        controller: 'realLoginCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.eventList'
      2) Using $state.go programatically:
        $state.go('tabsController.eventList');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page14
      /page1/tab3/page14
      /page1/tab4/page14
  */
  .state('tabsController.eventList', {
    url: '/page14',
    views: {
      'tab2': {
        templateUrl: 'templates/eventList.html',
        controller: 'eventListCtrl'
      },
      'tab3': {
        templateUrl: 'templates/eventList.html',
        controller: 'eventListCtrl'
      },
      'tab4': {
        templateUrl: 'templates/eventList.html',
        controller: 'eventListCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.map'
      2) Using $state.go programatically:
        $state.go('tabsController.map');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page15
      /page1/tab2/page15
      /page1/tab3/page15
      /page1/tab4/page15
  */
  .state('tabsController.map', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      },
      'tab2': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      },
      'tab3': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      },
      'tab4': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')


});