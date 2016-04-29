// 'use strict';
import servicesModuleName from './services';
import BoardCtrl from './Controllers/board.controller';

/* Controllers */

var moduleName = 'microTrelloAppControllers';

var microTrelloAppControllers = angular.module(moduleName, ['microTrelloAppServices']);

microTrelloAppControllers.controller('BoardCtrl', BoardCtrl);

export default moduleName;