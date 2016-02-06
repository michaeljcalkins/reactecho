'use strict'

angular
    .module('codesketcher')
    .directive('rightSidebar', function(DrawingModel, DrawingAlign) {
        return {
            controller: function($scope) {
                $scope.drawingModel = DrawingModel
                $scope.drawingAlign = DrawingAlign
            },
            template: `
            <div
                class="right-sidebar"
                resizable-handles="'w'"
                resizable>
                <div ng-if="!drawingModel.currentHtmlObject && drawingModel.currentPage && drawingModel.currentPage.styles">
                    <div class="sidebar-row">
                        <div class="form-column form-label">
                            Name
                        </div>
                        <div class="form-column text-center two-thirds">
                            <input
                                title="Page name"
                                type="text"
                                ng-change="drawingModel.updatePage(drawingModel.currentPage)"
                                ng-model="drawingModel.currentPage.name">
                        </div>
                    </div>

                    <div class="sidebar-row">
                        <div class="form-column form-label">
                            Size
                        </div>
                        <div class="form-column text-center">
                            <input
                                title="Page width"
                                type="text"
                                ng-change="drawingModel.updatePage(drawingModel.currentPage)"
                                ng-model="drawingModel.currentPage.styles.width">
                            Width
                        </div>
                        <div class="form-column text-center">
                            <input
                                title="Page height"
                                type="text"
                                ng-change="drawingModel.updatePage(drawingModel.currentPage)"
                                ng-model="drawingModel.currentPage.styles.height">
                            Height
                        </div>
                    </div>

                    <div class="sidebar-group">
                        <div class="sidebar-header">
                            Fills
                        </div>
                        <div class="sidebar-row">
                            <div class="form-column one-half text-center">
                                <input
                                    type="text"
                                    colorpicker
                                    ng-change="drawingModel.updatePage(drawingModel.currentPage)"
                                    ng-model="drawingModel.currentPage.styles.background">
                                Fill
                            </div>
                            <div class="form-column one-half text-center">
                                <input
                                    type="text"
                                    ng-change="drawingModel.updatePage(drawingModel.currentPage)"
                                    ng-model="drawingModel.currentPage.styles.backgroundSize">
                                Size
                            </div>
                        </div>
                    </div>
                </div>
                <div ng-if="drawingModel.currentHtmlObject && drawingModel.currentHtmlObject.styles">
                    <div class="sidebar-row">
                        <div class="btn-group align-object-btns">
                            <button
                                title="Align selected objects left"
                                class="btn btn-default"
                                ng-click="drawingAlign.alignCurrentHtmlObjectLeft()">
                                <i class="glyphicon glyphicon-object-align-left"></i>
                            </button>
                            <button
                                title="Align selected objects centered vertically"
                                class="btn btn-default"
                                ng-click="drawingAlign.alignCurrentHtmlObjectVertically()">
                                <i class="glyphicon glyphicon-object-align-vertical"></i>
                            </button>
                            <button
                                title="Align selected objects right"
                                class="btn btn-default"
                                ng-click="drawingAlign.alignCurrentHtmlObjectRight()">
                                <i class="glyphicon glyphicon-object-align-right"></i>
                            </button>

                            <button
                                title="Align selected objects to the top"
                                class="btn btn-default"
                                ng-click="drawingAlign.alignCurrentHtmlObjectTop()">
                                <i class="glyphicon glyphicon-object-align-top"></i>
                            </button>
                            <button
                                title="Align selected objects centered horizontally"
                                class="btn btn-default"
                                ng-click="drawingAlign.alignCurrentHtmlObjectHorizontally()">
                                <i class="glyphicon glyphicon-object-align-horizontal"></i>
                            </button>
                            <button
                                title="Align selected objects to the bottom"
                                class="btn btn-default"
                                ng-click="drawingAlign.alignCurrentHtmlObjectBottom()">
                                <i class="glyphicon glyphicon-object-align-bottom"></i>
                            </button>
                        </div>
                    </div>

                    <div class="sidebar-row">
                        <div class="btn-group align-object-btns">
                            <button
                                class="btn btn-default"
                                title="Lock current object in place"
                                ng-class="{ active: drawingModel.currentHtmlObject.isLocked }"
                                ng-click="drawingModel.lockCurrentHtmlObject()"><i class="fa fa-lock"></i></button>
                            <button
                                class="btn btn-default"
                                title="Unlock current object"
                                ng-class="{ active: !drawingModel.currentHtmlObject.isLocked }"
                                ng-click="drawingModel.unlockCurrentHtmlObject()"><i class="fa fa-unlock"></i></button>

                            <button
                                class="btn btn-default"
                                title="Duplicate current object"
                                ng-click="drawingModel.duplicateCurrentHtmlObject()">
                                <i class="fa fa-clone"></i>
                            </button>
                        </div>
                    </div>

                    <div class="sidebar-row">
                        <div class="form-column form-label">
                            Name
                        </div>
                        <div class="form-column text-center two-thirds">
                            <input
                                type="text"
                                ng-change="drawingModel.updateHtmlObject(drawingModel.currentHtmlObject)"
                                ng-model="drawingModel.currentHtmlObject.name">
                        </div>
                    </div>

                    <div class="sidebar-group" ng-repeat="(styleName, styleValue) in drawingModel.currentHtmlObject.styles track by $index | orderBy:styleName">
                        <div class="sidebar-row">
                            <div class="form-column one-half form-label">
                                {{ styleName | camelToTitleCase }}
                            </div>
                            <div class="form-column one-half text-center">
                                <input
                                    type="text"
                                    ng-change="drawingModel.updateHtmlObject(drawingModel.currentHtmlObject)"
                                    ng-model="drawingModel.currentHtmlObject.styles[styleName]">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    })
