// 'use strict';
import servicesModuleName from './services';
import BoardCtrl from './Controllers/board.controller';
import inputGroup from './Directives/input-group.directive';
import editableContent from './Directives/editable-content.directive';

/* Controllers */

var moduleName = 'microTrelloAppControllers';

var microTrelloAppControllers = angular.module(moduleName, ['microTrelloAppServices']);

microTrelloAppControllers.controller('BoardCtrl', BoardCtrl);

microTrelloAppControllers.directive('inputGroup', inputGroup);

microTrelloAppControllers.directive('editableContent', editableContent);

export default moduleName;