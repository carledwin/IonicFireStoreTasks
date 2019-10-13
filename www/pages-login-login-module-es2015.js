(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/pages/login/login.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/pages/login/login.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col size-xs=\"12\" size-sm=\"8\" size-md=\"4\" size-lg=\"3\" size-xl=\"3\">\n        <h1 text-center>\n          <ion-icon\n            name=\"done-all\"\n            color=\"primary\"\n            class=\"icon-7em \"\n          ></ion-icon>\n        </h1>\n        <form\n          [formGroup]=\"authForm\"\n          (submit)=\"onSubmit(authProviders.Email)\"\n        >\n      \n        <ng-container *ngIf=\"!configs.isSiginIn\">\n      \n            <ion-item>\n                <ion-icon\n                  name=\"person\"\n                  color=\"primary\"\n                  slot=\"start\"\n                ></ion-icon>\n                <ion-input\n                  formControlName=\"name\"\n                  type=\"text\"\n                  placeholder=\"Name\"\n                ></ion-input>\n                <ion-note\n                  slot=\"end\"\n                  color=\"danger\"\n                  *ngIf=\"name.dirty && name.hasError('required')\"\n                >\n                  Required\n                </ion-note>\n                <ion-note\n                  slot=\"end\"\n                  color=\"danger\"\n                  *ngIf=\"name.dirty && name.hasError('minlength')\"\n                >\n                  Invalid min size(6) name\n                </ion-note>\n                <ion-note\n                  slot=\"end\"\n                  color=\"danger\"\n                  *ngIf=\"name.dirty && name.hasError('maxlength')\"\n                >\n                  Invalid max size(30) name\n                </ion-note>\n              </ion-item>\n      \n        </ng-container>\n          \n        <ion-item>\n            <ion-icon\n              name=\"mail\"\n              color=\"primary\"\n              slot=\"start\"\n            ></ion-icon>\n            <ion-input\n              formControlName=\"email\"\n              type=\"email\"\n              placeholder=\"email@email.com\"\n              inputmode=\"email\"\n              autofocus=\"true\"\n            ></ion-input>\n            <ion-note\n              slot=\"end\"\n              color=\"danger\"\n              *ngIf=\"email.dirty && email.hasError('required')\"\n            >\n              Required\n            </ion-note>\n            <ion-note\n              slot=\"end\"\n              color=\"danger\"\n              *ngIf=\"email.dirty && email.hasError('email')\"\n            >\n              Invalid email\n            </ion-note>\n          </ion-item>\n      \n          <ion-item>\n            <ion-icon\n              name=\"lock\"\n              color=\"primary\"\n              slot=\"start\"\n            ></ion-icon>\n            <ion-input\n              formControlName=\"password\"\n              type=\"password\"\n              placeholder=\"re@sdsd12A\"\n            ></ion-input>\n            <ion-note\n              slot=\"end\"\n              color=\"danger\"\n              *ngIf=\"password.dirty && password.hasError('required')\"\n            >\n              Required\n            </ion-note>\n            <ion-note\n              slot=\"end\"\n              color=\"danger\"\n              *ngIf=\"password.dirty && password.hasError('minlength')\"\n            >\n              Invalid min size(6) password\n            </ion-note>\n            <ion-note\n              slot=\"end\"\n              color=\"danger\"\n              *ngIf=\"password.dirty && password.hasError('maxlength')\"\n            >\n              Invalid max size(10) password\n            </ion-note>\n          </ion-item>\n      \n          <ion-button\n            expand=\"block\"\n            type=\"submit\"\n            [disabled]=\"authForm.invalid\"\n          >\n            {{ configs.action }}\n          </ion-button>\n        </form>\n      \n        <ion-button\n          expand=\"block\"\n          fill=\"clear\"\n          (click)=\"changeAuthAction()\"\n        >\n          {{ configs.actionChange }}\n        </ion-button>\n        <ion-button expand=\"full\" (click)=\"onSubmit(authProviders.Facebook)\">\n          <ion-icon\n            name=\"logo-facebook\"\n            slot=\"start\"\n          ></ion-icon>\n          Login with Facebook\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/pages/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/pages/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/pages/login/login.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/auth/pages/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/auth/pages/login/login.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/pages/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/auth/pages/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_auth_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/services/auth.types */ "./src/app/core/services/auth.types.ts");
/* harmony import */ var _core_services_overlay_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/services/overlay.service */ "./src/app/core/services/overlay.service.ts");








let LoginPage = class LoginPage {
    constructor(authService, navCtrl, activatedRoute, formBuilder, overlayService) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.overlayService = overlayService;
        this.authProviders = _core_services_auth_types__WEBPACK_IMPORTED_MODULE_6__["AuthProvider"];
        this.configs = { isSiginIn: true, action: 'Login', actionChange: 'Create account' };
        this.nameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](' ', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]);
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.authForm = this.formBuilder.group({
            email: [' ', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [' ', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
        });
    }
    get name() {
        return this.authForm.get('name');
    }
    get email() {
        return this.authForm.get('email');
    }
    get password() {
        return this.authForm.get('password');
    }
    onSubmit(provider) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.overlayService.loading();
            try {
                const credentials = yield this.authService.orchestrator({
                    isSignIn: this.configs.isSiginIn,
                    user: this.authForm.value,
                    provider
                });
                console.log('AuthForm: ', this.authForm.value);
                console.log('Redirecting....');
                this.navCtrl.navigateForward(this.activatedRoute.snapshot.queryParamMap.get('redirect') || '/tasks');
            }
            catch (error) {
                console.error('Auth error: ', error);
                yield this.overlayService.toast({
                    message: error.message
                });
            }
            finally {
                loading.dismiss();
            }
        });
    }
    changeAuthAction() {
        this.configs.isSiginIn = !this.configs.isSiginIn;
        const { isSiginIn } = this.configs;
        this.configs.action = isSiginIn ? 'Login' : 'Sign Up';
        this.configs.actionChange = isSiginIn ? 'Create account' : 'Already have an account';
        !isSiginIn
            ? this.authForm.addControl('name', this.nameControl)
            : this.authForm.removeControl('name');
    }
};
LoginPage.ctorParameters = () => [
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_services_overlay_service__WEBPACK_IMPORTED_MODULE_7__["OverlayService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _core_services_overlay_service__WEBPACK_IMPORTED_MODULE_7__["OverlayService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map