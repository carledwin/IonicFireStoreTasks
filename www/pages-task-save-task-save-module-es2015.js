(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-task-save-task-save-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/pages/task-save/task-save.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/pages/task-save/task-save.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tasks\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ pageTitle }}</ion-title>\n    <app-logout-button slot=\"end\" menu=\"main-menu-id\"></app-logout-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]=\"taskFormGroup\" (submit)=\"onSubmit()\">\n    <ion-item>\n      <ion-icon name=\"paper\" slot=\"start\" color=\" primary\"></ion-icon>\n      <ion-input type=\"text\" placeholder=\"Title\" autofocus=\"true\" inputmode=\"text\"\n      formControlName=\"title\"></ion-input>\n      <ion-toggle *ngIf=\"taskId\" slot=\"end\" color=\"primary\" formControlName=\"done\"></ion-toggle>\n    </ion-item>\n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"taskFormGroup.invalid\">Save</ion-button>\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tasks/pages/task-save/task-save.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/tasks/pages/task-save/task-save.module.ts ***!
  \***********************************************************/
/*! exports provided: TaskSavePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSavePageModule", function() { return TaskSavePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _task_save_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-save.page */ "./src/app/tasks/pages/task-save/task-save.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _task_save_page__WEBPACK_IMPORTED_MODULE_3__["TaskSavePage"]
    }
];
let TaskSavePageModule = class TaskSavePageModule {
};
TaskSavePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [_task_save_page__WEBPACK_IMPORTED_MODULE_3__["TaskSavePage"]]
    })
], TaskSavePageModule);



/***/ }),

/***/ "./src/app/tasks/pages/task-save/task-save.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/tasks/pages/task-save/task-save.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3BhZ2VzL3Rhc2stc2F2ZS90YXNrLXNhdmUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tasks/pages/task-save/task-save.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/tasks/pages/task-save/task-save.page.ts ***!
  \*********************************************************/
/*! exports provided: TaskSavePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSavePage", function() { return TaskSavePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_services_overlay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/services/overlay.service */ "./src/app/core/services/overlay.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/tasks.service */ "./src/app/tasks/services/tasks.service.ts");








let TaskSavePage = class TaskSavePage {
    constructor(formBuilder, navCtrl, overlayService, activatedRoute, //rota atual
    tasksService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.overlayService = overlayService;
        this.activatedRoute = activatedRoute;
        this.tasksService = tasksService;
        this.pageTitle = '...';
        this.taskId = undefined;
    }
    ngOnInit() {
        this.createForm();
        this.init();
    }
    init() {
        const taskId = this.activatedRoute.snapshot.paramMap.get('id');
        if (!taskId) {
            this.pageTitle = 'Create Task';
            console.log('Eh criacao');
            return;
        }
        console.log('Eh edicao');
        this.taskId = taskId;
        console.log('TaskId: ', this.taskId);
        this.pageTitle = 'Edit Task';
        this.tasksService
            .get(taskId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(({ title, done }) => {
            this.taskFormGroup.get('title').setValue(title);
            this.taskFormGroup.get('done').setValue(done);
            console.log('Encontrou a task');
        });
    }
    createForm() {
        this.taskFormGroup = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            done: [false]
        });
    }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.overlayService.loading({ message: 'Saving ....' });
            console.log('Task In: ', this.taskFormGroup.value);
            try {
                const task = !this.taskId
                    ? yield this.tasksService.create(this.taskFormGroup.value)
                    : yield this.tasksService.update(Object.assign({ id: this.taskId }, this.taskFormGroup.value));
                console.log('Task saved! ', task);
                this.navCtrl.navigateBack('/tasks');
            }
            catch (error) {
                console.error('Error saving Task, ', error);
                yield this.overlayService.toast({ message: error.message });
            }
            finally {
                loading.dismiss();
            }
        });
    }
};
TaskSavePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _core_services_overlay_service__WEBPACK_IMPORTED_MODULE_3__["OverlayService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_tasks_service__WEBPACK_IMPORTED_MODULE_7__["TasksService"] }
];
TaskSavePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-save',
        template: __webpack_require__(/*! raw-loader!./task-save.page.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/pages/task-save/task-save.page.html"),
        styles: [__webpack_require__(/*! ./task-save.page.scss */ "./src/app/tasks/pages/task-save/task-save.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _core_services_overlay_service__WEBPACK_IMPORTED_MODULE_3__["OverlayService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_tasks_service__WEBPACK_IMPORTED_MODULE_7__["TasksService"]])
], TaskSavePage);



/***/ })

}]);
//# sourceMappingURL=pages-task-save-task-save-module-es2015.js.map