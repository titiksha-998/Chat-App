(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"topbar\">{{title}}</div>\r\n  <div *ngIf=\"!username\" class=\"usernamebox\">\r\n    <div class=\"user\">\r\n      <p style=\"padding-bottom: 10px; font-weight: bold;\">Who are you?</p>\r\n      <form (submit)=\"addUser(user)\">\r\n        <input type=\"text\" name=\"user\" [(ngModel)]=\"user\">\r\n        <button type=\"submit\">Join Chat</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"username\" class=\"chatarea\">\r\n    <div style=\"min-height: 0; overflow: scroll\" id=\"scrolldiv\">\r\n      <div *ngFor=\"let chat of chats; let i = index\" class=\"chat\" [class.notify]=\"chat.type == 'notify'\" [class.me]=\"chat.user == username\">\r\n        <p><span class=\"username\">{{chat.user}}</span>{{chat.message}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"username\" class=\"inputarea\">\r\n    <form (submit)=\"addChat()\">\r\n      <input class=\"textbox\" name=\"message\" [(ngModel)]=\"message\" type=\"text\" autofocus autocomplete=\"off\">\r\n      <button type=\"submit\" class=\"sendbutton\">Send</button>\r\n    </form>\r\n  </div>\r\n</div> \r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n}\r\n\r\n.topbar {\r\n  padding: 15px 20px;\r\n  background-color: #2196F3;\r\n  color: #fff;\r\n  font-size: 1.2em;\r\n}\r\n\r\n.chatarea {\r\n  -webkit-box-flex: 1;\r\n          flex-grow: 1;\r\n  background-color: #e0e0e0;\r\n  padding: 10px 20px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n\r\n.chatarea .chat {\r\n    margin: 4px 0;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n  }\r\n\r\n.chatarea .chat.me {\r\n      -webkit-box-pack: end;\r\n              justify-content: flex-end;\r\n    }\r\n\r\n.chatarea .chat.notify {\r\n      -webkit-box-pack: center;\r\n              justify-content: center;\r\n    }\r\n\r\n.chatarea .chat.me p {\r\n      background-color: #fff;\r\n    }\r\n\r\n.chatarea .chat p {\r\n      background-color: #BBDEFB;\r\n      display: inline;\r\n      padding: 10px;\r\n      border-radius: 5px;\r\n      box-shadow: 1px 1px 4px rgba(0,0,0,0.3);\r\n    }\r\n\r\n.chatarea .chat.notify p {\r\n      background-color: transparent;\r\n      box-shadow: none;\r\n      font-size: 0.8em;\r\n      font-weight: bold;\r\n      color: grey;\r\n    }\r\n\r\n.chatarea .chat p .username {\r\n      display: block;\r\n      font-size: 0.8em;\r\n      font-weight: bold;\r\n      font-style: italic;\r\n    }\r\n\r\n.inputarea form {\r\n  padding: 10px 0 10px 20px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.inputarea .textbox {\r\n  -webkit-box-flex: 1;\r\n          flex-grow: 1;\r\n}\r\n\r\n.inputarea .textbox, .usernamebox .user input {\r\n  width: 100%;\r\n  display: block;\r\n  border: 0;\r\n  font-size: 1.2em;\r\n  border-bottom: 2px solid #e0e0e0;\r\n}\r\n\r\n.inputarea .textbox:focus, .usernamebox .user input:focus {\r\n    outline: 0;\r\n    border-color: #2196F3;\r\n  }\r\n\r\n.inputarea .sendbutton, .usernamebox .user button {\r\n  padding: 7px 10px;\r\n  font-size: 1em;\r\n  border: 0;\r\n  background-color: transparent;\r\n  color: #2196F3;\r\n  font-weight: bold;\r\n}\r\n\r\n.inputarea .sendbutton:focus {\r\n    outline: 0;\r\n  }\r\n\r\n.usernamebox {\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  background-color: #e0e0e0;\r\n}\r\n\r\n.usernamebox .user {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n  }\r\n\r\n.usernamebox .user form {\r\n      text-align: center;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBWTtVQUFaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHFCQUF5QjtVQUF6Qix5QkFBeUI7QUFDM0I7O0FBRUU7SUFDRSxhQUFhO0lBQ2Isb0JBQWE7SUFBYixhQUFhO0lBQ2IsdUJBQTJCO1lBQTNCLDJCQUEyQjtFQUM3Qjs7QUFFRTtNQUNFLHFCQUF5QjtjQUF6Qix5QkFBeUI7SUFDM0I7O0FBRUE7TUFDRSx3QkFBdUI7Y0FBdkIsdUJBQXVCO0lBQ3pCOztBQUVBO01BQ0Usc0JBQXNCO0lBQ3hCOztBQUVBO01BQ0UseUJBQXlCO01BQ3pCLGVBQWU7TUFDZixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLHVDQUF1QztJQUN6Qzs7QUFFQTtNQUNFLDZCQUE2QjtNQUM3QixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixXQUFXO0lBQ2I7O0FBRUE7TUFDRSxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixrQkFBa0I7SUFDcEI7O0FBRUo7RUFDRSx5QkFBeUI7RUFDekIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFZO1VBQVosWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQzs7QUFFRTtJQUNFLFVBQVU7SUFDVixxQkFBcUI7RUFDdkI7O0FBRUY7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFRTtJQUNFLFVBQVU7RUFDWjs7QUFFRjtFQUNFLG1CQUFPO1VBQVAsT0FBTztFQUNQLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUU7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7O0FBRUU7TUFDRSxrQkFBa0I7SUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50b3BiYXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbi5jaGF0YXJlYSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4gIC5jaGF0YXJlYSAuY2hhdCB7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gICAgLmNoYXRhcmVhIC5jaGF0Lm1lIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhdGFyZWEgLmNoYXQubm90aWZ5IHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXRhcmVhIC5jaGF0Lm1lIHAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGF0YXJlYSAuY2hhdCBwIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JCREVGQjtcclxuICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhdGFyZWEgLmNoYXQubm90aWZ5IHAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGF0YXJlYSAuY2hhdCBwIC51c2VybmFtZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG5cclxuLmlucHV0YXJlYSBmb3JtIHtcclxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0YXJlYSAudGV4dGJveCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uaW5wdXRhcmVhIC50ZXh0Ym94LCAudXNlcm5hbWVib3ggLnVzZXIgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTBlMGUwO1xyXG59XHJcblxyXG4gIC5pbnB1dGFyZWEgLnRleHRib3g6Zm9jdXMsIC51c2VybmFtZWJveCAudXNlciBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjE5NkYzO1xyXG4gIH1cclxuXHJcbi5pbnB1dGFyZWEgLnNlbmRidXR0b24sIC51c2VybmFtZWJveCAudXNlciBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzIxOTZGMztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuICAuaW5wdXRhcmVhIC5zZW5kYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG5cclxuLnVzZXJuYW1lYm94IHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG4gIC51c2VybmFtZWJveCAudXNlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICAgLnVzZXJuYW1lYm94IC51c2VyIGZvcm0ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AppComponent = class AppComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.title = ' Chat App';
        this.message = '';
        this.chats = [];
        this.messageService.getChats().subscribe((data) => {
            this.chats = data;
            window.setTimeout(() => {
                const elem = document.getElementById('scrolldiv');
                elem.scrollTop = elem.scrollHeight;
            }, 500);
        });
    }
    addChat() {
        if (this.message.length === 0) {
            return;
        }
        this.messageService.addChat(this.message);
        this.message = '';
    }
    addUser(user) {
        this.messageService.addUser(user);
        this.username = user;
    }
};
AppComponent.ctorParameters = () => [
    { type: _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let MessageService = class MessageService {
    constructor() {
        this._chats = [];
        this._chatssub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__["connect"]();
        this.socket.on('connect', () => {
            console.log('connected to the server');
        });
        this.socket.on('message recieved', (data) => {
            this._chats.push(data);
            this._chatssub.next([...this._chats]);
        });
        this.socket.on('all messages', (data) => {
            this._chats = [...data];
            this._chatssub.next([...this._chats]);
        });
        this.socket.on('user connected', (data) => {
            this._chats.push({ message: `${data} connected`, type: 'notify' });
            this._chatssub.next([...this._chats]);
        });
        this.socket.on('user disconnected', (data) => {
            this._chats.push({ message: `${data} disconnected`, type: 'notify' });
            this._chatssub.next([...this._chats]);
        });
    }
    addChat(message) {
        this.socket.emit('new message', message);
    }
    addUser(user) {
        this.socket.emit('new user', user);
    }
    getChats() {
        return this._chatssub.asObservable();
    }
};
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DELL\desktop\chatApp\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map