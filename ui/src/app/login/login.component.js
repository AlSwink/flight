import templateUrl from './login.component.html'

/* @ngInject */
class LoginController {
  constructor ($log) {
    $log.debug('AppController is a go.')
  }
}

export default {
  templateUrl,
  controller: LoginController,
  controllerAs: '$loginCtrl'
}
