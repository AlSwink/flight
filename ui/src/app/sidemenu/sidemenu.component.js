import templateUrl from './sidemenu.component.html'

/* @ngInject */
class SidemenuController {
  constructor ($log) {
    $log.debug('AppController is a go.')
  }
}

export default {
  templateUrl,
  controller: SidemenuController,
  controllerAs: '$sideCtrl'
}
