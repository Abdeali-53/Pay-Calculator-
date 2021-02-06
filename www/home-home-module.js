(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>\n      Pay Calculator\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmitBtn(f)\">\n  <div>\n  <ion-card id=\"input-card\">\n  <ion-list>\n  <ion-item>\n  <div class=\"ion-margin-top ion-padding-top\">\n  <ion-label position=\"floating\"> <strong>\n  <ion-icon class=\"\" name=\"time-outline\" color=\"dark\"></ion-icon>\n  Number Of Hours Worked:\n </strong> </ion-label>\n <ion-input type=\"number\" [(ngModel)]=\"numberOfHours\" name=\"hoursWorked\" required></ion-input>\n </div>\n </ion-item>\n\n<ion-item>\n<div class=\"ion-margin-top ion-padding-top\">\n<ion-label position=\"floating\">\n<strong>\n<ion-icon class=\"\" name=\"hourglass-outline\" color=\"dark\"></ion-icon>\nHourly Rate:\n</strong>\n</ion-label>\n<ion-input [(ngModel)]=\"hourlyRate\" type=\"number\"  name=\"hourlyRate\" required></ion-input>\n</div>\n</ion-item>\n</ion-list>\n<div class=\"ion-margin ion-padding-top ion-padding-bottom\">\n<ion-button (click)=\"showResult = !showResult\" type=\"submit\" expand=\"block\" shape=\"rectangle\" fill=\"outline\" [disabled]=\"!f.valid\">Calculate</ion-button>\n</div>\n</ion-card>\n</div>\n</form>\n\n  <ion-card *ngIf=\"showResult\" id=\"result-card\">\n  <ion-card-header>\n    <ion-card-subtitle>Regular Pay:</ion-card-subtitle>\n    <ion-card-title>${{regularPay}}</ion-card-title>\n  </ion-card-header>\n  <ion-card-header>\n    <ion-card-subtitle>Overtime Pay:</ion-card-subtitle>\n    <ion-card-title>${{overTimePay}}</ion-card-title>\n  </ion-card-header>\n  <ion-card-header>\n    <ion-card-subtitle>Total Pay:</ion-card-subtitle>\n    <ion-card-title>${{totalPay}}</ion-card-title>\n  </ion-card-header>\n  <ion-card-header>\n    <ion-card-subtitle>Tax:</ion-card-subtitle>\n    <ion-card-title>${{tax}}</ion-card-title>\n  </ion-card-header>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#result-card {\n  text-align: left;\n  padding: 10px;\n  background-color: #98ecbb;\n}\n\n#ion-card-title {\n  font-size: 16px;\n  font-family: \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 30%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#about-card {\n  padding-top: 20px;\n  background-color: #98ecbb;\n}\n\n#ion-icon {\n  font-size: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUVFLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0E7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFERjs7QUFJQTtFQUVFLGVBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBO0VBRUUsaUJBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU1BO0VBRUUsZ0JBQUE7QUFKRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZXN1bHQtY2FyZCBcbntcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MiwgMjM2LCAxODcpO1xufVxuXG4jaW9uLWNhcmQtdGl0bGUgXG57XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbiNjb250YWluZXIgXG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAzMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcgXG57XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNhYm91dC1jYXJkIFxue1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTUyLCAyMzYsIDE4Nyk7XG59XG5cbiNpb24taWNvbiBcbntcbiAgZm9udC1zaXplOiAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomePage = class HomePage {
    constructor() {
        //Declaration of local variables 
        this.showResult = false;
        this.overtime = 0;
        this.overTimePay = 0;
        this.regularPay = 0;
        this.fourtyHoursPay = 0;
        this.totalPay = 0;
        this.tax = 0;
    }
    //calculate function will calculate the total pay as well as tax amount.
    calculate() {
        this.numberOfHours <= 40 ? this.overtime = 0 : this.overtime = this.numberOfHours - 40;
        this.overTimePay = this.overtime * this.hourlyRate * 1.5;
        this.fourtyHoursPay = 40 * this.hourlyRate;
        if (this.numberOfHours <= 40) {
            this.totalPay = this.numberOfHours * this.hourlyRate;
        }
        else {
            this.totalPay = this.overTimePay + this.fourtyHoursPay;
        }
        this.regularPay = this.numberOfHours * this.hourlyRate;
        this.tax = this.totalPay * 0.18;
    }
    onSubmitBtn(form) {
        //If all the fields are correct then return Calculated outputs.
        if (!form.valid) {
            return;
        }
        this.calculate();
    }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map