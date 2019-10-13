(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-politica-privacidade-politica-privacidade-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/politica-privacidade/politica-privacidade.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/politica-privacidade/politica-privacidade.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>politica-privacidade</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<h2>Política de privacidade para <a href='https://ionic-firestore-tasks-5e0f5.firebaseapp.com'>Ionic Firestore Tasks</a></h2><p>Todas as suas informações pessoais recolhidas, serão usadas para o ajudar a tornar a sua visita no nosso site o mais produtiva e agradável possível.</p><p>A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é importante para o Ionic Firestore Tasks.</p><p>Todas as informações pessoais relativas a membros, assinantes, clientes ou visitantes que usem o Ionic Firestore Tasks serão tratadas em concordância com a Lei da Proteção de Dados Pessoais de 26 de outubro de 1998 (Lei n.º 67/98).</p><p>A informação pessoal recolhida pode incluir o seu nome, e-mail, número de telefone e/ou telemóvel, morada, data de nascimento e/ou outros.</p><p>O uso do Ionic Firestore Tasks pressupõe a aceitação deste <a href='http://www.politicaprivacidade.com' title='acordo de privacidade'>Acordo de privacidade</a>. A equipa do Ionic Firestore Tasks reserva-se ao direito de alterar este acordo sem aviso prévio. Deste modo, recomendamos que consulte a nossa política de privacidade com regularidade de forma a estar sempre atualizado.</p><h2>Os anúncios</h2><p>Tal como outros websites, coletamos e utilizamos informação contida nos anúncios. A informação contida nos anúncios, inclui o seu endereço IP (Internet Protocol), o seu ISP (Internet Service Provider, como o Sapo, Clix, ou outro), o browser que utilizou ao visitar o nosso website (como o Internet Explorer ou o Firefox), o tempo da sua visita e que páginas visitou dentro do nosso website.</p><h2>Cookie DoubleClick Dart</h2><p>O Google, como fornecedor de terceiros, utiliza cookies para exibir anúncios no nosso website;</p><p>Com o cookie DART, o Google pode exibir anúncios com base nas visitas que o leitor fez a outros websites na Internet;</p><p>Os utilizadores podem desativar o cookie DART visitando a Política de privacidade da rede de conteúdo e dos anúncios do Google.</p><h2>Os Cookies e Web Beacons</h2><p>Utilizamos cookies para armazenar informação, tais como as suas preferências pessoas quando visita o nosso website. Isto poderá incluir um simples popup, ou uma ligação em vários serviços que providenciamos, tais como fóruns.</p><p>Em adição também utilizamos publicidade de terceiros no nosso website para suportar os custos de manutenção. Alguns destes publicitários, poderão utilizar tecnologias como os cookies e/ou web beacons quando publicitam no nosso website, o que fará com que esses publicitários (como o Google através do Google AdSense) também recebam a sua informação pessoal, como o endereço IP, o seu ISP, o seu browser, etc. Esta função é geralmente utilizada para geotargeting (mostrar publicidade de Lisboa apenas aos leitores oriundos de Lisboa por ex.) ou apresentar publicidade direcionada a um tipo de utilizador (como mostrar publicidade de restaurante a um utilizador que visita sites de culinária regularmente, por ex.).</p><p>Você detém o poder de desligar os seus cookies, nas opções do seu browser, ou efetuando alterações nas ferramentas de programas Anti-Virus, como o Norton Internet Security. No entanto, isso poderá alterar a forma como interage com o nosso website, ou outros websites. Isso poderá afetar ou não permitir que faça logins em programas, sites ou fóruns da nossa e de outras redes.</p><h2>Ligações a Sites de terceiros</h2><p>O Ionic Firestore Tasks possui ligações para outros sites, os quais, a nosso ver, podem conter informações / ferramentas úteis para os nossos visitantes. A nossa política de privacidade não é aplicada a sites de terceiros, pelo que, caso visite outro site a partir do nosso deverá ler a politica de privacidade do mesmo.</p><p>Não nos responsabilizamos pela política de privacidade ou conteúdo presente nesses mesmos sites.</p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/politica-privacidade/politica-privacidade.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/politica-privacidade/politica-privacidade.module.ts ***!
  \***************************************************************************/
/*! exports provided: PoliticaPrivacidadePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticaPrivacidadePageModule", function() { return PoliticaPrivacidadePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _politica_privacidade_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./politica-privacidade.page */ "./src/app/pages/politica-privacidade/politica-privacidade.page.ts");







const routes = [
    {
        path: '',
        component: _politica_privacidade_page__WEBPACK_IMPORTED_MODULE_6__["PoliticaPrivacidadePage"]
    }
];
let PoliticaPrivacidadePageModule = class PoliticaPrivacidadePageModule {
};
PoliticaPrivacidadePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_politica_privacidade_page__WEBPACK_IMPORTED_MODULE_6__["PoliticaPrivacidadePage"]]
    })
], PoliticaPrivacidadePageModule);



/***/ }),

/***/ "./src/app/pages/politica-privacidade/politica-privacidade.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/politica-privacidade/politica-privacidade.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvbGl0aWNhLXByaXZhY2lkYWRlL3BvbGl0aWNhLXByaXZhY2lkYWRlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/politica-privacidade/politica-privacidade.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/politica-privacidade/politica-privacidade.page.ts ***!
  \*************************************************************************/
/*! exports provided: PoliticaPrivacidadePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticaPrivacidadePage", function() { return PoliticaPrivacidadePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PoliticaPrivacidadePage = class PoliticaPrivacidadePage {
    constructor() { }
    ngOnInit() {
    }
};
PoliticaPrivacidadePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-politica-privacidade',
        template: __webpack_require__(/*! raw-loader!./politica-privacidade.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/politica-privacidade/politica-privacidade.page.html"),
        styles: [__webpack_require__(/*! ./politica-privacidade.page.scss */ "./src/app/pages/politica-privacidade/politica-privacidade.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PoliticaPrivacidadePage);



/***/ })

}]);
//# sourceMappingURL=pages-politica-privacidade-politica-privacidade-module-es2015.js.map