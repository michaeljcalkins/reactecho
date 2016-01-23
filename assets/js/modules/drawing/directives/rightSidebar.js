'use strict'

module.exports = function RightSidebarDirective() {
    return {
        scope: {
            drawingStorage: '='
        },
        template: `
        <div class="right-sidebar">
            <div ng-if="!drawingStorage.currentHtmlObject && drawingStorage.currentPage && drawingStorage.currentPage.styles">
                <div class="sidebar-row">
                    <div class="form-column form-label">
                        Name
                    </div>
                    <div class="form-column text-center two-thirds">
                        <input
                            type="text"
                            ng-model="drawingStorage.currentPage.name">
                    </div>
                </div>

                <div class="sidebar-row">
                    <div class="form-column form-label">
                        Size
                    </div>
                    <div class="form-column text-center">
                        <input
                            type="text"

                            ng-model="drawingStorage.currentPage.styles.width">
                        Width
                    </div>
                    <div class="form-column text-center">
                        <input
                            type="text"

                            ng-model="drawingStorage.currentPage.styles.height">
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

                                ng-model="drawingStorage.currentPage.styles.background">
                            Fill
                        </div>
                        <div class="form-column one-half text-center">
                            <input
                                type="text"

                                ng-model="drawingStorage.currentPage.styles.backgroundSize">
                            Size
                        </div>
                    </div>
                </div>
            </div>
            <div ng-if="drawingStorage.currentHtmlObject && drawingStorage.currentHtmlObject.styles">
                <div class="sidebar-row">
                    <div class="btn-group align-object-btns">
                        <button class="btn btn-default"><i class="glyphicon glyphicon-object-align-left"></i></button>
                        <button class="btn btn-default"><i class="glyphicon glyphicon-object-align-vertical"></i></button>
                        <button class="btn btn-default"><i class="glyphicon glyphicon-object-align-right"></i></button>

                        <button class="btn btn-default"><i class="glyphicon glyphicon-object-align-top"></i></button>
                        <button class="btn btn-default"><i class="glyphicon glyphicon-object-align-horizontal"></i></button>
                        <button class="btn btn-default"><i class="glyphicon glyphicon-object-align-bottom"></i></button>
                    </div>
                </div>

                <div class="sidebar-row">
                    <div class="btn-group align-object-btns">
                        <button
                            class="btn btn-default"
                            ng-class="{ active: drawingStorage.currentHtmlObject.isLocked }"
                            ng-click="drawingStorage.lockCurrentHtmlObject()"><i class="fa fa-lock"></i></button>
                        <button
                            class="btn btn-default"
                            ng-class="{ active: !drawingStorage.currentHtmlObject.isLocked }"
                            ng-click="drawingStorage.unlockCurrentHtmlObject()"><i class="fa fa-unlock"></i></button>
                    </div>
                </div>

                <div class="sidebar-row">
                    <div class="form-column form-label">
                        Name
                    </div>
                    <div class="form-column text-center two-thirds">
                        <input
                            type="text"
                            ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                            ng-model="drawingStorage.currentHtmlObject.name">
                    </div>
                </div>

                <div class="sidebar-row">
                    <div class="form-column form-label">
                        Position
                    </div>
                    <div class="form-column text-center">
                        <input
                            type="text"
                            ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                            ng-model="drawingStorage.currentHtmlObject.styles.left">
                        X
                    </div>
                    <div class="form-column text-center">
                        <input
                            type="text"
                            ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                            ng-model="drawingStorage.currentHtmlObject.styles.top">
                        Y
                    </div>
                </div>

                <div class="sidebar-row">
                    <div class="form-column form-label">
                        Size
                    </div>
                    <div class="form-column text-center">
                        <input
                            type="text"
                            ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                            ng-model="drawingStorage.currentHtmlObject.styles.width">
                        Width
                    </div>
                    <div class="form-column text-center">
                        <input
                            type="text"
                            ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                            ng-model="drawingStorage.currentHtmlObject.styles.height">
                        Height
                    </div>
                </div>

                <div class="sidebar-row">
                    <div class="form-column form-label">
                        Opacity
                    </div>
                    <div class="form-column text-center" style="width: 45%">
                        <input
                            type="range"
                            ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                            ng-model="drawingStorage.currentHtmlObject.styles.opacity"
                            max="1"
                            min="0"
                            step=".01">
                    </div>
                    <div class="form-column text-center" style="width: 22%">
                        <input
                            type="text"
                            ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                            ng-model="drawingStorage.currentHtmlObject.styles.opacity">
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
                                ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                                ng-model="drawingStorage.currentHtmlObject.styles.background">
                            Fill
                        </div>
                        <div class="form-column one-half text-center">
                            <input
                                type="text"
                                ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                                ng-model="drawingStorage.currentHtmlObject.styles.backgroundSize">
                            Size
                        </div>
                    </div>
                </div>

                <div class="sidebar-group">
                    <div class="sidebar-header">
                        Borders
                    </div>
                    <div class="sidebar-row">
                        <div class="form-column text-center">
                            <input
                                type="text"
                                ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                                ng-model="drawingStorage.currentHtmlObject.styles.borderColor"
                                colorpicker>
                            Color
                        </div>
                        <div class="form-column text-center">
                            <input
                                type="text"
                                ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                                ng-model="drawingStorage.currentHtmlObject.styles.borderStyle">
                            Style
                        </div>
                        <div class="form-column text-center">
                            <input
                                type="text"
                                ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                                ng-model="drawingStorage.currentHtmlObject.styles.borderWidth">
                            Thickness
                        </div>
                    </div>
                </div>

                <div class="sidebar-group">
                    <div class="sidebar-header">
                        Shadows
                    </div>
                    <div class="sidebar-row">
                        <div class="form-column full-width text-center">
                            <input
                                type="text"
                                ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                                ng-model="drawingStorage.currentHtmlObject.styles.boxShadow">
                            Shadow
                        </div>
                    </div>
                </div>

                <div class="sidebar-group">
                    <div class="sidebar-header">
                        Fonts
                    </div>
                    <div class="sidebar-row">
                        <div class="form-column one-third text-center">
                            <input
                                type="text"
                                ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                                ng-model="drawingStorage.currentHtmlObject.styles.color"
                                colorpicker>
                            Color
                        </div>
                        <div class="form-column one-third text-center">
                            <input
                                type="text"
                                ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                                ng-model="drawingStorage.currentHtmlObject.styles.fontFamily">
                            Font
                        </div>
                        <div class="form-column one-third text-center">
                            <input
                                type="text"
                                ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                                ng-model="drawingStorage.currentHtmlObject.styles.fontSize">
                            Size
                        </div>
                    </div>
                    <div class="sidebar-row">
                        <div class="form-column one-third text-center">
                            <input
                                type="text"
                                ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                                ng-model="drawingStorage.currentHtmlObject.styles.fontWeight">
                            Weight
                        </div>
                        <div class="form-column one-third text-center">
                            <input
                                type="text"
                                ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                                ng-model="drawingStorage.currentHtmlObject.styles.textAlign">
                            Align
                        </div>
                        <div class="form-column one-third text-center">
                            <input
                                type="number"
                                ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                                ng-model="drawingStorage.currentHtmlObject.styles.zIndex">
                            Z Index
                        </div>
                    </div>
                </div>

                <div class="sidebar-group">
                    <div class="sidebar-header">
                        Content
                    </div>
                    <div class="form-column full-width text-center">
                        <textarea
                            ng-model="drawingStorage.currentHtmlObject.styles.body"
                            ng-change="drawingStorage.updateHtmlObject(drawingStorage.currentHtmlObject)"
                            rows="6"></textarea>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
