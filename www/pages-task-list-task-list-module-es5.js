(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-task-list-task-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/components/task-item/task-item.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/components/task-item/task-item.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ion-item-sliding #sliding>\n   <ion-item (click)=\"updateEventEmitter.emit(task)\">\n     {{ task.title }}\n    <ion-toggle slot=\"end\" \n                color=\"primary\" \n                [checked]=\"task.done\" \n                (ionChange)=\"doneEventEmitter.emit(task)\"\n                (click)=\"$event.stopPropagation()\"></ion-toggle>\n   </ion-item>\n\n   <ion-item-options side=\"start\">\n     <ion-item-option color=\"danger\" (click)=\"deleteEventEmitter.emit(task); sliding.close()\">\n       <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n     </ion-item-option>\n     <ion-item-option color=\"primary\" (click)=\"updateEventEmitter.emit(task); sliding.close()\">\n        <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n      </ion-item-option>\n   </ion-item-options>\n </ion-item-sliding>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/pages/task-list/task-list.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/pages/task-list/task-list.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    \n    <app-menu-toggle slot=\"start\" menu=\"main-menu-id\"></app-menu-toggle>\n    <ion-title>Task List</ion-title>\n    <app-logout-button slot=\"end\" menu=\"main-menu-id\"></app-logout-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list *ngIf=\"(tasks$ | async) as tasks\">\n    <ng-container *ngIf=\"tasks.length > 0; else noTasks\">\n      <app-task-item *ngFor=\"let task of tasks\" [task]=\"task\" \n      (updateEventEmitter)=\"onUpdate($event)\"\n      (deleteEventEmitter)=\"onDelete($event)\"\n      (doneEventEmitter)=\"onDone($event)\"></app-task-item>\n    </ng-container>\n    <ng-template #noTasks>\n      <ion-item lines=\"none\">\n        No Tasks yet ....\n      </ion-item>\n    </ng-template>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"create\" routerDirection=\"forward\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tasks/components/components.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/tasks/components/components.module.ts ***!
  \*******************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _task_item_task_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-item/task-item.component */ "./src/app/tasks/components/task-item/task-item.component.ts");




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_task_item_task_item_component__WEBPACK_IMPORTED_MODULE_3__["TaskItemComponent"]],
            imports: [
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            exports: [
                _task_item_task_item_component__WEBPACK_IMPORTED_MODULE_3__["TaskItemComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/tasks/components/task-item/task-item.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/tasks/components/task-item/task-item.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL2NvbXBvbmVudHMvdGFzay1pdGVtL3Rhc2staXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tasks/components/task-item/task-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/tasks/components/task-item/task-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: TaskItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskItemComponent", function() { return TaskItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TaskItemComponent = /** @class */ (function () {
    function TaskItemComponent() {
        //eventos que podem ser emitidos pelo component para concluir a task
        this.doneEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskItemComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskItemComponent.prototype, "doneEventEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskItemComponent.prototype, "updateEventEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskItemComponent.prototype, "deleteEventEmitter", void 0);
    TaskItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-item',
            template: __webpack_require__(/*! raw-loader!./task-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/components/task-item/task-item.component.html"),
            styles: [__webpack_require__(/*! ./task-item.component.scss */ "./src/app/tasks/components/task-item/task-item.component.scss")]
        })
    ], TaskItemComponent);
    return TaskItemComponent;
}());



/***/ }),

/***/ "./src/app/tasks/pages/task-list/task-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/tasks/pages/task-list/task-list.module.ts ***!
  \***********************************************************/
/*! exports provided: TaskListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListPageModule", function() { return TaskListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/tasks/components/components.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _task_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-list.page */ "./src/app/tasks/pages/task-list/task-list.page.ts");






var routes = [
    {
        path: '',
        component: _task_list_page__WEBPACK_IMPORTED_MODULE_5__["TaskListPage"]
    }
];
var TaskListPageModule = /** @class */ (function () {
    function TaskListPageModule() {
    }
    TaskListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_task_list_page__WEBPACK_IMPORTED_MODULE_5__["TaskListPage"]]
        })
    ], TaskListPageModule);
    return TaskListPageModule;
}());



/***/ }),

/***/ "./src/app/tasks/pages/task-list/task-list.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/tasks/pages/task-list/task-list.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3BhZ2VzL3Rhc2stbGlzdC90YXNrLWxpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tasks/pages/task-list/task-list.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/tasks/pages/task-list/task-list.page.ts ***!
  \*********************************************************/
/*! exports provided: TaskListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListPage", function() { return TaskListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_services_overlay_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/services/overlay.service */ "./src/app/core/services/overlay.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/tasks.service */ "./src/app/tasks/services/tasks.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var TaskListPage = /** @class */ (function () {
    function TaskListPage(tasksService, overlayService, navCtrl) {
        this.tasksService = tasksService;
        this.overlayService = overlayService;
        this.navCtrl = navCtrl;
    }
    TaskListPage.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.overlayService.loading()];
                    case 1:
                        loading = _a.sent();
                        this.tasks$ = this.tasksService.getAll();
                        console.log('Tasks... >>> ', this.tasks$);
                        this.tasks$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (tasks) { return loading.dismiss(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskListPage.prototype.onUpdate = function (task) {
        console.log('preparando para editar ....');
        this.navCtrl.navigateForward("/tasks/edit/" + task.id);
        // ou this.navCtrl.navigateForward(['tasks', 'edit', task.id]);
    };
    TaskListPage.prototype.onDelete = function (task) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('preparando para excluir ....');
                        return [4 /*yield*/, this.overlayService.alert({
                                message: "Do you really want to delete the task \"" + task.title + "\"?",
                                buttons: [
                                    {
                                        text: 'Yes',
                                        handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.tasksService.delete(task)];
                                                    case 1:
                                                        _a.sent();
                                                        return [4 /*yield*/, this.overlayService.toast({
                                                                message: "Task \"" + task.title + "\" deleted!"
                                                            })];
                                                    case 2:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    },
                                    'No'
                                ]
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskListPage.prototype.onDone = function (task) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var taskToUpdate;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskToUpdate = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task, { done: !task.done });
                        return [4 /*yield*/, this.tasksService.update(taskToUpdate)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.overlayService.toast({
                                message: "Task \"" + task.title + "\" " + (taskToUpdate.done ? 'completed' : 'updated') + "!"
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskListPage.ctorParameters = function () { return [
        { type: _services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TasksService"] },
        { type: _core_services_overlay_service__WEBPACK_IMPORTED_MODULE_1__["OverlayService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    TaskListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(/*! raw-loader!./task-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/pages/task-list/task-list.page.html"),
            styles: [__webpack_require__(/*! ./task-list.page.scss */ "./src/app/tasks/pages/task-list/task-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TasksService"],
            _core_services_overlay_service__WEBPACK_IMPORTED_MODULE_1__["OverlayService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], TaskListPage);
    return TaskListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-task-list-task-list-module-es5.js.map