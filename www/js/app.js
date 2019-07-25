angular.module('starter', ['ionic', 'firebase', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() { 
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    } 
    // $ionicPlatform.on('pause', function(){
    //   alert('PROBANDO');
    // });
    // $ionicPlatform.on('resume', function(){
    //   alert('PROBANDO');
    // });
    // document.addEventListener("pause", onPause, false);
    // document.addEventListener("resume", onPause, false);

    // function onPause() {
    //     $ionicPopup.alert({
    //       title: 'pause',
    //       content: 'pause.'
    //     }).then(function(res) {
    //     });
    // }
    // document.addEventListener("resume", function() {
    //     alert("The application is resuming from the background");
    // }, false);
  }); 


})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app', 
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('login', {
    url: '/login',   
    templateUrl: 'templates/login.html',
    controller: 'AppCtrl' 
  })

  .state('registro', {
    url: '/registro', 
    templateUrl: 'templates/registro.html',
    controller: 'AppCtrl'
  })

  .state('verificacion', {
    url: '/verificacion', 
    templateUrl: 'templates/verificacion.html',
    controller: 'AppCtrl'
  })

  .state('app.examenes', {
    url: '/examenes',
    views: {
      'menuContent': {
        templateUrl: 'templates/examenes.html',
        controller: 'examenesCtrl'
      }
    }
  })

  .state('app.ayuda', {
    url: '/ayuda',
    views: {
      'menuContent': {
        templateUrl: 'templates/ayuda.html',
        controller: 'ayudaCtrl'
      }
    }
  })

  .state('app.ramas', {
    url: '/ramas',
    views: {
      'menuContent': {
        templateUrl: 'templates/rama.html',
        controller: 'ramaCtrl'
      }
    }
  })

  .state('app.capitulos', {
    url: '/ramas/:capitulosId',
    views: {
      'menuContent': {
        templateUrl: 'templates/capitulos.html',
        controller: 'capitulosCtrl'
      }
    }
  })

  .state('app.capitulo', {
    url: '/capitulo/:categoriaId',
    views: {
      'menuContent': {
        templateUrl: 'templates/capitulo.html',
        controller: 'capituloCtrl'
      }
    }
  })

  .state('preguntas', {
    url: '/preguntas',  
    templateUrl: 'templates/preguntas.html',
    controller: 'preguntasCtrl',
    disableHardwareBackButton : true
  })

  .state('felicidades', {
    url: '/felicidades',  
    templateUrl: 'templates/felicidades.html',
    controller: 'felicidadesCtrl' 
  })

  .state('detallePreguntas', {
    url: '/felicidades/:detalleId', 
    templateUrl: 'templates/detallePreguntas.html',
    controller: 'detalleCtrl'  
  })
  
  .state('resultados', {
    url: '/resultados', 
    templateUrl: 'templates/resultados.html',
    controller: 'preguntasCtrl'
  })
  
  .state('recuperar', {
    url: '/recuperar', 
    templateUrl: 'templates/recuperarContra.html',
    controller: 'recuperarClaveCtrl'
  })



  .state('app.cuenta', {
    url: '/cuenta',
    views: {
      'menuContent': {
        templateUrl: 'templates/cuenta.html',
        controller: 'cuentaCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
