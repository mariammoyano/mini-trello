// 'use strict';
import servicesModuleName from './services';
import BoardCtrl from './Controllers/board.controller';
import stateForm from './Directives/state-form.directive';
import stateEdit from './Directives/state-edit.directive';

/* Controllers */

var moduleName = 'microTrelloAppControllers';

var microTrelloAppControllers = angular.module(moduleName, ['microTrelloAppServices']);

microTrelloAppControllers.controller('BoardCtrl', BoardCtrl);

microTrelloAppControllers.directive('stateForm', stateForm);

microTrelloAppControllers.directive('stateEdit', stateEdit);

export default moduleName;