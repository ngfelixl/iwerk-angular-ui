(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../src/app/ui/checkbox/checkbox.config.ts":
/*!**************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/checkbox/checkbox.config.ts ***!
  \**************************************************************************************/
/*! exports provided: IW_CHECKBOX_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IW_CHECKBOX_CONFIG", function() { return IW_CHECKBOX_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var IW_CHECKBOX_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('iw-checkbox.config');


/***/ }),

/***/ "../../src/app/ui/checkbox/checkbox.module.ts":
/*!**************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/checkbox/checkbox.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return CheckboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "../../src/app/ui/checkbox/checkbox/checkbox.component.ts");




var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    CheckboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"]],
            exports: [_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"]]
        })
    ], CheckboxModule);
    return CheckboxModule;
}());



/***/ }),

/***/ "../../src/app/ui/checkbox/checkbox/checkbox.component.html":
/*!****************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/checkbox/checkbox/checkbox.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"checkbox__checkbox\" [attr.tabindex]=\"getTabIndex()\" (keyup)=\"onKeyup($event)\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/>\n  </svg>\n</div>\n<div class=\"checkbox__label\">\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "../../src/app/ui/checkbox/checkbox/checkbox.component.scss":
/*!****************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/checkbox/checkbox/checkbox.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iw-checkbox {\n  display: inline-block;\n  line-height: 15px; }\n  iw-checkbox:not(.checkbox--disabled) {\n    cursor: pointer; }\n  iw-checkbox.checkbox--disabled {\n    cursor: not-allowed; }\n  iw-checkbox.checkbox--disabled .checkbox__checkbox {\n    opacity: 0.2; }\n  iw-checkbox:not(.checkbox--disabled):not(.checkbox--checked):hover .checkbox__checkbox {\n    border-color: grey; }\n  iw-checkbox.checkbox--checked .checkbox__checkbox {\n    border-color: black; }\n  iw-checkbox.checkbox--checked .checkbox__checkbox svg {\n    opacity: 1; }\n  iw-checkbox .checkbox__checkbox {\n    width: 15px;\n    height: 15px;\n    position: relative;\n    margin: 0 3px;\n    display: inline-block;\n    float: left;\n    transition: border-color 0.3s;\n    border: 1px solid lightgrey;\n    border-radius: 2px;\n    overflow: hidden; }\n  iw-checkbox .checkbox__checkbox svg {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      width: 75%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      opacity: 0;\n      transition: opacity 0.3s; }\n  iw-checkbox .checkbox__label {\n    display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9zcmMvYXBwL3VpL2NoZWNrYm94L2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXFCO0VBQ3JCLGtCQUFpQixFQXlEbEI7RUEzREQ7SUFLSSxnQkFBZSxFQUNoQjtFQU5IO0lBUUksb0JBQW1CLEVBQ3BCO0VBVEg7SUFhTSxhQUFZLEVBQ2I7RUFkTDtJQW1CTSxtQkFBa0IsRUFDbkI7RUFwQkw7SUF5Qk0sb0JBQW1CLEVBQ3BCO0VBMUJMO0lBNkJNLFdBQVUsRUFDWDtFQTlCTDtJQWtDSSxZQUFXO0lBQ1gsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2Isc0JBQXFCO0lBQ3JCLFlBQVc7SUFDWCw4QkFBNkI7SUFDN0IsNEJBQTJCO0lBQzNCLG1CQUFrQjtJQUNsQixpQkFBZ0IsRUFXakI7RUF0REg7TUE4Q00sbUJBQWtCO01BQ2xCLFVBQVM7TUFDVCxTQUFRO01BQ1IsV0FBVTtNQUNWLHlDQUFnQztjQUFoQyxpQ0FBZ0M7TUFDaEMsV0FBVTtNQUNWLHlCQUF3QixFQUN6QjtFQXJETDtJQXlESSxzQkFBcUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC91aS9jaGVja2JveC9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIml3LWNoZWNrYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgXG4gICY6bm90KC5jaGVja2JveC0tZGlzYWJsZWQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgJi5jaGVja2JveC0tZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAmLmNoZWNrYm94LS1kaXNhYmxlZCB7XG4gICAgLmNoZWNrYm94X19jaGVja2JveCB7XG4gICAgICBvcGFjaXR5OiAwLjI7XG4gICAgfVxuICB9XG5cbiAgJjpub3QoLmNoZWNrYm94LS1kaXNhYmxlZCk6bm90KC5jaGVja2JveC0tY2hlY2tlZCk6aG92ZXIge1xuICAgIC5jaGVja2JveF9fY2hlY2tib3gge1xuICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgIH1cbiAgfVxuXG4gICYuY2hlY2tib3gtLWNoZWNrZWQge1xuICAgIC5jaGVja2JveF9fY2hlY2tib3gge1xuICAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgXG4gICAgLmNoZWNrYm94X19jaGVja2JveCBzdmcge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICAuY2hlY2tib3hfX2NoZWNrYm94IHtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCAzcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIHN2ZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gICAgfVxuICB9XG5cbiAgLmNoZWNrYm94X19sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59Il19 */"

/***/ }),

/***/ "../../src/app/ui/checkbox/checkbox/checkbox.component.ts":
/*!**************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/checkbox/checkbox/checkbox.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _checkbox_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../checkbox.config */ "../../src/app/ui/checkbox/checkbox.config.ts");




/**
 * A checkbox component is great!
 */
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(renderer, elementRef, checkboxConfig) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.checkboxConfig = checkboxConfig;
        this.__value = false;
        this.__isDisabled = false;
        this.onChangeCb = this.onTouchedCb = function () { };
    }
    CheckboxComponent_1 = CheckboxComponent;
    Object.defineProperty(CheckboxComponent.prototype, "value", {
        get: function () {
            return this.__value;
        },
        set: function (v) {
            this.__value = v;
            if (v) {
                this.renderer.addClass(this.elementRef.nativeElement, 'checkbox--checked');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'checkbox--checked');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "isDisabled", {
        get: function () {
            return this.__isDisabled;
        },
        set: function (v) {
            this.__isDisabled = v;
            this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', v);
            if (v) {
                this.renderer.addClass(this.elementRef.nativeElement, 'checkbox--disabled');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'checkbox--disabled');
            }
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.ngOnInit = function () {
        if (this.checkboxConfig && this.checkboxConfig.containerClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.checkboxConfig.containerClass);
        }
    };
    CheckboxComponent.prototype.onKeyup = function ($event) {
        if ($event.keyCode === 32) {
            this.userToggle();
        }
    };
    CheckboxComponent.prototype.getTabIndex = function () {
        if (this.isDisabled) {
            return '';
        }
        return String(this.tabindex || 0);
    };
    CheckboxComponent.prototype.onClick = function ($event) {
        this.userToggle();
    };
    /**
     * Implements ControlValueAccessor:writeValue
     * @param obj the new selection
     */
    CheckboxComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    /**
     * Implements ControlValueAccessor:registerOnChange
     * @param fn
     */
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCb = fn;
    };
    /**
     * Implements ControlValueAccessor:registerOnTouched
     * @param fn
     */
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCb = fn;
    };
    /**
     * Implements ControlValueAccessor:setDisabledState
     * @param isDisabled
     */
    CheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    CheckboxComponent.prototype.userToggle = function () {
        if (this.isDisabled) {
            return;
        }
        this.value = !this.value;
        this.onTouchedCb();
        this.onChangeCb(this.value);
    };
    var CheckboxComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CheckboxComponent.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CheckboxComponent.prototype, "onClick", null);
    CheckboxComponent = CheckboxComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iw-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "../../src/app/ui/checkbox/checkbox/checkbox.component.html"),
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CheckboxComponent_1; }),
                    multi: true
                }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "../../src/app/ui/checkbox/checkbox/checkbox.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_checkbox_config__WEBPACK_IMPORTED_MODULE_3__["IW_CHECKBOX_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog-container/dialog-container.component.html":
/*!******************************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/dialog/dialog-container/dialog-container.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"dialog-container__content\">\n  <ng-content></ng-content>\n</div>\n\n<div class=\"dialog-container__focus-trap\" iwDialogFocusTrap></div>\n"

/***/ }),

/***/ "../../src/app/ui/dialog/dialog-container/dialog-container.component.scss":
/*!******************************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/dialog/dialog-container/dialog-container.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iw-dialog-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  opacity: 0;\n  background: rgba(192, 192, 192, 0.67);\n  transition: opacity 0.5s;\n  outline: none; }\n  iw-dialog-container .dialog-container__content {\n    position: absolute;\n    top: 100px;\n    left: 20%;\n    width: 60%;\n    background: white;\n    max-height: calc(100% - 200px);\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    box-shadow: 2px 2px 4px 1px gray;\n    padding: 15px; }\n  iw-dialog-container.iw-dialog-container--visible {\n    opacity: 1; }\n  iw-dialog-container.iw-dialog-container--visible .dialog-container__content {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n  iw-dialog-container .dialog-container__focus-trap {\n    opacity: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9zcmMvYXBwL3VpL2RpYWxvZy9kaWFsb2ctY29udGFpbmVyL2RpYWxvZy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZTtFQUNmLE9BQU07RUFDTixRQUFPO0VBQ1AsWUFBVztFQUNYLGFBQVk7RUFDWixXQUFVO0VBQ1YsV0FBVTtFQUNWLHNDQUFxQztFQUNyQyx5QkFBd0I7RUFDeEIsY0FBYSxFQTRCZDtFQXRDRDtJQWFJLG1CQUFrQjtJQUNsQixXQUFVO0lBQ1YsVUFBUztJQUNULFdBQVU7SUFDVixrQkFBaUI7SUFDakIsK0JBQThCO0lBQzlCLGlCQUFnQjtJQUNoQixjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLG1DQUEwQjtJQUExQiwyQkFBMEI7SUFBMUIsbURBQTBCO0lBQzFCLHFDQUE0QjtZQUE1Qiw2QkFBNEI7SUFDNUIsaUNBQWdDO0lBQ2hDLGNBQWEsRUFDZDtFQTFCSDtJQTZCSSxXQUFVLEVBSVg7RUFqQ0g7TUErQk0saUNBQXdCO2NBQXhCLHlCQUF3QixFQUN6QjtFQWhDTDtJQW9DSSxXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC91aS9kaWFsb2cvZGlhbG9nLWNvbnRhaW5lci9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaXctZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuNjcpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgLmRpYWxvZy1jb250YWluZXJfX2NvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGxlZnQ6IDIwJTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDIwMHB4KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDFweCBncmF5O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAmLml3LWRpYWxvZy1jb250YWluZXItLXZpc2libGUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLmRpYWxvZy1jb250YWluZXJfX2NvbnRlbnQge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgfVxuXG4gIC5kaWFsb2ctY29udGFpbmVyX19mb2N1cy10cmFwIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../src/app/ui/dialog/dialog-container/dialog-container.component.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/dialog/dialog-container/dialog-container.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: DialogContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContainerComponent", function() { return DialogContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var DialogContainerComponent = /** @class */ (function () {
    function DialogContainerComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DialogContainerComponent.prototype.onKeydown = function ($event) {
        if ($event.keyCode === 27 && this.dialogOptions.escToClose) {
            this.onClose.emit();
            $event.preventDefault();
        }
    };
    DialogContainerComponent.prototype.onClick = function ($event) {
        if ($event.target === this.elementRef.nativeElement && this.dialogOptions.clickToClose) {
            this.onClose.emit();
            $event.preventDefault();
            $event.stopPropagation();
        }
    };
    DialogContainerComponent.prototype.ngOnInit = function () {
        var classes = this.dialogOptions.containerClass.split(' ').filter(function (s) { return !!s; });
        for (var _i = 0, classes_1 = classes; _i < classes_1.length; _i++) {
            var c = classes_1[_i];
            this.renderer.addClass(this.elementRef.nativeElement, c);
        }
    };
    DialogContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setAttribute(this.elementRef.nativeElement, 'tabindex', '0');
        this.focus();
        setTimeout(function () {
            _this.renderer.addClass(_this.elementRef.nativeElement, 'iw-dialog-container--visible');
        }, 0);
    };
    DialogContainerComponent.prototype.focus = function () {
        var element = this.elementRef.nativeElement;
        element.focus();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogContainerComponent.prototype, "dialogOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogContainerComponent.prototype, "onClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('body:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DialogContainerComponent.prototype, "onKeydown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DialogContainerComponent.prototype, "onClick", null);
    DialogContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iw-dialog-container',
            template: __webpack_require__(/*! ./dialog-container.component.html */ "../../src/app/ui/dialog/dialog-container/dialog-container.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./dialog-container.component.scss */ "../../src/app/ui/dialog/dialog-container/dialog-container.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], DialogContainerComponent);
    return DialogContainerComponent;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog-focus-trap.directive.ts":
/*!************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/dialog/dialog-focus-trap.directive.ts ***!
  \************************************************************************************************/
/*! exports provided: DialogFocusTrapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFocusTrapDirective", function() { return DialogFocusTrapDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-container/dialog-container.component */ "../../src/app/ui/dialog/dialog-container/dialog-container.component.ts");



var DialogFocusTrapDirective = /** @class */ (function () {
    function DialogFocusTrapDirective(container) {
        this.container = container;
        this.tabindex = 0;
    }
    DialogFocusTrapDirective.prototype.onFocus = function ($event) {
        this.container.focus();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.tabindex'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogFocusTrapDirective.prototype, "tabindex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [FocusEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DialogFocusTrapDirective.prototype, "onFocus", null);
    DialogFocusTrapDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iwDialogFocusTrap]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_2__["DialogContainerComponent"]])
    ], DialogFocusTrapDirective);
    return DialogFocusTrapDirective;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog-ref.class.ts":
/*!*************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/dialog/dialog-ref.class.ts ***!
  \*************************************************************************************/
/*! exports provided: DialogRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogRef", function() { return DialogRef; });
var DialogRef = /** @class */ (function () {
    function DialogRef(container, __viewRef, __appRef, __close, __options) {
        var _this = this;
        this.container = container;
        this.__viewRef = __viewRef;
        this.__appRef = __appRef;
        this.__close = __close;
        this.__options = __options;
        this.container.instance.onClose.subscribe(function () {
            _this.__close();
        });
        this.container.instance.dialogOptions = this.__options;
    }
    DialogRef.prototype.close = function () {
        this.__close();
    };
    DialogRef.prototype.attach = function () {
        document.body.appendChild(this.container.location.nativeElement);
        this.__appRef.attachView(this.container.hostView);
        if (this.__viewRef) {
            this.__appRef.attachView(this.__viewRef);
        }
    };
    DialogRef.prototype.detach = function () {
        if (this.__options.onClose) {
            this.__options.onClose(this);
        }
        document.body.removeChild(this.container.location.nativeElement);
        this.__appRef.detachView(this.container.hostView);
        if (this.__viewRef) {
            this.__appRef.detachView(this.__viewRef);
        }
        this.container.destroy();
        if (this.__viewRef) {
            this.__viewRef.destroy();
        }
    };
    return DialogRef;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog.config.ts":
/*!**********************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/dialog/dialog.config.ts ***!
  \**********************************************************************************/
/*! exports provided: IW_DIALOG_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IW_DIALOG_CONFIG", function() { return IW_DIALOG_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var IW_DIALOG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('iw-dialog.config');


/***/ }),

/***/ "../../src/app/ui/dialog/dialog.directive.ts":
/*!*************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/dialog/dialog.directive.ts ***!
  \*************************************************************************************/
/*! exports provided: DialogDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDirective", function() { return DialogDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.service */ "../../src/app/ui/dialog/dialog.service.ts");



/**
 * The dialog component is meant to focus user's attention on one particular task or content.
 * It is displayed on top of the rest.
 ```ts
 import { DialogModule } from 'iwerk-angular-ui';
 ```
 */
var DialogDirective = /** @class */ (function () {
    function DialogDirective(dialogService, templateRef) {
        this.dialogService = dialogService;
        this.templateRef = templateRef;
    }
    /**
     * @ignore
     */
    DialogDirective.prototype.ngOnDestroy = function () {
        if (this.__dialogInstance) {
            this.__dialogInstance.close();
            this.__dialogInstance = undefined;
        }
    };
    /**
     * Open the dialog.
     */
    DialogDirective.prototype.open = function () {
        var _this = this;
        if (this.__dialogInstance) {
            return;
        }
        this.__dialogInstance = this.dialogService.openTemplateRef(this.templateRef, null, {
            clickToClose: this.clickToClose === undefined ? true : this.clickToClose,
            containerClass: this.containerClass || '',
            escToClose: this.escToClose === undefined ? true : this.escToClose,
            onClose: function (dialog) {
                if (_this.__dialogInstance === dialog) {
                    _this.__dialogInstance = undefined;
                }
            }
        });
    };
    /**
     * Close the dialog.
     */
    DialogDirective.prototype.close = function () {
        if (this.__dialogInstance) {
            this.__dialogInstance.close();
            this.__dialogInstance = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DialogDirective.prototype, "escToClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DialogDirective.prototype, "clickToClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DialogDirective.prototype, "containerClass", void 0);
    DialogDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iwDialog]',
            exportAs: 'iw-dialog'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], DialogDirective);
    return DialogDirective;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog.module.ts":
/*!**********************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/dialog/dialog.module.ts ***!
  \**********************************************************************************/
/*! exports provided: IW_DIALOG_CONFIG, DialogService, DialogDirective, DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-container/dialog-container.component */ "../../src/app/ui/dialog/dialog-container/dialog-container.component.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog.service */ "../../src/app/ui/dialog/dialog.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return _dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]; });

/* harmony import */ var _dialog_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog.directive */ "../../src/app/ui/dialog/dialog.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogDirective", function() { return _dialog_directive__WEBPACK_IMPORTED_MODULE_5__["DialogDirective"]; });

/* harmony import */ var _dialog_focus_trap_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-focus-trap.directive */ "../../src/app/ui/dialog/dialog-focus-trap.directive.ts");
/* harmony import */ var _dialog_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog.config */ "../../src/app/ui/dialog/dialog.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IW_DIALOG_CONFIG", function() { return _dialog_config__WEBPACK_IMPORTED_MODULE_7__["IW_DIALOG_CONFIG"]; });










var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    DialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                _dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_3__["DialogContainerComponent"],
                _dialog_directive__WEBPACK_IMPORTED_MODULE_5__["DialogDirective"],
                _dialog_focus_trap_directive__WEBPACK_IMPORTED_MODULE_6__["DialogFocusTrapDirective"]
            ],
            entryComponents: [_dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_3__["DialogContainerComponent"]],
            exports: [_dialog_directive__WEBPACK_IMPORTED_MODULE_5__["DialogDirective"]],
            providers: [_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]]
        })
    ], DialogModule);
    return DialogModule;
}());



/***/ }),

/***/ "../../src/app/ui/dialog/dialog.service.ts":
/*!***********************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/dialog/dialog.service.ts ***!
  \***********************************************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-container/dialog-container.component */ "../../src/app/ui/dialog/dialog-container/dialog-container.component.ts");
/* harmony import */ var _dialog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog.config */ "../../src/app/ui/dialog/dialog.config.ts");
/* harmony import */ var _dialog_ref_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-ref.class */ "../../src/app/ui/dialog/dialog-ref.class.ts");





var DialogService = /** @class */ (function () {
    function DialogService(appRef, injector, componentFactoryResolver, dialogConfig) {
        this.appRef = appRef;
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
        this.dialogConfig = dialogConfig;
        this.__defaultOptions = {
            containerClass: '',
            clickToClose: true,
            escToClose: true,
            onClose: function () { }
        };
        this.__containerFactory = this.componentFactoryResolver.resolveComponentFactory(_dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_2__["DialogContainerComponent"]);
    }
    /**
     * Open a dialog that embeds an entry component.
     * @param componentType the component class to embed into the dialog
     * @param options the options to use with the dialog
     * @param data the data to pass to the embedded component
     */
    DialogService.prototype.open = function (componentType, options, data) {
        var _this = this;
        var factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        var component = factory.create(this.injector);
        var _data = data || {};
        for (var key in _data) {
            if (_data.hasOwnProperty(key)) {
                component.instance[key] = _data[key];
            }
        }
        var dialogRef = new _dialog_ref_class__WEBPACK_IMPORTED_MODULE_4__["DialogRef"](this.__containerFactory.create(this.injector, [[component.location.nativeElement]]), component.hostView, this.appRef, function () {
            _this.__close(dialogRef);
        }, this.__createOptions(options));
        return this.__open(dialogRef);
    };
    /**
     * Open a dialog that loads a template.
     * @param templateRef the template to load inside the dialog
     * @param context the context to associate with the template
     * @param options the options to use with the dialog
     */
    DialogService.prototype.openTemplateRef = function (templateRef, context, options) {
        var _this = this;
        var view = templateRef.createEmbeddedView(context);
        var dialogRef = new _dialog_ref_class__WEBPACK_IMPORTED_MODULE_4__["DialogRef"](this.__containerFactory.create(this.injector, [view.rootNodes]), view, this.appRef, function () {
            _this.__close(dialogRef);
        }, this.__createOptions(options));
        return this.__open(dialogRef);
    };
    /**
     * Close the currently opened dialog, if any
     */
    DialogService.prototype.close = function () {
        if (this.__previousDialog) {
            this.__close(this.__previousDialog);
        }
    };
    DialogService.prototype.__close = function (dialogRef) {
        if (this.__previousDialog === dialogRef) {
            this.__previousDialog.detach();
            this.__previousDialog = undefined;
        }
    };
    DialogService.prototype.__open = function (dialogRef) {
        this.close();
        this.__previousDialog = dialogRef;
        dialogRef.attach();
        return dialogRef;
    };
    DialogService.prototype.__createOptions = function (_options) {
        var dialogConfig = this.dialogConfig || {};
        var options = _options || {};
        return Object.assign({}, this.__defaultOptions, dialogConfig, options, {
            containerClass: (dialogConfig.containerClass || '') + ' ' + (options.containerClass || '')
        });
    };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_dialog_config__WEBPACK_IMPORTED_MODULE_3__["IW_DIALOG_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], Object])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.directive.ts":
/*!*************************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/multiline-ellipsis/multiline-ellipsis.directive.ts ***!
  \*************************************************************************************************************/
/*! exports provided: MultilineEllipsisDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultilineEllipsisDirective", function() { return MultilineEllipsisDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


/**
 * The multiline ellipsis directive can be used to display multi-line
 * text with an ellipsis character at the end if the text is too long.
 *
 ```ts
 import { MultilineEllipsisModule } from 'iwerk-angular-ui';
 ```
 */
var MultilineEllipsisDirective = /** @class */ (function () {
    function MultilineEllipsisDirective(elementRef) {
        this.elementRef = elementRef;
        /**
         * An event that is emitted that indicates whether the text is truncated.
         */
        this.truncated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(MultilineEllipsisDirective.prototype, "isOverflowing", {
        /**
         * A boolean that indicates if the text overflows.
         */
        get: function () {
            return this.__isOverflowing;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @ignore
     */
    MultilineEllipsisDirective.prototype.ngOnInit = function () {
        var self = this.elementRef.nativeElement;
        self.classList.add('multiline-ellipsis');
    };
    /**
     * @ignore
     */
    MultilineEllipsisDirective.prototype.ngAfterViewChecked = function () {
        var self = this.elementRef.nativeElement;
        if (this.iwMultilineEllipsis !== this.oldText || this.oldHeight !== self.offsetHeight || this.oldWidth !== self.offsetWidth) {
            this.oldText = this.iwMultilineEllipsis;
            this.oldHeight = self.offsetHeight;
            this.oldWidth = self.offsetWidth;
            this.needsAdjust = true;
        }
        this.adjustInner();
    };
    /**
     * @ignore
     */
    MultilineEllipsisDirective.prototype.onResize = function () {
        this.needsAdjust = true;
        this.adjustInner();
    };
    /**
     * @ignore
     */
    MultilineEllipsisDirective.prototype.adjustInner = function () {
        if (!this.needsAdjust) {
            return;
        }
        this.needsAdjust = false;
        var self = this.elementRef.nativeElement;
        self.innerHTML = this.iwMultilineEllipsis || '';
        var height = self.clientHeight;
        var contentHeight = self.scrollHeight;
        var overflow = height < contentHeight;
        var ellipsis = document.createElement('span');
        ellipsis.classList.add('ellipsis');
        ellipsis.innerText = '…';
        if (!overflow) {
            this.truncated.emit(false);
            this.__isOverflowing = false;
            return;
        }
        this.truncated.emit(true);
        this.__isOverflowing = true;
        self.appendChild(ellipsis);
        if (self.childNodes.length > 1) {
            var child = self.childNodes.item(self.childNodes.length - 2);
            if (this.removeLastByteAux(child)) {
                self.removeChild(child);
            }
        }
        while (overflow) {
            if (this.removeLastByte(self)) {
                break;
            }
            overflow = self.offsetHeight < self.scrollHeight;
        }
    };
    /**
     * @ignore
     */
    MultilineEllipsisDirective.prototype.removeLastByte = function (element) {
        if (element.childNodes.length > 1) {
            var child = element.childNodes.item(element.childNodes.length - 2);
            if (this.removeLastByteAux(child)) {
                element.removeChild(child);
            }
        }
        return element.childNodes.length === 1;
    };
    /**
     * @ignore
     */
    MultilineEllipsisDirective.prototype.removeLastByteAux = function (element) {
        // true to remove
        if (element.nodeType === Node.TEXT_NODE) {
            var split = element.textContent.split(' ');
            split.pop();
            element.textContent = split.join(' ');
            return element.textContent === '';
        }
        if (element.nodeType === Node.ELEMENT_NODE) {
            if (element.hasChildNodes()) {
                var last = element.childNodes.item(element.childNodes.length - 1);
                var result = this.removeLastByteAux(last);
                if (result) {
                    element.removeChild(last);
                    return this.removeLastByteAux(element);
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
        throw new Error('This node type is not handled');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MultilineEllipsisDirective.prototype, "iwMultilineEllipsis", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MultilineEllipsisDirective.prototype, "truncated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MultilineEllipsisDirective.prototype, "onResize", null);
    MultilineEllipsisDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iwMultilineEllipsis]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MultilineEllipsisDirective);
    return MultilineEllipsisDirective;
}());



/***/ }),

/***/ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.module.ts":
/*!**********************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/multiline-ellipsis/multiline-ellipsis.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: MultilineEllipsisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultilineEllipsisModule", function() { return MultilineEllipsisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _multiline_ellipsis_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multiline-ellipsis.directive */ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.directive.ts");




var MultilineEllipsisModule = /** @class */ (function () {
    function MultilineEllipsisModule() {
    }
    MultilineEllipsisModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_multiline_ellipsis_directive__WEBPACK_IMPORTED_MODULE_3__["MultilineEllipsisDirective"]],
            exports: [_multiline_ellipsis_directive__WEBPACK_IMPORTED_MODULE_3__["MultilineEllipsisDirective"]]
        })
    ], MultilineEllipsisModule);
    return MultilineEllipsisModule;
}());



/***/ }),

/***/ "../../src/app/ui/navigation/navigation-controller.service.ts":
/*!******************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/navigation/navigation-controller.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: NavigationData, NavigationController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationData", function() { return NavigationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationController", function() { return NavigationController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var NavigationData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('iw-navigation.NAVIGATION_DATA');
var NavigationController = /** @class */ (function () {
    function NavigationController(injector) {
        this.injector = injector;
        this.stack = [];
    }
    NavigationController.prototype.present = function (type, data) {
        var _this = this;
        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ReflectiveInjector"].resolveAndCreate([{
                provide: NavigationData,
                useValue: data
            }], this.injector);
        return new Promise(function (resolve) {
            _this.stack.push({ type: type, resolve: resolve, injector: injector });
        });
    };
    NavigationController.prototype.dismiss = function (value) {
        var last = this.stack.pop();
        last.resolve(value);
    };
    NavigationController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], NavigationController);
    return NavigationController;
}());



/***/ }),

/***/ "../../src/app/ui/navigation/navigation.module.ts":
/*!******************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/navigation/navigation.module.ts ***!
  \******************************************************************************************/
/*! exports provided: NavigationComponent, NavigationData, NavigationController, NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.component */ "../../src/app/ui/navigation/navigation/navigation.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]; });

/* harmony import */ var _navigation_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation-controller.service */ "../../src/app/ui/navigation/navigation-controller.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationData", function() { return _navigation_controller_service__WEBPACK_IMPORTED_MODULE_4__["NavigationData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationController", function() { return _navigation_controller_service__WEBPACK_IMPORTED_MODULE_4__["NavigationController"]; });







var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]
            ]
        })
    ], NavigationModule);
    return NavigationModule;
}());



/***/ }),

/***/ "../../src/app/ui/navigation/navigation/navigation.component.html":
/*!**********************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/navigation/navigation/navigation.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"iw-navigation-container\" [class.iw-navigation-container--visible]=\"isStackEmpty\">\n  <ng-content></ng-content>\n</div>\n\n<ng-template ngFor [ngForOf]=\"stack\" let-item let-isLast=\"last\">\n  <div class=\"iw-navigation-container\" [class.iw-navigation-container--visible]=\"isLast\">\n    <ng-container *ngComponentOutlet=\"item.type; injector: item.injector\"></ng-container>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../src/app/ui/navigation/navigation/navigation.component.sass":
/*!**********************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/navigation/navigation/navigation.component.sass ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iw-navigation-container:not(.iw-navigation-container--visible) {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9zcmMvYXBwL3VpL25hdmlnYXRpb24vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYSxFQUFHIiwiZmlsZSI6InNyYy9hcHAvdWkvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXctbmF2aWdhdGlvbi1jb250YWluZXI6bm90KC5pdy1uYXZpZ2F0aW9uLWNvbnRhaW5lci0tdmlzaWJsZSkge1xuICBkaXNwbGF5OiBub25lOyB9XG4iXX0= */"

/***/ }),

/***/ "../../src/app/ui/navigation/navigation/navigation.component.ts":
/*!********************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/navigation/navigation/navigation.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navigation_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation-controller.service */ "../../src/app/ui/navigation/navigation-controller.service.ts");



/**
 * The navigation component is designed to stack views and only show the last element.
 * It is used along with the NavigationController
 ```ts
 import { NavigationModule } from 'iwerk-angular-ui';
 ```
 */
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(navigationController) {
        this.navigationController = navigationController;
    }
    Object.defineProperty(NavigationComponent.prototype, "stack", {
        /**
         * @ignore
         */
        get: function () {
            return this.navigationController.stack;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "isStackEmpty", {
        /**
         * @ignore
         */
        get: function () {
            return this.stack.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Present the component.
     * @param type the component class to display in the stack.
     * @returns a promise that resolves with a value that the dismissed view gives you.
     */
    NavigationComponent.prototype.present = function (type, data) {
        return this.navigationController.present(type, data);
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iw-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "../../src/app/ui/navigation/navigation/navigation.component.html"),
            providers: [
                _navigation_controller_service__WEBPACK_IMPORTED_MODULE_2__["NavigationController"]
            ],
            styles: [__webpack_require__(/*! ./navigation.component.sass */ "../../src/app/ui/navigation/navigation/navigation.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_navigation_controller_service__WEBPACK_IMPORTED_MODULE_2__["NavigationController"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../src/app/ui/popover/helpers.ts":
/*!*****************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/popover/helpers.ts ***!
  \*****************************************************************************/
/*! exports provided: smartPosition, addClasses, combineOptionsAndDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smartPosition", function() { return smartPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClasses", function() { return addClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineOptionsAndDefaults", function() { return combineOptionsAndDefaults; });
function smartPosition(elements, options) {
    if (options.horizontal) {
        horizontalSmartPosition(elements, options);
    }
    else {
        verticalSmartPosition(elements, options);
    }
    elements.container.style.visibility = 'visible';
    elements.arrowElement.style.visibility = 'visible';
}
function verticalSmartPosition(elements, options) {
    var target = elements.target;
    var container = elements.container;
    var arrowElement = elements.arrowElement;
    var _a = target.getBoundingClientRect(), top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    var centerYBody = document.body.getBoundingClientRect().height / 2;
    if (top > centerYBody) {
        container.style.top = (top - container.offsetHeight) + 'px';
        arrowElement.style.top = top + 'px';
        arrowElement.classList.add('from-the-top');
        options.popoverPosition({ vertical: 'top' });
    }
    else {
        container.style.top = bottom + 'px';
        arrowElement.style.top = container.style.top;
        arrowElement.classList.add('from-the-bottom');
        options.popoverPosition({ vertical: 'bottom' });
    }
    var centerX = 0.5 * (left + right);
    arrowElement.style.left = centerX + "px";
    if (options.horizontalAlignment === 'leftWithLeft') {
        var maxLeft = document.body.getBoundingClientRect().width - container.offsetWidth;
        container.style.left = Math.max(0, Math.min(maxLeft, left)) + 'px';
    }
    else {
        var maxLeft = document.body.getBoundingClientRect().width - container.offsetWidth;
        container.style.left = Math.max(0, Math.min(maxLeft, centerX - 0.5 * container.offsetWidth)) + 'px';
    }
}
function horizontalSmartPosition(elements, options) {
    var target = elements.target;
    var container = elements.container;
    var arrowElement = elements.arrowElement;
    var _a = target.getBoundingClientRect(), top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    var centerXBody = document.body.getBoundingClientRect().width / 2;
    if (left > centerXBody) {
        container.style.left = (left - container.offsetWidth) + 'px';
        arrowElement.style.left = left + 'px';
        arrowElement.classList.add('from-the-left');
        options.popoverPosition({ horizontal: 'left' });
    }
    else {
        container.style.left = right + 'px';
        arrowElement.style.left = container.style.left;
        arrowElement.classList.add('from-the-right');
        options.popoverPosition({ horizontal: 'right' });
    }
    var centerY = 0.5 * (top + bottom);
    arrowElement.style.top = centerY + "px";
    var maxTop = document.body.getBoundingClientRect().height - container.offsetHeight;
    container.style.top = Math.max(0, Math.min(maxTop, centerY - 0.5 * container.offsetHeight)) + 'px';
}
function addClasses(element, str) {
    (str || '').split(' ').filter(function (s) { return !!s; }).forEach(function (c) { return element.classList.add(c); });
}
function combineOptionsAndDefaults(providedConfig, options) {
    var config = providedConfig || {};
    var defaultOptions = {
        escToClose: config.escToClose === undefined ? true : config.escToClose,
        clickOutsideToClose: config.clickOutsideToClose === undefined ? true : config.clickOutsideToClose,
        arrowClass: config.arrowClass === undefined ? '' : config.arrowClass,
        popoverClass: config.popoverClass === undefined ? '' : config.popoverClass,
        scrollMaskClass: config.scrollMaskClass === undefined ? '' : config.scrollMaskClass,
        horizontalAlignment: config.horizontalAlignment,
        horizontal: config.horizontal === undefined ? false : config.horizontal
    };
    var result = {
        escToClose: options.escToClose === undefined ? defaultOptions.escToClose : options.escToClose,
        clickOutsideToClose: options.clickOutsideToClose === undefined ? defaultOptions.clickOutsideToClose : options.clickOutsideToClose,
        arrowClass: (options.arrowClass || '') + ' ' + defaultOptions.arrowClass,
        popoverClass: (options.popoverClass || '') + ' ' + defaultOptions.popoverClass,
        scrollMaskClass: (options.scrollMaskClass || '') + ' ' + defaultOptions.scrollMaskClass,
        horizontalAlignment: options.horizontalAlignment || defaultOptions.horizontalAlignment,
        shouldClose: options.shouldClose || (function () { }),
        popoverPosition: options.popoverPosition || (function () { }),
        horizontal: options.hasOwnProperty('horizontal') ? options.horizontal : defaultOptions.horizontal
    };
    return result;
}


/***/ }),

/***/ "../../src/app/ui/popover/popover-container/popover-container.component.html":
/*!*********************************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/popover/popover-container/popover-container.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n"

/***/ }),

/***/ "../../src/app/ui/popover/popover-container/popover-container.component.scss":
/*!*********************************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/popover/popover-container/popover-container.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iw-popover-container {\n  position: absolute;\n  z-index: 4;\n  display: block;\n  background: white;\n  border: 1px solid black;\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9zcmMvYXBwL3VpL3BvcG92ZXIvcG9wb3Zlci1jb250YWluZXIvcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsd0JBQXVCO0VBQ3ZCLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL3VpL3BvcG92ZXIvcG9wb3Zlci1jb250YWluZXIvcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpdy1wb3BvdmVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "../../src/app/ui/popover/popover-container/popover-container.component.ts":
/*!*******************************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/popover/popover-container/popover-container.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PopoverContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return PopoverContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PopoverContainerComponent = /** @class */ (function () {
    function PopoverContainerComponent() {
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
    }
    PopoverContainerComponent.prototype.onKeyDown = function ($event) {
        if (this.escToClose && $event.keyCode === 27) {
            $event.preventDefault();
            this.onClose.emit();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('body:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PopoverContainerComponent.prototype, "onKeyDown", null);
    PopoverContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iw-popover-container',
            template: __webpack_require__(/*! ./popover-container.component.html */ "../../src/app/ui/popover/popover-container/popover-container.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./popover-container.component.scss */ "../../src/app/ui/popover/popover-container/popover-container.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PopoverContainerComponent);
    return PopoverContainerComponent;
}());



/***/ }),

/***/ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.html":
/*!*************************************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.scss":
/*!*************************************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iw-popover-scroll-mask {\n  z-index: 3;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.01); }\n  iw-popover-scroll-mask .iw-popover-arrow-element {\n    z-index: 5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9zcmMvYXBwL3VpL3BvcG92ZXIvcG9wb3Zlci1zY3JvbGwtbWFzay9wb3BvdmVyLXNjcm9sbC1tYXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sUUFBTztFQUNQLFlBQVc7RUFDWCxhQUFZO0VBQ1osc0NBQXFDLEVBS3RDO0VBWkQ7SUFVSSxXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC91aS9wb3BvdmVyL3BvcG92ZXItc2Nyb2xsLW1hc2svcG9wb3Zlci1zY3JvbGwtbWFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIml3LXBvcG92ZXItc2Nyb2xsLW1hc2sge1xuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKTtcbiAgXG4gIC5pdy1wb3BvdmVyLWFycm93LWVsZW1lbnQge1xuICAgIHotaW5kZXg6IDU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.ts":
/*!***********************************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PopoverScrollMaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverScrollMaskComponent", function() { return PopoverScrollMaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PopoverScrollMaskComponent = /** @class */ (function () {
    function PopoverScrollMaskComponent(elementRef) {
        this.elementRef = elementRef;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
    }
    PopoverScrollMaskComponent.prototype.onClick = function ($event) {
        if (this.clickOutsideToClose && $event.target === this.elementRef.nativeElement) {
            $event.preventDefault();
            $event.stopPropagation();
            this.onClose.emit();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PopoverScrollMaskComponent.prototype, "onClick", null);
    PopoverScrollMaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iw-popover-scroll-mask',
            template: __webpack_require__(/*! ./popover-scroll-mask.component.html */ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./popover-scroll-mask.component.scss */ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], PopoverScrollMaskComponent);
    return PopoverScrollMaskComponent;
}());



/***/ }),

/***/ "../../src/app/ui/popover/popover.config.ts":
/*!************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/popover/popover.config.ts ***!
  \************************************************************************************/
/*! exports provided: IW_POPOVER_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IW_POPOVER_CONFIG", function() { return IW_POPOVER_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var IW_POPOVER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('iw-popover.config');


/***/ }),

/***/ "../../src/app/ui/popover/popover.directive.ts":
/*!***************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/popover/popover.directive.ts ***!
  \***************************************************************************************/
/*! exports provided: PopoverDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return PopoverDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover.service */ "../../src/app/ui/popover/popover.service.ts");



/**
 * The popover component can be used to display extra piece of information or more user interface elements.
 * The popover consists in a `iw-popover-container` that is added directly to the body.
 * It automatically adds a scroll mask element and an arrow element.
 *
 * ## Positionning
 *
 * By default and if possible, the popover is horizontally centered with its target's center.
 * If the popover goes out of bounds, its horizontal position is adjusted to stay in bounds.
 * It is possible to set this horizontal alignment behaviour by setting the `horizontalAlignment` input to `'leftWithLeft'`.
 *
 * By default, the popover puts itself on top of the target if the target is on the bottom-half of the screen,
 * on the bottom if the target is on the top-half of the screen.
 *
 * ## Scroll mask and arrow elements
 * The popover component automatically appends a scroll mask and an arrow elements to the body.
 * You can adjust their style to your convenience.
 * - The arrow is automatically positionned to point at the target element. This element has the class `.iw-popover-arrow-element`.
 * - The scroll mask `<iw-popover-scroll-mask>` is meant to prevent the user from scrolling
 * and to intercept clicks oustide of the popover and to dismiss the popover.
 *
 ```ts
 import { PopoverModule } from 'iwerk-angular-ui';
 ```
 */
var PopoverDirective = /** @class */ (function () {
    function PopoverDirective(popoverService, templateRef, viewContainerRef, zone, changeDetectorRef) {
        this.popoverService = popoverService;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.zone = zone;
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Event triggered that gives you the opportunity to close the popover (e.g. `isOpen = false`)
         */
        this.shouldClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event triggered when the popover position changes.
         */
        this.popoverPosition = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @ignore
     */
    PopoverDirective.prototype.ngOnDestroy = function () {
        this.__close();
    };
    /**
     * @ignore
     */
    PopoverDirective.prototype.ngOnChanges = function (changes) {
        if (changes['isOpen']) {
            this.__update();
        }
    };
    /**
     * @ignore
     */
    PopoverDirective.prototype.__update = function () {
        if (this.__popoverInstance && !this.isOpen) {
            this.__close();
        }
        else if (this.isOpen && !this.__popoverInstance) {
            this.__open();
        }
    };
    /**
     * @ignore
     */
    PopoverDirective.prototype.__open = function () {
        var _this = this;
        // get out of the zone to avoid triggering another zone run
        this.zone.runOutsideAngular(function () {
            // wait till the current stack is finished to avoid ExpressionChangedAfterItHasBeenCheckedError
            setTimeout(function () {
                // go back to the zone
                _this.zone.run(function () {
                    // create the popover
                    _this.__popoverInstance = _this.popoverService.openTemplateRef(_this.templateRef, _this.viewContainerRef.element.nativeElement.parentElement, {
                        horizontal: _this.__getHorizontal(),
                        arrowClass: _this.arrowClass,
                        horizontalAlignment: _this.horizontalAlignment,
                        popoverClass: _this.popoverClass,
                        scrollMaskClass: _this.scrollMaskClass,
                        shouldClose: function () {
                            _this.shouldClose.emit();
                        },
                        popoverPosition: function (p) {
                            _this.popoverPosition.emit(p);
                        },
                        escToClose: _this.escToClose,
                        clickOutsideToClose: _this.clickOutsideToClose
                    });
                    // run the change detection
                    _this.changeDetectorRef.detectChanges();
                    _this.changeDetectorRef.markForCheck();
                });
            }, 0);
        });
    };
    /**
     * @ignore
     */
    PopoverDirective.prototype.__close = function () {
        if (this.__popoverInstance) {
            this.__popoverInstance.close();
            this.__popoverInstance = undefined;
        }
    };
    /**
     * @ignore
     */
    PopoverDirective.prototype.__getHorizontal = function () {
        if (this.horizontal === undefined) {
            return false;
        }
        return this.horizontal;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverDirective.prototype, "popoverClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverDirective.prototype, "arrowClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverDirective.prototype, "horizontalAlignment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverDirective.prototype, "scrollMaskClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PopoverDirective.prototype, "escToClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PopoverDirective.prototype, "clickOutsideToClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PopoverDirective.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PopoverDirective.prototype, "horizontal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverDirective.prototype, "shouldClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverDirective.prototype, "popoverPosition", void 0);
    PopoverDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iwPopover]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_popover_service__WEBPACK_IMPORTED_MODULE_2__["PopoverService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PopoverDirective);
    return PopoverDirective;
}());



/***/ }),

/***/ "../../src/app/ui/popover/popover.module.ts":
/*!************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/popover/popover.module.ts ***!
  \************************************************************************************/
/*! exports provided: PopoverService, Popover, IW_POPOVER_CONFIG, PopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _popover_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover.directive */ "../../src/app/ui/popover/popover.directive.ts");
/* harmony import */ var _popover_container_popover_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover-container/popover-container.component */ "../../src/app/ui/popover/popover-container/popover-container.component.ts");
/* harmony import */ var _popover_scroll_mask_popover_scroll_mask_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover-scroll-mask/popover-scroll-mask.component */ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.ts");
/* harmony import */ var _popover_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover.service */ "../../src/app/ui/popover/popover.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverService", function() { return _popover_service__WEBPACK_IMPORTED_MODULE_6__["PopoverService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _popover_service__WEBPACK_IMPORTED_MODULE_6__["Popover"]; });

/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popover.config */ "../../src/app/ui/popover/popover.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IW_POPOVER_CONFIG", function() { return _popover_config__WEBPACK_IMPORTED_MODULE_7__["IW_POPOVER_CONFIG"]; });










var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    PopoverModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [_popover_container_popover_container_component__WEBPACK_IMPORTED_MODULE_4__["PopoverContainerComponent"], _popover_scroll_mask_popover_scroll_mask_component__WEBPACK_IMPORTED_MODULE_5__["PopoverScrollMaskComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                _popover_directive__WEBPACK_IMPORTED_MODULE_3__["PopoverDirective"],
                _popover_container_popover_container_component__WEBPACK_IMPORTED_MODULE_4__["PopoverContainerComponent"],
                _popover_scroll_mask_popover_scroll_mask_component__WEBPACK_IMPORTED_MODULE_5__["PopoverScrollMaskComponent"]
            ],
            exports: [_popover_directive__WEBPACK_IMPORTED_MODULE_3__["PopoverDirective"]],
            providers: [_popover_service__WEBPACK_IMPORTED_MODULE_6__["PopoverService"]]
        })
    ], PopoverModule);
    return PopoverModule;
}());



/***/ }),

/***/ "../../src/app/ui/popover/popover.service.ts":
/*!*************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/popover/popover.service.ts ***!
  \*************************************************************************************/
/*! exports provided: Popover, PopoverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverService", function() { return PopoverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover_container_popover_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-container/popover-container.component */ "../../src/app/ui/popover/popover-container/popover-container.component.ts");
/* harmony import */ var _popover_scroll_mask_popover_scroll_mask_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover-scroll-mask/popover-scroll-mask.component */ "../../src/app/ui/popover/popover-scroll-mask/popover-scroll-mask.component.ts");
/* harmony import */ var _popover_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover.config */ "../../src/app/ui/popover/popover.config.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "../../src/app/ui/popover/helpers.ts");






var PopoverImpl = /** @class */ (function () {
    function PopoverImpl(embeddedViewRef, appRef, componentRef, container, scrollMask) {
        this.embeddedViewRef = embeddedViewRef;
        this.appRef = appRef;
        this.componentRef = componentRef;
        this.container = container;
        this.scrollMask = scrollMask;
        this.isClosed = false;
    }
    PopoverImpl.prototype.close = function () {
        if (this.isClosed) {
            return;
        }
        this.isClosed = true;
        if (this.embeddedViewRef) {
            this.embeddedViewRef.destroy();
            this.appRef.detachView(this.embeddedViewRef);
        }
        if (this.componentRef) {
            this.componentRef.destroy();
            this.appRef.detachView(this.componentRef.hostView);
        }
        this.appRef.detachView(this.container.hostView);
        this.appRef.detachView(this.scrollMask.hostView);
        this.container.destroy();
        this.scrollMask.destroy();
    };
    return PopoverImpl;
}());
var Popover = /** @class */ (function () {
    function Popover() {
    }
    Popover.prototype.close = function () {
        this.__instance.close();
    };
    Popover.prototype.setInstance = function (instance) {
        this.__instance = instance;
    };
    Popover = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Popover);
    return Popover;
}());

var PopoverService = /** @class */ (function () {
    function PopoverService(injector, componentFactoryResolver, appRef, popoverConfig) {
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.popoverConfig = popoverConfig;
    }
    PopoverService.prototype.openTemplateRef = function (templateRef, target, options) {
        return this.__open(null, templateRef.createEmbeddedView(null), target, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["combineOptionsAndDefaults"])(this.popoverConfig, options));
    };
    PopoverService.prototype.open = function (componentType, target, options, init) {
        var reflInj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"].create([{ provide: Popover, deps: [] }], this.injector);
        var factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        var component = factory.create(reflInj);
        if (init) {
            init(component.instance);
        }
        var popover = reflInj.get(Popover);
        var popoverOptions = Object.assign({}, options || {});
        popoverOptions.shouldClose = function () {
            if (options && options.shouldClose) {
                options.shouldClose();
            }
            popover.close();
        };
        var instance = this.__open(component, null, target, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["combineOptionsAndDefaults"])(this.popoverConfig, popoverOptions));
        popover.setInstance(instance);
        return instance;
    };
    PopoverService.prototype.__open = function (componentRef, embeddedViewRef, target, options) {
        var arrowElement = document.createElement('div');
        arrowElement.classList.add('iw-popover-arrow-element');
        // create the popover container
        var container = this.componentFactoryResolver.resolveComponentFactory(_popover_container_popover_container_component__WEBPACK_IMPORTED_MODULE_2__["PopoverContainerComponent"])
            .create(this.injector, componentRef ? [[componentRef.location.nativeElement]] : [embeddedViewRef.rootNodes]);
        // create the mask component
        var scrollMask = this.componentFactoryResolver.resolveComponentFactory(_popover_scroll_mask_popover_scroll_mask_component__WEBPACK_IMPORTED_MODULE_3__["PopoverScrollMaskComponent"])
            .create(this.injector, [[container.location.nativeElement, arrowElement]]);
        // we bind to the output (which is an observable)
        scrollMask.instance.clickOutsideToClose = options.clickOutsideToClose;
        scrollMask.instance.onClose.subscribe(function () {
            options.shouldClose();
        });
        container.instance.escToClose = options.escToClose;
        container.instance.onClose.subscribe(function () {
            options.shouldClose();
        });
        if (componentRef) {
            this.appRef.attachView(componentRef.hostView);
        }
        if (embeddedViewRef) {
            this.appRef.attachView(embeddedViewRef);
        }
        this.appRef.attachView(container.hostView);
        this.appRef.attachView(scrollMask.hostView);
        this.__showPopover({
            arrowElement: arrowElement,
            container: container.location.nativeElement,
            scrollMask: scrollMask.location.nativeElement,
            target: target
        }, options);
        return new PopoverImpl(embeddedViewRef, this.appRef, componentRef, container, scrollMask);
    };
    PopoverService.prototype.__showPopover = function (elements, options) {
        var container = elements.container;
        var scrollMask = elements.scrollMask;
        var arrowElement = elements.arrowElement;
        setTimeout(function () {
            container.style.visibility = 'hidden';
            arrowElement.style.visibility = 'hidden';
            Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["addClasses"])(container, options.popoverClass);
            Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["addClasses"])(scrollMask, options.scrollMaskClass);
            Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["addClasses"])(arrowElement, options.arrowClass);
            document.body.appendChild(scrollMask);
            Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["smartPosition"])(elements, options);
            container.classList.add('iw-popover-container--visible');
            arrowElement.classList.add('iw-popover-arrow-element--visible');
        }, 0);
    };
    PopoverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_popover_config__WEBPACK_IMPORTED_MODULE_4__["IW_POPOVER_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], Object])
    ], PopoverService);
    return PopoverService;
}());



/***/ }),

/***/ "../../src/app/ui/state-button/state-button.directive.ts":
/*!*************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/state-button/state-button.directive.ts ***!
  \*************************************************************************************************/
/*! exports provided: StateButtonDirective, SbIdleDirective, SbSuccessDirective, SbDoingDirective, SbFailureDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateButtonDirective", function() { return StateButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbIdleDirective", function() { return SbIdleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbSuccessDirective", function() { return SbSuccessDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbDoingDirective", function() { return SbDoingDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbFailureDirective", function() { return SbFailureDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _state_template_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-template.class */ "../../src/app/ui/state-button/state-template.class.ts");




var StateButtonDirective = /** @class */ (function () {
    function StateButtonDirective() {
        this.__state = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.withClass = true;
    }
    Object.defineProperty(StateButtonDirective.prototype, "state", {
        get: function () {
            return this.__state.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateButtonDirective.prototype, "iwStateButton", {
        set: function (v) {
            this.__state.next(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateButtonDirective.prototype, "isIdle", {
        get: function () {
            return this.__state.value === 'IDLE';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateButtonDirective.prototype, "isDoing", {
        get: function () {
            return this.__state.value === 'DOING';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateButtonDirective.prototype, "isSuccess", {
        get: function () {
            return this.__state.value === 'SUCCESS';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateButtonDirective.prototype, "isFailure", {
        get: function () {
            return this.__state.value === 'FAILURE';
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], StateButtonDirective.prototype, "iwStateButton", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.iw-state-button'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StateButtonDirective.prototype, "withClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sb--idle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StateButtonDirective.prototype, "isIdle", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sb--doing'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StateButtonDirective.prototype, "isDoing", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sb--success'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StateButtonDirective.prototype, "isSuccess", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sb--failure'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StateButtonDirective.prototype, "isFailure", null);
    StateButtonDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iwStateButton]'
        })
    ], StateButtonDirective);
    return StateButtonDirective;
}());

var SbIdleDirective = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SbIdleDirective, _super);
    function SbIdleDirective(viewContainerRef, templateRef, stateButtonDirective) {
        var _this = _super.call(this, 'IDLE', viewContainerRef, templateRef, stateButtonDirective) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.templateRef = templateRef;
        _this.stateButtonDirective = stateButtonDirective;
        return _this;
    }
    SbIdleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[sbIdle]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            StateButtonDirective])
    ], SbIdleDirective);
    return SbIdleDirective;
}(_state_template_class__WEBPACK_IMPORTED_MODULE_3__["StateTemplate"]));

var SbSuccessDirective = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SbSuccessDirective, _super);
    function SbSuccessDirective(viewContainerRef, templateRef, stateButtonDirective) {
        var _this = _super.call(this, 'SUCCESS', viewContainerRef, templateRef, stateButtonDirective) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.templateRef = templateRef;
        _this.stateButtonDirective = stateButtonDirective;
        return _this;
    }
    SbSuccessDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[sbSuccess]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            StateButtonDirective])
    ], SbSuccessDirective);
    return SbSuccessDirective;
}(_state_template_class__WEBPACK_IMPORTED_MODULE_3__["StateTemplate"]));

var SbDoingDirective = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SbDoingDirective, _super);
    function SbDoingDirective(viewContainerRef, templateRef, stateButtonDirective) {
        var _this = _super.call(this, 'DOING', viewContainerRef, templateRef, stateButtonDirective) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.templateRef = templateRef;
        _this.stateButtonDirective = stateButtonDirective;
        return _this;
    }
    SbDoingDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[sbDoing]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            StateButtonDirective])
    ], SbDoingDirective);
    return SbDoingDirective;
}(_state_template_class__WEBPACK_IMPORTED_MODULE_3__["StateTemplate"]));

var SbFailureDirective = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SbFailureDirective, _super);
    function SbFailureDirective(viewContainerRef, templateRef, stateButtonDirective) {
        var _this = _super.call(this, 'FAILURE', viewContainerRef, templateRef, stateButtonDirective) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.templateRef = templateRef;
        _this.stateButtonDirective = stateButtonDirective;
        return _this;
    }
    SbFailureDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[sbFailure]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            StateButtonDirective])
    ], SbFailureDirective);
    return SbFailureDirective;
}(_state_template_class__WEBPACK_IMPORTED_MODULE_3__["StateTemplate"]));



/***/ }),

/***/ "../../src/app/ui/state-button/state-button.module.ts":
/*!**********************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/state-button/state-button.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: StateButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateButtonModule", function() { return StateButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _state_button_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-button.directive */ "../../src/app/ui/state-button/state-button.directive.ts");




var StateButtonModule = /** @class */ (function () {
    function StateButtonModule() {
    }
    StateButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["StateButtonDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["SbIdleDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["SbDoingDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["SbFailureDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["SbSuccessDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["StateButtonDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["SbIdleDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["SbDoingDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["SbFailureDirective"],
                _state_button_directive__WEBPACK_IMPORTED_MODULE_3__["SbSuccessDirective"]
            ],
        })
    ], StateButtonModule);
    return StateButtonModule;
}());



/***/ }),

/***/ "../../src/app/ui/state-button/state-template.class.ts":
/*!***********************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/state-button/state-template.class.ts ***!
  \***********************************************************************************************/
/*! exports provided: StateTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateTemplate", function() { return StateTemplate; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");

var StateTemplate = /** @class */ (function () {
    function StateTemplate(triggeringState, viewContainerRef, templateRef, stateButtonDirective) {
        this.triggeringState = triggeringState;
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.stateButtonDirective = stateButtonDirective;
    }
    StateTemplate.prototype.ngOnInit = function () {
        var _this = this;
        var distinct = this.stateButtonDirective.state
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (s) { return s === _this.triggeringState; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
        this.__subscription = distinct.subscribe(function (b) {
            if (b) {
                _this.__previousEmbedded = _this.viewContainerRef.createEmbeddedView(_this.templateRef);
            }
            else {
                _this.__remove();
            }
        });
    };
    StateTemplate.prototype.ngOnDestroy = function () {
        this.__subscription.unsubscribe();
        this.__remove();
    };
    StateTemplate.prototype.__remove = function () {
        if (this.__previousEmbedded) {
            this.__previousEmbedded.destroy();
            this.viewContainerRef.remove(0);
        }
    };
    return StateTemplate;
}());



/***/ }),

/***/ "../../src/app/ui/tooltip/helpers.ts":
/*!*****************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/tooltip/helpers.ts ***!
  \*****************************************************************************/
/*! exports provided: smartPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smartPosition", function() { return smartPosition; });
function smartPosition(options, type) {
    if (type === void 0) { type = 'vertical'; }
    switch (type) {
        case 'horizontal':
            horizontalSmartPosition(options);
            break;
        case 'vertical':
        default:
            verticalSmartPosition(options);
            break;
    }
}
function verticalSmartPosition(options) {
    var targetRect = options.target.getBoundingClientRect();
    var bodyRect = document.body.getBoundingClientRect();
    options.container.style.visibility = 'hidden';
    // do that after, otherwise it can change the bounding client rect of the target
    document.body.appendChild(options.container);
    var y = targetRect.top;
    var centerYBody = bodyRect.height / 2;
    if (y > centerYBody) {
        options.container.style.top = (targetRect.top - options.container.offsetHeight - 1) + 'px';
        options.container.classList.add('iw-tooltip-container--top');
    }
    else {
        options.container.style.top = (1 + targetRect.bottom) + 'px';
        options.container.classList.add('iw-tooltip-container--bottom');
    }
    var containerWidth = options.container.offsetWidth;
    var idealLeft = targetRect.left + targetRect.width / 2 - containerWidth / 2;
    var maxLeft = bodyRect.width - containerWidth;
    options.container.style.left = Math.min(maxLeft, idealLeft) + 'px';
    options.container.style.visibility = 'visible';
}
function horizontalSmartPosition(options) {
    var targetRect = options.target.getBoundingClientRect();
    var bodyRect = document.body.getBoundingClientRect();
    options.container.style.visibility = 'hidden';
    // do that after, otherwise it can change the bounding client rect of the target
    document.body.appendChild(options.container);
    var x = targetRect.left;
    var centerXBody = bodyRect.width / 2;
    if (x > centerXBody) {
        options.container.style.left = (targetRect.left - options.container.offsetWidth - 1) + 'px';
        options.container.classList.add('iw-tooltip-container--left');
    }
    else {
        options.container.style.left = (1 + targetRect.right) + 'px';
        options.container.classList.add('iw-tooltip-container--right');
    }
    var containerHeight = options.container.offsetHeight;
    var idealTop = targetRect.top + targetRect.height / 2 - containerHeight / 2;
    var maxTop = bodyRect.height - containerHeight;
    options.container.style.top = Math.min(maxTop, idealTop) + 'px';
    options.container.style.visibility = 'visible';
}


/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.html":
/*!*********************************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/tooltip/tooltip-container/tooltip-container.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tooltip-container__content\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.scss":
/*!*********************************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/tooltip/tooltip-container/tooltip-container.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iw-tooltip-container {\n  z-index: 6;\n  position: absolute;\n  display: block;\n  padding: 5px; }\n  iw-tooltip-container .tooltip-container__content {\n    border-radius: 3px;\n    color: white;\n    padding: 5px;\n    background: black; }\n  iw-tooltip-container:after {\n    border: 5px solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none; }\n  iw-tooltip-container.iw-tooltip-container--bottom:after {\n    left: 50%;\n    bottom: calc(100% - 5px);\n    border-bottom-color: black;\n    margin-left: -5px; }\n  iw-tooltip-container.iw-tooltip-container--top:after {\n    left: 50%;\n    top: calc(100% - 5px);\n    border-top-color: black;\n    margin-left: -5px; }\n  iw-tooltip-container.iw-tooltip-container--right:after {\n    top: 50%;\n    right: calc(100% - 5px);\n    border-right-color: black;\n    margin-top: -5px; }\n  iw-tooltip-container.iw-tooltip-container--left:after {\n    top: 50%;\n    left: calc(100% - 5px);\n    border-left-color: black;\n    margin-top: -5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9zcmMvYXBwL3VpL3Rvb2x0aXAvdG9vbHRpcC1jb250YWluZXIvdG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxhQU5pQixFQW1EbEI7RUFqREQ7SUFPSSxtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLGFBQVk7SUFDWixrQkFBaUIsRUFDbEI7RUFYSDtJQWNJLDhCQUF3QztJQUN4QyxhQUFZO0lBQ1osVUFBUztJQUNULFNBQVE7SUFDUixtQkFBa0I7SUFDbEIscUJBQW9CLEVBQ3JCO0VBcEJIO0lBdUJJLFVBQVM7SUFDVCx5QkFBc0M7SUFDdEMsMkJBQTBCO0lBQzFCLGtCQTVCZSxFQTZCaEI7RUEzQkg7SUE4QkksVUFBUztJQUNULHNCQUFtQztJQUNuQyx3QkFBdUI7SUFDdkIsa0JBbkNlLEVBb0NoQjtFQWxDSDtJQXFDSSxTQUFRO0lBQ1Isd0JBQXFDO0lBQ3JDLDBCQUF5QjtJQUN6QixpQkExQ2UsRUEyQ2hCO0VBekNIO0lBNENJLFNBQVE7SUFDUix1QkFBb0M7SUFDcEMseUJBQXdCO0lBQ3hCLGlCQWpEZSxFQWtEaEIiLCJmaWxlIjoic3JjL2FwcC91aS90b29sdGlwL3Rvb2x0aXAtY29udGFpbmVyL3Rvb2x0aXAtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGlubmVyLXBhZGRpbmc6IDVweDtcblxuaXctdG9vbHRpcC1jb250YWluZXIge1xuICB6LWluZGV4OiA2O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAkaW5uZXItcGFkZGluZztcblxuICAudG9vbHRpcC1jb250YWluZXJfX2NvbnRlbnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQ6IGJsYWNrOyAgICBcbiAgfVxuXG4gICY6YWZ0ZXIge1xuICAgIGJvcmRlcjogJGlubmVyLXBhZGRpbmcgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gICYuaXctdG9vbHRpcC1jb250YWluZXItLWJvdHRvbTphZnRlciB7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvdHRvbTogY2FsYygxMDAlIC0gI3skaW5uZXItcGFkZGluZ30pO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiAtJGlubmVyLXBhZGRpbmc7XG4gIH1cblxuICAmLml3LXRvb2x0aXAtY29udGFpbmVyLS10b3A6YWZ0ZXIge1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IGNhbGMoMTAwJSAtICN7JGlubmVyLXBhZGRpbmd9KTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBibGFjaztcbiAgICBtYXJnaW4tbGVmdDogLSRpbm5lci1wYWRkaW5nO1xuICB9XG5cbiAgJi5pdy10b29sdGlwLWNvbnRhaW5lci0tcmlnaHQ6YWZ0ZXIge1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiBjYWxjKDEwMCUgLSAjeyRpbm5lci1wYWRkaW5nfSk7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBibGFjaztcbiAgICBtYXJnaW4tdG9wOiAtJGlubmVyLXBhZGRpbmc7XG4gIH1cblxuICAmLml3LXRvb2x0aXAtY29udGFpbmVyLS1sZWZ0OmFmdGVyIHtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSAjeyRpbm5lci1wYWRkaW5nfSk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi10b3A6IC0kaW5uZXItcGFkZGluZztcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.ts":
/*!*******************************************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/tooltip/tooltip-container/tooltip-container.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: TooltipContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return TooltipContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip.config */ "../../src/app/ui/tooltip/tooltip.config.ts");



var TooltipContainerComponent = /** @class */ (function () {
    function TooltipContainerComponent(renderer, elementRef, tooltipConfig) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.tooltipConfig = tooltipConfig;
    }
    TooltipContainerComponent.prototype.ngOnInit = function () {
        if (this.containerClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.containerClass);
        }
        if (this.tooltipConfig && this.tooltipConfig.containerClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.tooltipConfig.containerClass);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TooltipContainerComponent.prototype, "containerClass", void 0);
    TooltipContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iw-tooltip-container',
            template: __webpack_require__(/*! ./tooltip-container.component.html */ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./tooltip-container.component.scss */ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_tooltip_config__WEBPACK_IMPORTED_MODULE_2__["IW_TOOLTIP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])
    ], TooltipContainerComponent);
    return TooltipContainerComponent;
}());



/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip.config.ts":
/*!************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/tooltip/tooltip.config.ts ***!
  \************************************************************************************/
/*! exports provided: IW_TOOLTIP_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IW_TOOLTIP_CONFIG", function() { return IW_TOOLTIP_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var IW_TOOLTIP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('iw-tooltip.config');


/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip.directive.ts":
/*!***************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/tooltip/tooltip.directive.ts ***!
  \***************************************************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_container_tooltip_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip-container/tooltip-container.component */ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "../../src/app/ui/tooltip/helpers.ts");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tooltip.config */ "../../src/app/ui/tooltip/tooltip.config.ts");







/**
 * The tooltip component can be used to display an extra piece of information to an element of an user interface.
 * This piece appears when the mouse is over this element.
 * Add a template that adds the `iwTooltip` directive inside the element where you want the tooltip to appear.
 *
 * ## Positionning
 * The tooltip is smartly positionned. It will be on top of the target if the target is on the bottom half of the screen.
 * It will be at the bottom of the target if the target is on the top half of the screen.
 ```ts
 import { TooltipModule } from 'iwerk-angular-ui';
 ```
 */
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(injector, appRef, componentFactoryResolver, templateRef, viewContainerRef, platformId, tooltipConfig) {
        this.injector = injector;
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.platformId = platformId;
        this.tooltipConfig = tooltipConfig;
    }
    /**
     * @ignore
     */
    TooltipDirective.prototype.ngAfterViewInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.__parent = this.viewContainerRef.element.nativeElement.parentElement;
            this.__parent.addEventListener('mouseenter', this);
            this.__parent.addEventListener('mouseleave', this);
        }
    };
    /**
     * @ignore
     */
    TooltipDirective.prototype.ngOnDestroy = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            clearTimeout(this.__timerId);
            this.__remove();
            this.__parent.removeEventListener('mouseenter', this);
            this.__parent.removeEventListener('mouseleave', this);
        }
    };
    /**
     * @ignore
     */
    TooltipDirective.prototype.handleEvent = function (evt) {
        var _this = this;
        if (evt.type === 'mouseenter') {
            this.__timerId = setTimeout(function () {
                return _this.__onMouseEnter(evt);
            }, this.__delay);
        }
        if (evt.type === 'mouseleave') {
            clearTimeout(this.__timerId);
            return this.__onMouseLeave(evt);
        }
    };
    /**
     * @ignore
     */
    TooltipDirective.prototype.__onMouseEnter = function (event) {
        if (!this.__elements) {
            var content = this.templateRef.createEmbeddedView(this.injector);
            var container = this.componentFactoryResolver
                .resolveComponentFactory(_tooltip_container_tooltip_container_component__WEBPACK_IMPORTED_MODULE_2__["TooltipContainerComponent"])
                .create(this.injector, [content.rootNodes]);
            container.instance.containerClass = this.containerClass;
            this.__elements = {
                content: content,
                container: container
            };
            this.appRef.attachView(content);
            this.appRef.attachView(container.hostView);
            content.detectChanges();
            container.hostView.detectChanges();
            Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["smartPosition"])({
                target: this.__parent,
                container: this.__elements.container.location.nativeElement
            }, this.__isHorizontal ? 'horizontal' : 'vertical');
        }
    };
    Object.defineProperty(TooltipDirective.prototype, "__isHorizontal", {
        /**
         * @ignore
         */
        get: function () {
            if (this.horizontal === undefined) {
                return !!(this.tooltipConfig ? this.tooltipConfig.horizontal : false);
            }
            return this.horizontal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "__delay", {
        /**
         * @ignore
         */
        get: function () {
            if (this.delay === undefined) {
                return this.tooltipConfig ? this.tooltipConfig.delay : 0;
            }
            return this.delay;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @ignore
     */
    TooltipDirective.prototype.__onMouseLeave = function (event) {
        this.__remove();
    };
    /**
     * @ignore
     */
    TooltipDirective.prototype.__remove = function () {
        if (!this.__elements) {
            return;
        }
        document.body.removeChild(this.__elements.container.location.nativeElement);
        this.appRef.detachView(this.__elements.content);
        this.appRef.detachView(this.__elements.container.hostView);
        this.__elements.container.hostView.detach();
        this.__elements.content.destroy();
        this.__elements.container.destroy();
        this.__elements = undefined;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TooltipDirective.prototype, "containerClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TooltipDirective.prototype, "horizontal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TooltipDirective.prototype, "delay", void 0);
    TooltipDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[iwTooltip]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_tooltip_config__WEBPACK_IMPORTED_MODULE_5__["IW_TOOLTIP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], String, Object])
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "../../src/app/ui/tooltip/tooltip.module.ts":
/*!************************************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/tooltip/tooltip.module.ts ***!
  \************************************************************************************/
/*! exports provided: IW_TOOLTIP_CONFIG, TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.directive */ "../../src/app/ui/tooltip/tooltip.directive.ts");
/* harmony import */ var _tooltip_container_tooltip_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip-container/tooltip-container.component */ "../../src/app/ui/tooltip/tooltip-container/tooltip-container.component.ts");
/* harmony import */ var _tooltip_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tooltip.config */ "../../src/app/ui/tooltip/tooltip.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IW_TOOLTIP_CONFIG", function() { return _tooltip_config__WEBPACK_IMPORTED_MODULE_5__["IW_TOOLTIP_CONFIG"]; });







var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [_tooltip_container_tooltip_container_component__WEBPACK_IMPORTED_MODULE_4__["TooltipContainerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], _tooltip_container_tooltip_container_component__WEBPACK_IMPORTED_MODULE_4__["TooltipContainerComponent"]],
            exports: [_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"]]
        })
    ], TooltipModule);
    return TooltipModule;
}());



/***/ }),

/***/ "../../src/app/ui/ui.module.ts":
/*!***********************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/app/ui/ui.module.ts ***!
  \***********************************************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox/checkbox.module */ "../../src/app/ui/checkbox/checkbox.module.ts");
/* harmony import */ var _multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiline-ellipsis/multiline-ellipsis.module */ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.module.ts");
/* harmony import */ var _popover_popover_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover/popover.module */ "../../src/app/ui/popover/popover.module.ts");
/* harmony import */ var _state_button_state_button_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state-button/state-button.module */ "../../src/app/ui/state-button/state-button.module.ts");
/* harmony import */ var _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tooltip/tooltip.module */ "../../src/app/ui/tooltip/tooltip.module.ts");
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.module */ "../../src/app/ui/navigation/navigation.module.ts");









var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _popover_popover_module__WEBPACK_IMPORTED_MODULE_5__["PopoverModule"],
                _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
                _state_button_state_button_module__WEBPACK_IMPORTED_MODULE_6__["StateButtonModule"],
                _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"],
                _multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_4__["MultilineEllipsisModule"],
                _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_8__["NavigationModule"]
            ],
            exports: [
                _popover_popover_module__WEBPACK_IMPORTED_MODULE_5__["PopoverModule"],
                _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
                _state_button_state_button_module__WEBPACK_IMPORTED_MODULE_6__["StateButtonModule"],
                _checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"],
                _multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_4__["MultilineEllipsisModule"],
                _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_8__["NavigationModule"]
            ]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "../../src/public_api.ts":
/*!*****************************************************************!*\
  !*** /Users/kevinmerckx/dev/iwerk-angular-ui/src/public_api.ts ***!
  \*****************************************************************/
/*! exports provided: PopoverService, Popover, IW_POPOVER_CONFIG, PopoverModule, IW_TOOLTIP_CONFIG, TooltipModule, StateButtonModule, CheckboxModule, IW_DIALOG_CONFIG, DialogService, DialogDirective, DialogModule, MultilineEllipsisModule, NavigationComponent, NavigationData, NavigationController, NavigationModule, UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_ui_popover_popover_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/ui/popover/popover.module */ "../../src/app/ui/popover/popover.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverService", function() { return _app_ui_popover_popover_module__WEBPACK_IMPORTED_MODULE_0__["PopoverService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _app_ui_popover_popover_module__WEBPACK_IMPORTED_MODULE_0__["Popover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IW_POPOVER_CONFIG", function() { return _app_ui_popover_popover_module__WEBPACK_IMPORTED_MODULE_0__["IW_POPOVER_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return _app_ui_popover_popover_module__WEBPACK_IMPORTED_MODULE_0__["PopoverModule"]; });

/* harmony import */ var _app_ui_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/ui/tooltip/tooltip.module */ "../../src/app/ui/tooltip/tooltip.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IW_TOOLTIP_CONFIG", function() { return _app_ui_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_1__["IW_TOOLTIP_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return _app_ui_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_1__["TooltipModule"]; });

/* harmony import */ var _app_ui_state_button_state_button_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/ui/state-button/state-button.module */ "../../src/app/ui/state-button/state-button.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateButtonModule", function() { return _app_ui_state_button_state_button_module__WEBPACK_IMPORTED_MODULE_2__["StateButtonModule"]; });

/* harmony import */ var _app_ui_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/ui/checkbox/checkbox.module */ "../../src/app/ui/checkbox/checkbox.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return _app_ui_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"]; });

/* harmony import */ var _app_ui_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/ui/dialog/dialog.module */ "../../src/app/ui/dialog/dialog.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IW_DIALOG_CONFIG", function() { return _app_ui_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_4__["IW_DIALOG_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return _app_ui_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_4__["DialogService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogDirective", function() { return _app_ui_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_4__["DialogDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return _app_ui_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_4__["DialogModule"]; });

/* harmony import */ var _app_ui_multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/ui/multiline-ellipsis/multiline-ellipsis.module */ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultilineEllipsisModule", function() { return _app_ui_multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_5__["MultilineEllipsisModule"]; });

/* harmony import */ var _app_ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/ui/navigation/navigation.module */ "../../src/app/ui/navigation/navigation.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return _app_ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationData", function() { return _app_ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationController", function() { return _app_ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return _app_ui_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]; });

/* harmony import */ var _app_ui_ui_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/ui/ui.module */ "../../src/app/ui/ui.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return _app_ui_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"]; });











/***/ }),

/***/ "../docs/src/lib/core/code-sample/code-sample.module.ts":
/*!**************************************************************!*\
  !*** ../docs/src/lib/core/code-sample/code-sample.module.ts ***!
  \**************************************************************/
/*! exports provided: CodeSampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSampleModule", function() { return CodeSampleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _code_sample_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code-sample.pipe */ "../docs/src/lib/core/code-sample/code-sample.pipe.ts");




var CodeSampleModule = /** @class */ (function () {
    function CodeSampleModule() {
    }
    CodeSampleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            exports: [_code_sample_pipe__WEBPACK_IMPORTED_MODULE_3__["CodeSamplePipe"], _code_sample_pipe__WEBPACK_IMPORTED_MODULE_3__["ComponentDescriptionPipe"]],
            providers: [_code_sample_pipe__WEBPACK_IMPORTED_MODULE_3__["CodeSamplePipe"], _code_sample_pipe__WEBPACK_IMPORTED_MODULE_3__["ComponentDescriptionPipe"]],
            declarations: [_code_sample_pipe__WEBPACK_IMPORTED_MODULE_3__["CodeSamplePipe"], _code_sample_pipe__WEBPACK_IMPORTED_MODULE_3__["ComponentDescriptionPipe"]]
        })
    ], CodeSampleModule);
    return CodeSampleModule;
}());



/***/ }),

/***/ "../docs/src/lib/core/code-sample/code-sample.pipe.ts":
/*!************************************************************!*\
  !*** ../docs/src/lib/core/code-sample/code-sample.pipe.ts ***!
  \************************************************************/
/*! exports provided: CodeSamplePipe, ComponentDescriptionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSamplePipe", function() { return CodeSamplePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDescriptionPipe", function() { return ComponentDescriptionPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _documentation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../documentation.service */ "../docs/src/lib/core/documentation.service.ts");




var CodeSamplePipe = /** @class */ (function () {
    function CodeSamplePipe(http, changeDetectorRef) {
        var _this = this;
        this.http = http;
        this.changeDetectorRef = changeDetectorRef;
        this.codeSamples = {};
        this.http.get('assets/examples.json')
            .subscribe(function (c) {
            _this.codeSamples = c;
            _this.changeDetectorRef.markForCheck();
        });
    }
    CodeSamplePipe.prototype.transform = function (sampleId) {
        var key = Object.keys(this.codeSamples).find(function (k) { return k.includes(sampleId); });
        return this.codeSamples[key];
    };
    CodeSamplePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
            name: 'codeSample',
            pure: false
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], CodeSamplePipe);
    return CodeSamplePipe;
}());

var ComponentDescriptionPipe = /** @class */ (function () {
    function ComponentDescriptionPipe(documentationService, changeDetectorRef) {
        var _this = this;
        this.documentationService = documentationService;
        this.changeDetectorRef = changeDetectorRef;
        this.documentationService.documentation$.subscribe(function () {
            _this.changeDetectorRef.markForCheck();
        });
    }
    ComponentDescriptionPipe.prototype.transform = function (name, type) {
        var comp = this.documentationService.getComponentDocumentation(name, type);
        if (comp) {
            return comp.description;
        }
        else {
            return 'Loading';
        }
    };
    ComponentDescriptionPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
            name: 'componentDescription',
            pure: false
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_documentation_service__WEBPACK_IMPORTED_MODULE_3__["DocumentationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], ComponentDescriptionPipe);
    return ComponentDescriptionPipe;
}());



/***/ }),

/***/ "../docs/src/lib/core/code/code.component.html":
/*!*****************************************************!*\
  !*** ../docs/src/lib/core/code/code.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre><code #code>{{ path | codeSample }}</code></pre>\n<div class=\"source-actions\">\n  <button class=\"copy\" (click)=\"copy()\">\n    <fa-icon [icon]=\"faCopy\"></fa-icon>\n    <ng-template iwTooltip [horizontal]=\"true\">Copy this code sample</ng-template>\n  </button>\n  <div *ngIf=\"copied\" class=\"copied\">Copied!</div>\n</div>\n"

/***/ }),

/***/ "../docs/src/lib/core/code/code.component.sass":
/*!*****************************************************!*\
  !*** ../docs/src/lib/core/code/code.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: block; }\n\npre {\n  margin: 0;\n  padding: 0; }\n\npre code {\n    margin: 0; }\n\n.source-actions {\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding: 5px 15px; }\n\n.copy {\n  outline: none;\n  background: none;\n  box-shadow: none;\n  color: grey;\n  padding: 0; }\n\n.copy:hover {\n    color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9wcm9qZWN0cy9kb2NzL3NyYy9saWIvY29yZS9jb2RlL2NvZGUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQyxtQkFBa0I7RUFDbEIsZUFBYyxFQUFHOztBQUVuQjtFQUNFLFVBQVM7RUFDVCxXQUFVLEVBR007O0FBTGxCO0lBS0ksVUFBUyxFQUFHOztBQUdoQjtFQUNFLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsT0FBTTtFQUNOLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsc0JBQXFCO0VBQ3JCLGtCQUFpQixFQUFHOztBQUV0QjtFQUNFLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxXQUFVLEVBR1M7O0FBUnJCO0lBUUksYUFBWSxFQUFHIiwiZmlsZSI6InByb2plY3RzL2RvY3Mvc3JjL2xpYi9jb3JlL2NvZGUvY29kZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiA6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxucHJlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIGNvZGUge1xuICAgIG1hcmdpbjogMDsgfSB9XG5cblxuLnNvdXJjZS1hY3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDVweCAxNXB4OyB9XG5cbi5jb3B5IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6IGdyZXk7XG4gIHBhZGRpbmc6IDA7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "../docs/src/lib/core/code/code.component.ts":
/*!***************************************************!*\
  !*** ../docs/src/lib/core/code/code.component.ts ***!
  \***************************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var CodeComponent = /** @class */ (function () {
    function CodeComponent() {
        this.faCopy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCopy"];
        this.copied = false;
    }
    CodeComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.copiedTimeout);
    };
    CodeComponent.prototype.copy = function () {
        var _this = this;
        this.copyToClipboard(this.code.nativeElement.innerText);
        this.copied = true;
        clearTimeout(this.copiedTimeout);
        this.copiedTimeout = setTimeout(function () { return _this.copied = false; }, 3000);
    };
    CodeComponent.prototype.copyToClipboard = function (str) {
        var el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CodeComponent.prototype, "path", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('code'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "code", void 0);
    CodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'docs-code',
            template: __webpack_require__(/*! ./code.component.html */ "../docs/src/lib/core/code/code.component.html"),
            styles: [__webpack_require__(/*! ./code.component.sass */ "../docs/src/lib/core/code/code.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CodeComponent);
    return CodeComponent;
}());



/***/ }),

/***/ "../docs/src/lib/core/component-api/component-api.component.html":
/*!***********************************************************************!*\
  !*** ../docs/src/lib/core/component-api/component-api.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Selector: <code>{{selector$ | async}}</code></h2>\n\n<ng-template [ngIf]=\"hasInputs$ | async\">\n  <h3>Inputs</h3>\n\n  <table>\n    <thead>\n      <tr>\n        <th class=\"name\">Input</th>\n        <th class=\"type\">Type</th>\n        <th class=\"description\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-template ngFor [ngForOf]=\"inputs$ | async\" let-input>\n        <tr>\n          <td><code>{{input.name}}</code></td>\n          <td><code>{{input.type}}</code></td>\n          <td [innerHTML]=\"input.description\"></td>\n        </tr>\n      </ng-template>\n    </tbody>\n  </table>\n</ng-template>\n\n<ng-template [ngIf]=\"hasOutputs$ | async\">\n  <h3>Outputs</h3>\n\n  <table>\n    <thead>\n      <tr>\n        <th class=\"name\">Output</th>\n        <th class=\"type\">Type</th>\n        <th class=\"description\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-template ngFor [ngForOf]=\"outputs$ | async\" let-output>\n        <tr>\n          <td><code>{{output.name}}</code></td>\n          <td><code>{{output.defaultValue}}</code></td>\n          <td [innerHTML]=\"output.description\"></td>\n        </tr>\n      </ng-template>\n    </tbody>\n  </table>\n</ng-template>\n\n<ng-template [ngIf]=\"hasMethods$ | async\">\n  <h3>Methods</h3>\n\n  <table>\n    <thead>\n      <tr>\n        <th class=\"name\">Method</th>\n        <th class=\"description\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-template ngFor [ngForOf]=\"methods$ | async\" let-output>\n        <tr>\n          <td><code>{{output.name}}</code></td>\n          <td [innerHTML]=\"output.description\"></td>\n        </tr>\n      </ng-template>\n    </tbody>\n  </table>\n</ng-template>"

/***/ }),

/***/ "../docs/src/lib/core/component-api/component-api.component.sass":
/*!***********************************************************************!*\
  !*** ../docs/src/lib/core/component-api/component-api.component.sass ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  border-collapse: collapse;\n  border: 1px solid lightgrey;\n  border-radius: 1px;\n  width: 100%; }\n\nthead {\n  background: lightgrey; }\n\nth {\n  text-align: left; }\n\nth, td {\n  padding: 3px 20px 3px 3px; }\n\ntr {\n  border-bottom: 1px solid lightgrey; }\n\n.name, .type {\n  width: 30%; }\n\n.description {\n  width: 40%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9wcm9qZWN0cy9kb2NzL3NyYy9saWIvY29yZS9jb21wb25lbnQtYXBpL2NvbXBvbmVudC1hcGkuY29tcG9uZW50LnNhc3MiLCIvVXNlcnMva2V2aW5tZXJja3gvZGV2L2l3ZXJrLWFuZ3VsYXItdWkvcHJvamVjdHMvZG9jcy9zcmMvbGliL3N0eWxlcy9fdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwwQkFBeUI7RUFDekIsNEJDRXdCO0VERHhCLG1CQUFrQjtFQUNsQixZQUFXLEVBQUc7O0FBRWxCO0VBQ0ksc0JDSHdCLEVER1E7O0FBRXBDO0VBQ0ksaUJBQWdCLEVBQUc7O0FBRXZCO0VBQ0ksMEJBQXlCLEVBQUc7O0FBRWhDO0VBQ0ksbUNDWndCLEVEWXFCOztBQUVqRDtFQUNJLFdBQVUsRUFBRzs7QUFFakI7RUFDSSxXQUFVLEVBQUciLCJmaWxlIjoicHJvamVjdHMvZG9jcy9zcmMvbGliL2NvcmUvY29tcG9uZW50LWFwaS9jb21wb25lbnQtYXBpLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1saWdodC1ncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICB3aWR0aDogMTAwJTsgfVxuXG50aGVhZCB7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWxpZ2h0LWdyZXk7IH1cblxudGgge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cblxudGgsIHRkIHtcbiAgICBwYWRkaW5nOiAzcHggMjBweCAzcHggM3B4OyB9XG5cbnRyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWdyZXk7IH1cblxuLm5hbWUsIC50eXBlIHtcbiAgICB3aWR0aDogMzAlOyB9XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDQwJTsgfVxuIiwiJGNvbG9yLW9uZTogIzI4QzhGRjtcbiRjb2xvci10d286ICMyOEEyRkY7XG4kY29sb3ItdGhyZWU6ICNGRjc5M0Y7XG4kY29sb3ItZm91cjogI0ZGNEQwMDtcbiRjb2xvci1maXZlOiAjRUUyMjAwO1xuXG4kY29sb3ItbGlnaHQtZ3JleTogbGlnaHRncmV5O1xuIl19 */"

/***/ }),

/***/ "../docs/src/lib/core/component-api/component-api.component.ts":
/*!*********************************************************************!*\
  !*** ../docs/src/lib/core/component-api/component-api.component.ts ***!
  \*********************************************************************/
/*! exports provided: ComponentApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentApiComponent", function() { return ComponentApiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _documentation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../documentation.service */ "../docs/src/lib/core/documentation.service.ts");




var ComponentApiComponent = /** @class */ (function () {
    function ComponentApiComponent(documentation) {
        this.documentation = documentation;
    }
    ComponentApiComponent.prototype.ngOnChanges = function () {
        this.documentation$ = this.documentation.getComponentDocumentation$(this.componentId, this.componentType);
        this.selector$ = this.documentation$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (d) { return d ? d.selector : ''; }));
        this.inputs$ = this.documentation$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (d) { return d ? d.inputsClass || [] : []; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(sortByName));
        this.outputs$ = this.documentation$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (d) { return d ? d.outputsClass || [] : []; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(sortByName));
        this.methods$ = this.documentation$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (d) { return d ? d.methodsClass || [] : []; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(sortByName));
        this.hasOutputs$ = this.outputs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (a) { return a.length > 0; }));
        this.hasInputs$ = this.inputs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (a) { return a.length > 0; }));
        this.hasMethods$ = this.methods$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (a) { return a.length > 0; }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentApiComponent.prototype, "componentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentApiComponent.prototype, "componentType", void 0);
    ComponentApiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-component-api',
            template: __webpack_require__(/*! ./component-api.component.html */ "../docs/src/lib/core/component-api/component-api.component.html"),
            styles: [__webpack_require__(/*! ./component-api.component.sass */ "../docs/src/lib/core/component-api/component-api.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_documentation_service__WEBPACK_IMPORTED_MODULE_3__["DocumentationService"]])
    ], ComponentApiComponent);
    return ComponentApiComponent;
}());

function sortByName(arr) {
    var result = (arr || []).slice(0);
    result.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    return result;
}


/***/ }),

/***/ "../docs/src/lib/core/component-description/component-description.component.html":
/*!***************************************************************************************!*\
  !*** ../docs/src/lib/core/component-description/component-description.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [innerHTML]=\"componentId | componentDescription: componentType\"></div>"

/***/ }),

/***/ "../docs/src/lib/core/component-description/component-description.component.sass":
/*!***************************************************************************************!*\
  !*** ../docs/src/lib/core/component-description/component-description.component.sass ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9saWIvY29yZS9jb21wb25lbnQtZGVzY3JpcHRpb24vY29tcG9uZW50LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "../docs/src/lib/core/component-description/component-description.component.ts":
/*!*************************************************************************************!*\
  !*** ../docs/src/lib/core/component-description/component-description.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ComponentDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDescriptionComponent", function() { return ComponentDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ComponentDescriptionComponent = /** @class */ (function () {
    function ComponentDescriptionComponent() {
    }
    ComponentDescriptionComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentDescriptionComponent.prototype, "componentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentDescriptionComponent.prototype, "componentType", void 0);
    ComponentDescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-component-description',
            template: __webpack_require__(/*! ./component-description.component.html */ "../docs/src/lib/core/component-description/component-description.component.html"),
            styles: [__webpack_require__(/*! ./component-description.component.sass */ "../docs/src/lib/core/component-description/component-description.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComponentDescriptionComponent);
    return ComponentDescriptionComponent;
}());



/***/ }),

/***/ "../docs/src/lib/core/component-documentation/component-documentation.component.html":
/*!*******************************************************************************************!*\
  !*** ../docs/src/lib/core/component-documentation/component-documentation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1>{{componentTitle}}</h1>\n\n  <ol>\n    <li [class.active]=\"isOverview$ | async\" (click)=\"select('overview')\">Overview</li>\n    <li [class.active]=\"isExamples$ | async\" (click)=\"select('examples')\">Examples</li>\n    <li [class.active]=\"isApi$ | async\" (click)=\"select('api')\">API</li>\n  </ol>\n</div>\n\n<div class=\"content\" [appAnchorContainer]=\"tab$ | async\">\n  <app-component-description\n    appAnchor=\"overview\"\n    [componentId]=\"componentId\"\n    [componentType]=\"componentType\"\n  ></app-component-description>\n\n  <h2 appAnchor=\"examples\">Examples</h2>\n  <ng-template ngFor [ngForOf]=\"examples\" let-example>\n    <app-component-example [example]=\"example\"></app-component-example>\n  </ng-template>\n\n  <h2 appAnchor=\"api\">API</h2>\n  \n  <app-component-api\n    [componentId]=\"componentId\"\n    [componentType]=\"componentType\"\n  ></app-component-api>\n  \n</div>\n\n"

/***/ }),

/***/ "../docs/src/lib/core/component-documentation/component-documentation.component.sass":
/*!*******************************************************************************************!*\
  !*** ../docs/src/lib/core/component-documentation/component-documentation.component.sass ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column; }\n\n.header {\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-bottom: 1px solid grey;\n  box-shadow: 2px 0px 2px 1px lightgrey;\n  padding: 0 15px; }\n\n.content {\n  flex: 1 1;\n  padding: 15px;\n  overflow: auto; }\n\nh2 {\n  margin-top: 50px;\n  border-bottom: 1px solid lightgrey; }\n\nol {\n  list-style: none;\n  margin: 0 0 0 30px;\n  padding: 0; }\n\nli {\n  display: inline-block;\n  margin: 0;\n  padding: 5px 10px;\n  transition: color 0.2s;\n  cursor: pointer; }\n\nli:hover {\n    color: #FF793F; }\n\nli.active {\n    color: #FF4D00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9wcm9qZWN0cy9kb2NzL3NyYy9saWIvY29yZS9jb21wb25lbnQtZG9jdW1lbnRhdGlvbi9jb21wb25lbnQtZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2FzcyIsIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9wcm9qZWN0cy9kb2NzL3NyYy9saWIvc3R5bGVzL192YXJpYWJsZXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQztFQUNDLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLHVCQUFzQixFQUFHOztBQUUzQjtFQUNFLGVBQWM7RUFDZCxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLG9CQUFtQjtFQUNuQiw4QkFBNkI7RUFDN0Isc0NBQXFDO0VBQ3JDLGdCQUFlLEVBQUc7O0FBRXBCO0VBQ0UsVUFBUztFQUNULGNBQWE7RUFDYixlQUFjLEVBQUc7O0FBR25CO0VBQ0UsaUJBQWdCO0VBQ2hCLG1DQ25CMEIsRURtQm1COztBQUUvQztFQUNFLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsV0FBVSxFQUFHOztBQUVmO0VBQ0Usc0JBQXFCO0VBQ3JCLFVBQVM7RUFDVCxrQkFBaUI7RUFDakIsdUJBQXNCO0VBQ3RCLGdCQUFlLEVBTVU7O0FBWDNCO0lBUUksZUN0Q2lCLEVEc0NLOztBQVIxQjtJQVdJLGVDeENnQixFRHdDSyIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9saWIvY29yZS9jb21wb25lbnQtZG9jdW1lbnRhdGlvbi9jb21wb25lbnQtZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xuXG4gOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuLmhlYWRlciB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbiAgYm94LXNoYWRvdzogMnB4IDBweCAycHggMXB4IGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogMCAxNXB4OyB9XG5cbi5jb250ZW50IHtcbiAgZmxleDogMSAxO1xuICBwYWRkaW5nOiAxNXB4O1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG5cbmgyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1saWdodC1ncmV5OyB9XG5cbm9sIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwIDAgMCAzMHB4O1xuICBwYWRkaW5nOiAwOyB9XG5cbmxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICRjb2xvci10aHJlZTsgfVxuXG4gICYuYWN0aXZlIHtcbiAgICBjb2xvcjogJGNvbG9yLWZvdXI7IH0gfVxuIiwiJGNvbG9yLW9uZTogIzI4QzhGRjtcbiRjb2xvci10d286ICMyOEEyRkY7XG4kY29sb3ItdGhyZWU6ICNGRjc5M0Y7XG4kY29sb3ItZm91cjogI0ZGNEQwMDtcbiRjb2xvci1maXZlOiAjRUUyMjAwO1xuXG4kY29sb3ItbGlnaHQtZ3JleTogbGlnaHRncmV5O1xuIl19 */"

/***/ }),

/***/ "../docs/src/lib/core/component-documentation/component-documentation.component.ts":
/*!*****************************************************************************************!*\
  !*** ../docs/src/lib/core/component-documentation/component-documentation.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ComponentDocumentationComponent, AnchorContainerDirective, AnchorDirective, ComponentExampleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDocumentationComponent", function() { return ComponentDocumentationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorContainerDirective", function() { return AnchorContainerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorDirective", function() { return AnchorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentExampleDirective", function() { return ComponentExampleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");




var ComponentDocumentationComponent = /** @class */ (function () {
    function ComponentDocumentationComponent(router, route) {
        this.router = router;
        this.route = route;
        this.examples = [];
        this.tab$ = this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (p) { return p.tab || 'overview'; }));
        this.isOverview$ = this.tab$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (v) { return v === 'overview'; }));
        this.isExamples$ = this.tab$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (v) { return v === 'examples'; }));
        this.isApi$ = this.tab$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (v) { return v === 'api'; }));
    }
    ComponentDocumentationComponent.prototype.ngOnInit = function () {
    };
    ComponentDocumentationComponent.prototype.registerExample = function (example) {
        this.examples.push(example);
    };
    ComponentDocumentationComponent.prototype.select = function (tab) {
        this.router.navigate(['.'], {
            queryParamsHandling: 'merge',
            queryParams: {
                tab: tab
            },
            relativeTo: this.route,
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentDocumentationComponent.prototype, "componentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentDocumentationComponent.prototype, "componentType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentDocumentationComponent.prototype, "componentTitle", void 0);
    ComponentDocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'docs-component-documentation',
            template: __webpack_require__(/*! ./component-documentation.component.html */ "../docs/src/lib/core/component-documentation/component-documentation.component.html"),
            styles: [__webpack_require__(/*! ./component-documentation.component.sass */ "../docs/src/lib/core/component-documentation/component-documentation.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ComponentDocumentationComponent);
    return ComponentDocumentationComponent;
}());

var AnchorContainerDirective = /** @class */ (function () {
    function AnchorContainerDirective(elementRef) {
        this.elementRef = elementRef;
        this.anchors = [];
    }
    AnchorContainerDirective.prototype.registerAnchor = function (anchor) {
        this.anchors.push(anchor);
    };
    AnchorContainerDirective.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.currentAnchor === this.appAnchorContainer) {
            return;
        }
        this.currentAnchor = this.appAnchorContainer;
        var element = this.elementRef.nativeElement;
        var anchor = (this.anchors.find(function (a) { return a.appAnchor === _this.appAnchorContainer; }).elementRef.nativeElement);
        element.scrollTop = anchor.offsetTop - element.offsetTop - 15;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AnchorContainerDirective.prototype, "appAnchorContainer", void 0);
    AnchorContainerDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAnchorContainer]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AnchorContainerDirective);
    return AnchorContainerDirective;
}());

var AnchorDirective = /** @class */ (function () {
    function AnchorDirective(container, elementRef) {
        this.container = container;
        this.elementRef = elementRef;
        this.container.registerAnchor(this);
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AnchorDirective.prototype, "appAnchor", void 0);
    AnchorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAnchor]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [AnchorContainerDirective,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AnchorDirective);
    return AnchorDirective;
}());

var ComponentExampleDirective = /** @class */ (function () {
    function ComponentExampleDirective(documentation, template) {
        this.documentation = documentation;
        this.template = template;
        this.documentation.registerExample(this);
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentExampleDirective.prototype, "docsComponentExample", void 0);
    ComponentExampleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[docsComponentExample]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ComponentDocumentationComponent,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], ComponentExampleDirective);
    return ComponentExampleDirective;
}());



/***/ }),

/***/ "../docs/src/lib/core/component-example/component-example.component.html":
/*!*******************************************************************************!*\
  !*** ../docs/src/lib/core/component-example/component-example.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{example.docsComponentExample}}</h3>\n\n<ng-container [ngTemplateOutlet]=\"example.template\"></ng-container>\n"

/***/ }),

/***/ "../docs/src/lib/core/component-example/component-example.component.sass":
/*!*******************************************************************************!*\
  !*** ../docs/src/lib/core/component-example/component-example.component.sass ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9saWIvY29yZS9jb21wb25lbnQtZXhhbXBsZS9jb21wb25lbnQtZXhhbXBsZS5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "../docs/src/lib/core/component-example/component-example.component.ts":
/*!*****************************************************************************!*\
  !*** ../docs/src/lib/core/component-example/component-example.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ComponentExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentExampleComponent", function() { return ComponentExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component-documentation/component-documentation.component */ "../docs/src/lib/core/component-documentation/component-documentation.component.ts");



var ComponentExampleComponent = /** @class */ (function () {
    function ComponentExampleComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_2__["ComponentExampleDirective"])
    ], ComponentExampleComponent.prototype, "example", void 0);
    ComponentExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-component-example',
            template: __webpack_require__(/*! ./component-example.component.html */ "../docs/src/lib/core/component-example/component-example.component.html"),
            styles: [__webpack_require__(/*! ./component-example.component.sass */ "../docs/src/lib/core/component-example/component-example.component.sass")]
        })
    ], ComponentExampleComponent);
    return ComponentExampleComponent;
}());



/***/ }),

/***/ "../docs/src/lib/core/core.module.ts":
/*!*******************************************!*\
  !*** ../docs/src/lib/core/core.module.ts ***!
  \*******************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _code_sample_code_sample_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-sample/code-sample.module */ "../docs/src/lib/core/code-sample/code-sample.module.ts");
/* harmony import */ var _component_api_component_api_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component-api/component-api.component */ "../docs/src/lib/core/component-api/component-api.component.ts");
/* harmony import */ var _component_description_component_description_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component-description/component-description.component */ "../docs/src/lib/core/component-description/component-description.component.ts");
/* harmony import */ var _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component-documentation/component-documentation.component */ "../docs/src/lib/core/component-documentation/component-documentation.component.ts");
/* harmony import */ var _component_example_component_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component-example/component-example.component */ "../docs/src/lib/core/component-example/component-example.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/tabs.component */ "../docs/src/lib/core/tabs/tabs.component.ts");
/* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./code/code.component */ "../docs/src/lib/core/code/code.component.ts");












var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _code_sample_code_sample_module__WEBPACK_IMPORTED_MODULE_5__["CodeSampleModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"]
            ],
            exports: [
                _code_sample_code_sample_module__WEBPACK_IMPORTED_MODULE_5__["CodeSampleModule"],
                _component_description_component_description_component__WEBPACK_IMPORTED_MODULE_7__["ComponentDescriptionComponent"],
                _component_api_component_api_component__WEBPACK_IMPORTED_MODULE_6__["ComponentApiComponent"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_8__["ComponentDocumentationComponent"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_8__["ComponentExampleDirective"],
                _component_example_component_example_component__WEBPACK_IMPORTED_MODULE_9__["ComponentExampleComponent"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_8__["AnchorContainerDirective"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_8__["AnchorDirective"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__["TabsComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__["TabDirective"],
                _code_code_component__WEBPACK_IMPORTED_MODULE_11__["CodeComponent"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
            ],
            declarations: [
                _component_description_component_description_component__WEBPACK_IMPORTED_MODULE_7__["ComponentDescriptionComponent"],
                _component_api_component_api_component__WEBPACK_IMPORTED_MODULE_6__["ComponentApiComponent"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_8__["ComponentDocumentationComponent"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_8__["ComponentExampleDirective"],
                _component_example_component_example_component__WEBPACK_IMPORTED_MODULE_9__["ComponentExampleComponent"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_8__["AnchorContainerDirective"],
                _component_documentation_component_documentation_component__WEBPACK_IMPORTED_MODULE_8__["AnchorDirective"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__["TabsComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__["TabDirective"],
                _code_code_component__WEBPACK_IMPORTED_MODULE_11__["CodeComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../docs/src/lib/core/documentation.service.ts":
/*!*****************************************************!*\
  !*** ../docs/src/lib/core/documentation.service.ts ***!
  \*****************************************************/
/*! exports provided: DocumentationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationService", function() { return DocumentationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");





var DocumentationService = /** @class */ (function () {
    function DocumentationService(http) {
        var _this = this;
        this.http = http;
        this.documentationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        this.http.get('assets/documentation/documentation.json')
            .subscribe(function (c) {
            _this.documentationSubject.next(c);
        });
    }
    Object.defineProperty(DocumentationService.prototype, "documentation", {
        get: function () {
            return this.documentationSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentationService.prototype, "documentation$", {
        get: function () {
            return this.documentationSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DocumentationService.prototype.getComponentDocumentation$ = function (name, type) {
        return this.documentationSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (documentation) {
            if (!documentation) {
                return undefined;
            }
            else {
                return documentation[type].find(function (d) { return d.name === name; });
            }
        }));
    };
    DocumentationService.prototype.getComponentDocumentation = function (name, type) {
        if (!this.documentation) {
            return undefined;
        }
        else {
            return this.documentation[type].find(function (d) { return d.name === name; });
        }
    };
    DocumentationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DocumentationService);
    return DocumentationService;
}());



/***/ }),

/***/ "../docs/src/lib/core/tabs/tabs.component.html":
/*!*****************************************************!*\
  !*** ../docs/src/lib/core/tabs/tabs.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol>\n  <li *ngFor=\"let tab of tabs\"\n    (click)=\"selectedTemplate = tab.template\"\n    [class.active]=\"tab.template === selectedTemplate\"\n  >{{tab.label}}</li>\n</ol>\n\n<div class=\"content\">\n  <ng-container *ngTemplateOutlet=\"selectedTemplate\"></ng-container>\n</div>"

/***/ }),

/***/ "../docs/src/lib/core/tabs/tabs.component.sass":
/*!*****************************************************!*\
  !*** ../docs/src/lib/core/tabs/tabs.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n  overflow: hidden;\n  border: lightgrey 1px solid; }\n\nol {\n  margin: 0;\n  padding: 0; }\n\nli {\n  list-style: none;\n  display: inline-block;\n  cursor: pointer;\n  padding: 0;\n  margin: 0; }\n\n.content {\n  flex: 1 1;\n  overflow: auto; }\n\n:host {\n  margin-top: 20px; }\n\n:host .content {\n    background-color: whitesmoke; }\n\n:host pre {\n    margin-top: 0; }\n\n:host li {\n    padding: 0 15px;\n    line-height: 40px;\n    height: 40px;\n    border-bottom: 2px solid transparent;\n    transition: border-bottom 0.2s; }\n\n:host li:hover:not(.active) {\n      border-bottom-color: lightgrey; }\n\n:host li.active {\n      color: #FF4D00;\n      border-bottom-color: #FF4D00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9wcm9qZWN0cy9kb2NzL3NyYy9saWIvY29yZS90YWJzL3RhYnMuY29tcG9uZW50LnNhc3MiLCIvVXNlcnMva2V2aW5tZXJja3gvZGV2L2l3ZXJrLWFuZ3VsYXItdWkvcHJvamVjdHMvZG9jcy9zcmMvbGliL3N0eWxlcy9fdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUM7RUFDQyxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsNEJBQW1DLEVBQUc7O0FBRXhDO0VBQ0UsVUFBUztFQUNULFdBQVUsRUFBRzs7QUFFZjtFQUNFLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsZ0JBQWU7RUFDZixXQUFVO0VBQ1YsVUFBUyxFQUFHOztBQUVkO0VBQ0UsVUFBUztFQUNULGVBQWMsRUFBRzs7QUFHbEI7RUFDQyxpQkFBZ0IsRUFrQjJCOztBQW5CNUM7SUFJRyw2QkFBNEIsRUFBRzs7QUFKbEM7SUFNRyxjQUFhLEVBQUc7O0FBTm5CO0lBUUcsZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsYUFBWTtJQUNaLHFDQUFvQztJQUNwQywrQkFBOEIsRUFPUzs7QUFuQjFDO01BZUssK0JDbENzQixFRGtDbUI7O0FBZjlDO01Ba0JLLGVDeENjO01EeUNkLDZCQ3pDYyxFRHlDcUIiLCJmaWxlIjoicHJvamVjdHMvZG9jcy9zcmMvbGliL2NvcmUvdGFicy90YWJzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbiA6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogJGNvbG9yLWxpZ2h0LWdyZXkgMXB4IHNvbGlkOyB9XG5cbm9sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwOyB9XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDsgfVxuXG4uY29udGVudCB7XG4gIGZsZXg6IDEgMTtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLy8gaW1wbGVtZW50ZWQgdG8gZGlzcGxheSBjb2RlXG4gOmhvc3Qge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gIC5jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlOyB9XG4gIHByZSB7XG4gICAgbWFyZ2luLXRvcDogMDsgfVxuICBsaSB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAwLjJzO1xuXG4gICAgJjpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyZXk7IH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAkY29sb3ItZm91cjtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRjb2xvci1mb3VyOyB9IH0gfVxuIiwiJGNvbG9yLW9uZTogIzI4QzhGRjtcbiRjb2xvci10d286ICMyOEEyRkY7XG4kY29sb3ItdGhyZWU6ICNGRjc5M0Y7XG4kY29sb3ItZm91cjogI0ZGNEQwMDtcbiRjb2xvci1maXZlOiAjRUUyMjAwO1xuXG4kY29sb3ItbGlnaHQtZ3JleTogbGlnaHRncmV5O1xuIl19 */"

/***/ }),

/***/ "../docs/src/lib/core/tabs/tabs.component.ts":
/*!***************************************************!*\
  !*** ../docs/src/lib/core/tabs/tabs.component.ts ***!
  \***************************************************/
/*! exports provided: TabsComponent, TabDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDirective", function() { return TabDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.tabs = [];
    }
    TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'docs-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "../docs/src/lib/core/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.sass */ "../docs/src/lib/core/tabs/tabs.component.sass")]
        })
    ], TabsComponent);
    return TabsComponent;
}());

var TabDirective = /** @class */ (function () {
    function TabDirective(tabs, template) {
        this.tabs = tabs;
        this.template = template;
    }
    TabDirective.prototype.ngOnInit = function () {
        this.tabs.tabs.push({
            label: this.appTab,
            template: this.template
        });
        if (!this.tabs.selectedTemplate) {
            this.tabs.selectedTemplate = this.template;
        }
    };
    TabDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        this.tabs.tabs = this.tabs.tabs.filter(function (t) { return t.template !== _this.template; });
        if (this.tabs.selectedTemplate === this.template && this.tabs.tabs.length > 0) {
            this.tabs.selectedTemplate = this.tabs.tabs[0].template;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TabDirective.prototype, "appTab", void 0);
    TabDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTab]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TabsComponent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], TabDirective);
    return TabDirective;
}());



/***/ }),

/***/ "../docs/src/lib/default-welcome/default-welcome.component.html":
/*!**********************************************************************!*\
  !*** ../docs/src/lib/default-welcome/default-welcome.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Default Welcome Page</h1>\n\n<h2><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> Documentation & Demo</h2>\n<p>This documentation is a combination of automated comment extraction from your code and of component examples.\n</p>\n\n<h2><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> Navigation</h2>\n<p>Use the menu on the left to navigate throught components.</p>\n"

/***/ }),

/***/ "../docs/src/lib/default-welcome/default-welcome.component.sass":
/*!**********************************************************************!*\
  !*** ../docs/src/lib/default-welcome/default-welcome.component.sass ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9wcm9qZWN0cy9kb2NzL3NyYy9saWIvZGVmYXVsdC13ZWxjb21lL2RlZmF1bHQtd2VsY29tZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNDLGVBQWM7RUFDZCxjQUFhLEVBQUciLCJmaWxlIjoicHJvamVjdHMvZG9jcy9zcmMvbGliL2RlZmF1bHQtd2VsY29tZS9kZWZhdWx0LXdlbGNvbWUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTVweDsgfVxuIl19 */"

/***/ }),

/***/ "../docs/src/lib/default-welcome/default-welcome.component.ts":
/*!********************************************************************!*\
  !*** ../docs/src/lib/default-welcome/default-welcome.component.ts ***!
  \********************************************************************/
/*! exports provided: DefaultWelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultWelcomeComponent", function() { return DefaultWelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var DefaultWelcomeComponent = /** @class */ (function () {
    function DefaultWelcomeComponent() {
    }
    DefaultWelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lib-default-welcome',
            template: __webpack_require__(/*! ./default-welcome.component.html */ "../docs/src/lib/default-welcome/default-welcome.component.html"),
            styles: [__webpack_require__(/*! ./default-welcome.component.sass */ "../docs/src/lib/default-welcome/default-welcome.component.sass")]
        })
    ], DefaultWelcomeComponent);
    return DefaultWelcomeComponent;
}());



/***/ }),

/***/ "../docs/src/lib/docs.module.ts":
/*!**************************************!*\
  !*** ../docs/src/lib/docs.module.ts ***!
  \**************************************/
/*! exports provided: DocsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsModule", function() { return DocsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _docs_docs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docs/docs.component */ "../docs/src/lib/docs/docs.component.ts");
/* harmony import */ var _routes_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes.token */ "../docs/src/lib/routes.token.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "../docs/src/lib/core/core.module.ts");
/* harmony import */ var _default_welcome_default_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default-welcome/default-welcome.component */ "../docs/src/lib/default-welcome/default-welcome.component.ts");








var DocsModule = /** @class */ (function () {
    function DocsModule() {
    }
    DocsModule_1 = DocsModule;
    DocsModule.configure = function (configuration) {
        return {
            ngModule: DocsModule_1,
            providers: [
                { provide: _routes_token__WEBPACK_IMPORTED_MODULE_5__["ROUTES_TOKEN"], useValue: configuration.routes },
                Object(_angular_router__WEBPACK_IMPORTED_MODULE_3__["provideRoutes"])(configuration.routes.concat([
                    configuration.welcomeRoute || { path: '', component: _default_welcome_default_welcome_component__WEBPACK_IMPORTED_MODULE_7__["DefaultWelcomeComponent"] }
                ]))
            ]
        };
    };
    var DocsModule_1;
    DocsModule = DocsModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _docs_docs_component__WEBPACK_IMPORTED_MODULE_4__["DocsComponent"],
                _default_welcome_default_welcome_component__WEBPACK_IMPORTED_MODULE_7__["DefaultWelcomeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([]),
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]
            ],
            exports: [
                _docs_docs_component__WEBPACK_IMPORTED_MODULE_4__["DocsComponent"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]
            ]
        })
    ], DocsModule);
    return DocsModule;
}());



/***/ }),

/***/ "../docs/src/lib/docs/docs.component.html":
/*!************************************************!*\
  !*** ../docs/src/lib/docs/docs.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside>\n  <ul>\n    <li class=\"app__logo\"><a routerLink=\"/\"></a></li>\n    <li *ngFor=\"let route of routes\">\n      <a\n        [routerLink]=\"route.path\"\n        routerLinkActive=\"active-link\"\n      >{{route.title}}</a>\n    </li>\n  </ul>\n  <ul class=\"extra-links\">\n    <ng-content></ng-content>\n  </ul>\n</aside>\n\n<main>\n  <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "../docs/src/lib/docs/docs.component.sass":
/*!************************************************!*\
  !*** ../docs/src/lib/docs/docs.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "lib-docs {\n  display: block;\n  position: relative;\n  width: 100vw;\n  height: 100vh; }\n  lib-docs ul li.app__logo {\n    padding: 10px 15px; }\n  lib-docs ul li.app__logo a {\n      width: 100%;\n      display: block;\n      width: auto;\n      position: relative;\n      color: red;\n      background-image: url('https://interfacewerk.github.io/iwerk-angular-ui/assets/logo.svg');\n      background-size: 100%;\n      background-repeat: no-repeat; }\n  lib-docs aside {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 200px;\n    overflow: auto;\n    background: white;\n    color: black;\n    padding: 15px 0px;\n    border-right: 1px solid grey;\n    box-shadow: 2px 0px 2px 1px lightgray; }\n  lib-docs main {\n    position: absolute;\n    top: 0;\n    left: 200px;\n    height: 100%;\n    right: 0;\n    overflow: auto; }\n  lib-docs ul {\n    padding: 0;\n    margin: 0; }\n  lib-docs ul li {\n      list-style: none;\n      width: 100%;\n      padding: 0; }\n  lib-docs ul li a {\n        display: inline-block;\n        width: 100%;\n        height: 40px;\n        line-height: 40px;\n        text-decoration: none;\n        padding: 0px 15px;\n        color: black;\n        font-size: 1.6rem;\n        transition: color 0.2s; }\n  lib-docs ul li a:hover {\n          color: #FF793F; }\n  lib-docs ul li a.active-link {\n          color: #FF4D00; }\n  lib-docs .extra-links li:first-child {\n    margin-top: 30px;\n    border-top: 1px solid lightgrey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9wcm9qZWN0cy9kb2NzL3NyYy9saWIvZG9jcy9kb2NzLmNvbXBvbmVudC5zYXNzIiwiL1VzZXJzL2tldmlubWVyY2t4L2Rldi9pd2Vyay1hbmd1bGFyLXVpL3Byb2plY3RzL2RvY3Mvc3JjL2xpYi9zdHlsZXMvX3ZhcmlhYmxlcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osY0FBYSxFQWtFaUM7RUF0RWhEO0lBbUJJLG1CQUFrQixFQUFHO0VBbkJ6QjtNQVVNLFlBQVc7TUFDWCxlQUFjO01BQ2QsWUFBVztNQUNYLG1CQUFrQjtNQUNsQixXQUFVO01BQ1YsMEZBQXlDO01BQ3pDLHNCQUFxQjtNQUNyQiw2QkFBNEIsRUFBRztFQWpCckM7SUFzQkksbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixRQUFPO0lBQ1AsYUFBWTtJQUNaLGFBcEJpQjtJQXFCakIsZUFBYztJQUNkLGtCQUFpQjtJQUNqQixhQUFZO0lBQ1osa0JBQWlCO0lBQ2pCLDZCQUE0QjtJQUM1QixzQ0FBcUMsRUFBRztFQWhDNUM7SUFtQ0ksbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixZQS9CaUI7SUFnQ2pCLGFBQVk7SUFDWixTQUFRO0lBQ1IsZUFBYyxFQUFHO0VBeENyQjtJQTJDSSxXQUFVO0lBQ1YsVUFBUyxFQXNCd0I7RUFsRXJDO01BK0NNLGlCQUFnQjtNQUNoQixZQUFXO01BQ1gsV0FBVSxFQWlCbUI7RUFsRW5DO1FBb0RRLHNCQUFxQjtRQUNyQixZQUFXO1FBQ1gsYUFBWTtRQUNaLGtCQUFpQjtRQUNqQixzQkFBcUI7UUFDckIsa0JBQWlCO1FBQ2pCLGFBQVk7UUFDWixrQkFBaUI7UUFDakIsdUJBQXNCLEVBTUc7RUFsRWpDO1VBK0RVLGVDL0RXLEVEK0RXO0VBL0RoQztVQWtFVSxlQ2pFVSxFRGlFVztFQWxFL0I7SUFxRUksaUJBQWdCO0lBQ2hCLGdDQ2xFd0IsRURrRWtCIiwiZmlsZSI6InByb2plY3RzL2RvY3Mvc3JjL2xpYi9kb2NzL2RvY3MuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zdHlsZXMvX3ZhcmlhYmxlcyc7XG5cbmxpYi1kb2NzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gICR3aWR0aF9hc2lkZTogMjAwcHg7XG5cbiAgdWwgbGkuYXBwX19sb2dvIHtcbiAgICBhIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2xvZ28uc3ZnXCIpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxuXG4gICAgcGFkZGluZzogMTBweCAxNXB4OyB9XG5cbiAgYXNpZGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6ICR3aWR0aF9hc2lkZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JleTtcbiAgICBib3gtc2hhZG93OiAycHggMHB4IDJweCAxcHggbGlnaHRncmF5OyB9XG5cbiAgbWFpbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAkd2lkdGhfYXNpZGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBhdXRvOyB9XG5cbiAgdWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgbGkge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMDtcblxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci10aHJlZTsgfVxuXG4gICAgICAgICYuYWN0aXZlLWxpbmsge1xuICAgICAgICAgIGNvbG9yOiAkY29sb3ItZm91cjsgfSB9IH0gfVxuXG4gIC5leHRyYS1saW5rcyBsaTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWdyZXk7IH0gfVxuIiwiJGNvbG9yLW9uZTogIzI4QzhGRjtcbiRjb2xvci10d286ICMyOEEyRkY7XG4kY29sb3ItdGhyZWU6ICNGRjc5M0Y7XG4kY29sb3ItZm91cjogI0ZGNEQwMDtcbiRjb2xvci1maXZlOiAjRUUyMjAwO1xuXG4kY29sb3ItbGlnaHQtZ3JleTogbGlnaHRncmV5O1xuIl19 */"

/***/ }),

/***/ "../docs/src/lib/docs/docs.component.ts":
/*!**********************************************!*\
  !*** ../docs/src/lib/docs/docs.component.ts ***!
  \**********************************************/
/*! exports provided: DocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponent", function() { return DocsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routes_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes.token */ "../docs/src/lib/routes.token.ts");



var DocsComponent = /** @class */ (function () {
    function DocsComponent(routes) {
        this.routes = routes;
    }
    DocsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lib-docs',
            template: __webpack_require__(/*! ./docs.component.html */ "../docs/src/lib/docs/docs.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./docs.component.sass */ "../docs/src/lib/docs/docs.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_routes_token__WEBPACK_IMPORTED_MODULE_2__["ROUTES_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], DocsComponent);
    return DocsComponent;
}());



/***/ }),

/***/ "../docs/src/lib/routes.token.ts":
/*!***************************************!*\
  !*** ../docs/src/lib/routes.token.ts ***!
  \***************************************/
/*! exports provided: ROUTES_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES_TOKEN", function() { return ROUTES_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var ROUTES_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ROUTES_TOKEN');


/***/ }),

/***/ "../docs/src/public_api.ts":
/*!*********************************!*\
  !*** ../docs/src/public_api.ts ***!
  \*********************************/
/*! exports provided: DocsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_docs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/docs.module */ "../docs/src/lib/docs.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocsModule", function() { return _lib_docs_module__WEBPACK_IMPORTED_MODULE_0__["DocsModule"]; });

/*
 * Public API Surface of docs
 */



/***/ }),

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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<lib-docs>\n  <li><a href=\"https://github.com/interfacewerk/iwerk-angular-ui\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i> Github</a></li>\n  <li><a href=\"https://interfacewerk.de/jobs\"><fa-icon [icon]=\"faHandshake\"></fa-icon> We are hiring!</a></li>\n  <li><a href=\"https://interfacewerk.de\">interfacewerk.de</a></li>\n</lib-docs>"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%; }\n  :host ul li.app__logo {\n    padding: 10px 15px; }\n  :host ul li.app__logo a {\n      width: 100%;\n      display: block;\n      width: auto;\n      position: relative;\n      color: red;\n      background-image: url('https://interfacewerk.github.io/iwerk-angular-ui/assets/logo.svg');\n      background-size: 100%;\n      background-repeat: no-repeat; }\n  :host aside {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 200px;\n    overflow: auto;\n    background: white;\n    color: black;\n    padding: 15px 0px;\n    border-right: 1px solid grey;\n    box-shadow: 2px 0px 2px 1px lightgray; }\n  :host main {\n    position: absolute;\n    top: 0;\n    left: 200px;\n    height: 100%;\n    right: 0;\n    overflow: auto; }\n  :host ul {\n    padding: 0;\n    margin: 0; }\n  :host ul li {\n      list-style: none;\n      width: 100%;\n      padding: 0; }\n  :host ul li a {\n        display: inline-block;\n        width: 100%;\n        height: 40px;\n        line-height: 40px;\n        text-decoration: none;\n        padding: 0px 15px;\n        color: black;\n        font-size: 1.6rem;\n        transition: color 0.2s; }\n  :host ul li a:hover {\n          color: #FF793F; }\n  :host ul li a.active-link {\n          color: #FF4D00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9wcm9qZWN0cy9kZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwiL1VzZXJzL2tldmlubWVyY2t4L2Rldi9pd2Vyay1hbmd1bGFyLXVpL3Byb2plY3RzL2RlbW8vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUM7RUFDQyxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZLEVBOER5QjtFQWxFdEM7SUFtQkcsbUJBQWtCLEVBQUc7RUFuQnhCO01BVUssWUFBVztNQUNYLGVBQWM7TUFDZCxZQUFXO01BQ1gsbUJBQWtCO01BQ2xCLFdBQVU7TUFDViwwRkFBeUM7TUFDekMsc0JBQXFCO01BQ3JCLDZCQUE0QixFQUFHO0VBakJwQztJQXNCRyxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFFBQU87SUFDUCxhQUFZO0lBQ1osYUFwQmlCO0lBcUJqQixlQUFjO0lBQ2Qsa0JBQWlCO0lBQ2pCLGFBQVk7SUFDWixrQkFBaUI7SUFDakIsNkJBQTRCO0lBQzVCLHNDQUFxQyxFQUFHO0VBaEMzQztJQW1DRyxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFlBL0JpQjtJQWdDakIsYUFBWTtJQUNaLFNBQVE7SUFDUixlQUFjLEVBQUc7RUF4Q3BCO0lBMkNHLFdBQVU7SUFDVixVQUFTLEVBc0J3QjtFQWxFcEM7TUErQ0ssaUJBQWdCO01BQ2hCLFlBQVc7TUFDWCxXQUFVLEVBaUJtQjtFQWxFbEM7UUFvRE8sc0JBQXFCO1FBQ3JCLFlBQVc7UUFDWCxhQUFZO1FBQ1osa0JBQWlCO1FBQ2pCLHNCQUFxQjtRQUNyQixrQkFBaUI7UUFDakIsYUFBWTtRQUNaLGtCQUFpQjtRQUNqQix1QkFBc0IsRUFNRztFQWxFaEM7VUErRFMsZUMvRFcsRUQrRFc7RUEvRC9CO1VBa0VTLGVDakVVLEVEaUVXIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zdHlsZXMvX3ZhcmlhYmxlcyc7XG5cbiA6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgJHdpZHRoX2FzaWRlOiAyMDBweDtcblxuICB1bCBsaS5hcHBfX2xvZ28ge1xuICAgIGEge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgY29sb3I6IHJlZDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbG9nby5zdmdcIik7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyB9XG5cbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7IH1cblxuICBhc2lkZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogJHdpZHRoX2FzaWRlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5O1xuICAgIGJveC1zaGFkb3c6IDJweCAwcHggMnB4IDFweCBsaWdodGdyYXk7IH1cblxuICBtYWluIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6ICR3aWR0aF9hc2lkZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGF1dG87IH1cblxuICB1bCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG5cbiAgICBsaSB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBhIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLXRocmVlOyB9XG5cbiAgICAgICAgJi5hY3RpdmUtbGluayB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvci1mb3VyOyB9IH0gfSB9IH1cbiIsIiRjb2xvci1vbmU6ICMyOEM4RkY7XG4kY29sb3ItdHdvOiAjMjhBMkZGO1xuJGNvbG9yLXRocmVlOiAjRkY3OTNGO1xuJGNvbG9yLWZvdXI6ICNGRjREMDA7XG4kY29sb3ItZml2ZTogI0VFMjIwMDtcblxuJGNvbG9yLWxpZ2h0LWdyZXk6IGxpZ2h0Z3JleTtcbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.faHandshake = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHandshake"];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var projects_docs_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/docs/src/public_api */ "../docs/src/public_api.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _popover_popover_demo_popover_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popover/popover-demo/popover-demo.component */ "./src/app/popover/popover-demo/popover-demo.component.ts");
/* harmony import */ var _popover_popover_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popover/popover.module */ "./src/app/popover/popover.module.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _tooltip_tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tooltip/tooltip-demo/tooltip-demo.component */ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.ts");
/* harmony import */ var _dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog/dialog/dialog.component */ "./src/app/dialog/dialog/dialog.component.ts");
/* harmony import */ var _navigation_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/navigation/navigation.component */ "./src/app/navigation/navigation/navigation.component.ts");
/* harmony import */ var _ellipsis_ellipsis_ellipsis_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ellipsis/ellipsis/ellipsis.component */ "./src/app/ellipsis/ellipsis/ellipsis.component.ts");
/* harmony import */ var _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tooltip/tooltip.module */ "./src/app/tooltip/tooltip.module.ts");
/* harmony import */ var _ellipsis_ellipsis_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ellipsis/ellipsis.module */ "./src/app/ellipsis/ellipsis.module.ts");
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialog/dialog.module */ "./src/app/dialog/dialog.module.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _popover_popover_module__WEBPACK_IMPORTED_MODULE_8__["PopoverDemoModule"],
                _tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_14__["TooltipDemoModule"],
                _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_16__["NavigationDemoModule"],
                _ellipsis_ellipsis_module__WEBPACK_IMPORTED_MODULE_15__["EllipsisDemoModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_17__["DialogDemoModule"],
                projects_docs_src_public_api__WEBPACK_IMPORTED_MODULE_5__["DocsModule"].configure({
                    welcomeRoute: { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"] },
                    routes: [
                        { title: 'Popover', path: 'popover', component: _popover_popover_demo_popover_demo_component__WEBPACK_IMPORTED_MODULE_7__["PopoverDemoComponent"] },
                        { title: 'Tooltip', path: 'tooltip', component: _tooltip_tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_10__["TooltipDemoComponent"] },
                        { title: 'Dialog', path: 'dialog', component: _dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"] },
                        { title: 'Navigation', path: 'navigation', component: _navigation_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationdDemoComponent"] },
                        { title: 'Ellipsis', path: 'ellipsis', component: _ellipsis_ellipsis_ellipsis_component__WEBPACK_IMPORTED_MODULE_13__["EllipsisDemoComponent"] }
                    ]
                })
            ],
            // entryComponents: [WelcomeComponent],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.module.ts":
/*!*****************************************!*\
  !*** ./src/app/dialog/dialog.module.ts ***!
  \*****************************************/
/*! exports provided: DialogDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDemoModule", function() { return DialogDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_docs_src_lib_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/docs/src/lib/core/core.module */ "../docs/src/lib/core/core.module.ts");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog/dialog.component.ts");
/* harmony import */ var _example1_dialog_example1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example1/dialog-example1.component */ "./src/app/dialog/example1/dialog-example1.component.ts");
/* harmony import */ var _example2_dialog_example2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example2/dialog-example2.component */ "./src/app/dialog/example2/dialog-example2.component.ts");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-dialog/my-dialog.component */ "./src/app/dialog/my-dialog/my-dialog.component.ts");









var DialogDemoModule = /** @class */ (function () {
    function DialogDemoModule() {
    }
    DialogDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_4__["DialogModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_4__["PopoverModule"],
                projects_docs_src_lib_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
            ],
            declarations: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_8__["MyDialogComponent"], _example1_dialog_example1_component__WEBPACK_IMPORTED_MODULE_6__["DialogExample1Component"], _example2_dialog_example2_component__WEBPACK_IMPORTED_MODULE_7__["DialogExample2Component"]],
            entryComponents: [_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_8__["MyDialogComponent"]]
        })
    ], DialogDemoModule);
    return DialogDemoModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog/dialog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/dialog/dialog/dialog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Dialog'\"\n  [componentId]=\"'DialogDirective'\"\n  [componentType]=\"'directives'\"\n>\n  <ng-template docsComponentExample=\"From the template\">\n    <app-dialog-example1></app-dialog-example1>\n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"dialog-example1.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n  <ng-template docsComponentExample=\"Using the dialog service\">\n    <app-dialog-example2></app-dialog-example2>\n    <docs-tabs>\n      <docs-code *docsTab=\"'TS'\" path=\"dialog-example2.component.ts\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/dialog/dialog/dialog.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/dialog/dialog/dialog.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvZGlhbG9nL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/dialog/dialog/dialog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/dialog/dialog/dialog.component.ts ***!
  \***************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../my-dialog/my-dialog.component */ "./src/app/dialog/my-dialog/my-dialog.component.ts");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");




var example1 = "<button (click)=\"myDialog1.open()\">Open a dialog</button>\n\n<ng-template iwDialog #myDialog1=\"iw-dialog\" [escToClose]=\"true\" [clickToClose]=\"true\">\n  <h1>Here is my dialog</h1>\n\n  <ul>\n    <li>Press ESC to close it</li>\n    <li>You can also click outside</li>\n    <li>or <a (click)=\"myDialog1.close()\">here</a></li>\n  </ul>\n</ng-template>";
var BASIC_STYLE = "iw-dialog-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  opacity: 0;\n  background: rgba(192, 192, 192, 0.67);\n  transition: opacity 0.5s;\n\n  .dialog-container__content {\n    position: absolute;\n    top: 100px;\n    left: 20%;\n    width: 60%;\n    background: white;\n    max-height: calc(100% - 200px);\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    transition: transform 0.5s;\n    transform: translateY(-100%);\n    box-shadow: 2px 2px 4px 1px gray;\n    padding: 15px;\n  }\n\n  &.iw-dialog-container--visible {\n    opacity: 1;\n    .dialog-container__content {\n      transform: translateY(0);\n    }\n  }\n}\n";
var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialog) {
        this.dialog = dialog;
        this.styleCode = BASIC_STYLE;
        this.example1 = example1;
    }
    DialogComponent.prototype.ngOnDestroy = function () {
        if (this.__dialogInstance) {
            this.__dialogInstance.close();
            this.__dialogInstance = undefined;
        }
    };
    DialogComponent.prototype.openDialog = function () {
        this.__dialogInstance = this.dialog.open(_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_2__["MyDialogComponent"]);
    };
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.sass */ "./src/app/dialog/dialog/dialog.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_public_api__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/example1/dialog-example1.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dialog/example1/dialog-example1.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"myDialog1.open()\">Open a dialog</button>\n\n<ng-template iwDialog #myDialog1=\"iw-dialog\" [escToClose]=\"true\" [clickToClose]=\"true\">\n  <h1>Here is my dialog</h1>\n\n  <ul>\n    <li>Press ESC to close it</li>\n    <li>You can also click outside</li>\n    <li>or <a (click)=\"myDialog1.close()\">here</a></li>\n  </ul>\n</ng-template>"

/***/ }),

/***/ "./src/app/dialog/example1/dialog-example1.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialog/example1/dialog-example1.component.ts ***!
  \**************************************************************/
/*! exports provided: DialogExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogExample1Component", function() { return DialogExample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var DialogExample1Component = /** @class */ (function () {
    function DialogExample1Component() {
    }
    DialogExample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-example1',
            template: __webpack_require__(/*! ./dialog-example1.component.html */ "./src/app/dialog/example1/dialog-example1.component.html")
        })
    ], DialogExample1Component);
    return DialogExample1Component;
}());



/***/ }),

/***/ "./src/app/dialog/example2/dialog-example2.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dialog/example2/dialog-example2.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"open()\">Open a dialog</button>\n"

/***/ }),

/***/ "./src/app/dialog/example2/dialog-example2.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialog/example2/dialog-example2.component.ts ***!
  \**************************************************************/
/*! exports provided: DialogExample2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogExample2Component", function() { return DialogExample2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-dialog/my-dialog.component */ "./src/app/dialog/my-dialog/my-dialog.component.ts");




var DialogExample2Component = /** @class */ (function () {
    function DialogExample2Component(dialog) {
        this.dialog = dialog;
    }
    DialogExample2Component.prototype.ngOnDestroy = function () {
        if (this.dialogInstance) {
            this.dialogInstance.close();
            this.dialogInstance = undefined;
        }
    };
    DialogExample2Component.prototype.open = function () {
        this.dialogInstance = this.dialog.open(_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MyDialogComponent"]);
    };
    DialogExample2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-example2',
            template: __webpack_require__(/*! ./dialog-example2.component.html */ "./src/app/dialog/example2/dialog-example2.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_public_api__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], DialogExample2Component);
    return DialogExample2Component;
}());



/***/ }),

/***/ "./src/app/dialog/my-dialog/my-dialog.component.html":
/*!***********************************************************!*\
  !*** ./src/app/dialog/my-dialog/my-dialog.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hello Dialog!</h1>\n\n<h2>To close this dialog, inject the DialogService in your component:</h2>\n\n<docs-code path=\"my-dialog.component.ts\"></docs-code>\n\n<button (click)=\"close()\">\n  Close\n  <ng-template iwTooltip>click to close</ng-template>\n</button>\n"

/***/ }),

/***/ "./src/app/dialog/my-dialog/my-dialog.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/dialog/my-dialog/my-dialog.component.ts ***!
  \*********************************************************/
/*! exports provided: MyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDialogComponent", function() { return MyDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");



var MyDialogComponent = /** @class */ (function () {
    function MyDialogComponent(dialog) {
        this.dialog = dialog;
    }
    MyDialogComponent.prototype.close = function () {
        this.dialog.close();
    };
    MyDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-dialog',
            template: __webpack_require__(/*! ./my-dialog.component.html */ "./src/app/dialog/my-dialog/my-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_public_api__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], MyDialogComponent);
    return MyDialogComponent;
}());



/***/ }),

/***/ "./src/app/ellipsis/ellipsis-example1/ellipsis-example1.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/ellipsis/ellipsis-example1/ellipsis-example1.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"ellipsis\" [iwMultilineEllipsis]=\"text\" style=\"max-height: 100px; max-width: 200px\"></p>"

/***/ }),

/***/ "./src/app/ellipsis/ellipsis-example1/ellipsis-example1.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ellipsis/ellipsis-example1/ellipsis-example1.component.ts ***!
  \***************************************************************************/
/*! exports provided: EllipsisExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisExample1Component", function() { return EllipsisExample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var EllipsisExample1Component = /** @class */ (function () {
    function EllipsisExample1Component() {
        // tslint:disable-next-line
        this.text = 'Pariatur tempor anim culpa enim consequat. Sit commodo irure labore pariatur dolor consequat fugiat nisi pariatur. Magna in in dolor aliqua veniam duis nulla pariatur ut. Deserunt elit aute do ut ad sit irure proident dolor. Amet excepteur elit consectetur sit ipsum enim fugiat cupidatat est aliqua.';
    }
    EllipsisExample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ellipsis-demo-example1',
            template: __webpack_require__(/*! ./ellipsis-example1.component.html */ "./src/app/ellipsis/ellipsis-example1/ellipsis-example1.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        })
    ], EllipsisExample1Component);
    return EllipsisExample1Component;
}());



/***/ }),

/***/ "./src/app/ellipsis/ellipsis.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ellipsis/ellipsis.module.ts ***!
  \*********************************************/
/*! exports provided: EllipsisDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisDemoModule", function() { return EllipsisDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var projects_docs_src_lib_core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/docs/src/lib/core/core.module */ "../docs/src/lib/core/core.module.ts");
/* harmony import */ var src_app_ui_multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ui/multiline-ellipsis/multiline-ellipsis.module */ "../../src/app/ui/multiline-ellipsis/multiline-ellipsis.module.ts");
/* harmony import */ var _ellipsis_example1_ellipsis_example1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ellipsis-example1/ellipsis-example1.component */ "./src/app/ellipsis/ellipsis-example1/ellipsis-example1.component.ts");
/* harmony import */ var _ellipsis_ellipsis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ellipsis/ellipsis.component */ "./src/app/ellipsis/ellipsis/ellipsis.component.ts");








var EllipsisDemoModule = /** @class */ (function () {
    function EllipsisDemoModule() {
    }
    EllipsisDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_ui_multiline_ellipsis_multiline_ellipsis_module__WEBPACK_IMPORTED_MODULE_5__["MultilineEllipsisModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                projects_docs_src_lib_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
            ],
            declarations: [
                _ellipsis_ellipsis_component__WEBPACK_IMPORTED_MODULE_7__["EllipsisDemoComponent"],
                _ellipsis_example1_ellipsis_example1_component__WEBPACK_IMPORTED_MODULE_6__["EllipsisExample1Component"],
            ]
        })
    ], EllipsisDemoModule);
    return EllipsisDemoModule;
}());



/***/ }),

/***/ "./src/app/ellipsis/ellipsis/ellipsis.component.html":
/*!***********************************************************!*\
  !*** ./src/app/ellipsis/ellipsis/ellipsis.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Multi-line Ellipsis'\"\n  [componentId]=\"'MultilineEllipsisDirective'\"\n  [componentType]=\"'directives'\"\n>\n  <ng-template docsComponentExample=\"Simple example\">\n    <app-ellipsis-demo-example1></app-ellipsis-demo-example1>\n    <docs-code path=\"ellipsis-example1.component.html\"></docs-code>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/ellipsis/ellipsis/ellipsis.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/ellipsis/ellipsis/ellipsis.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.ellipsis {\n  padding: 3px;\n  border: 1px solid grey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9wcm9qZWN0cy9kZW1vL3NyYy9hcHAvZWxsaXBzaXMvZWxsaXBzaXMvZWxsaXBzaXMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZO0VBQ1osdUJBQXNCLEVBQUciLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL2VsbGlwc2lzL2VsbGlwc2lzL2VsbGlwc2lzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsicC5lbGxpcHNpcyB7XG4gIHBhZGRpbmc6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/ellipsis/ellipsis/ellipsis.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ellipsis/ellipsis/ellipsis.component.ts ***!
  \*********************************************************/
/*! exports provided: EllipsisDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisDemoComponent", function() { return EllipsisDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var EllipsisDemoComponent = /** @class */ (function () {
    function EllipsisDemoComponent() {
    }
    EllipsisDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./ellipsis.component.html */ "./src/app/ellipsis/ellipsis/ellipsis.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./ellipsis.component.sass */ "./src/app/ellipsis/ellipsis/ellipsis.component.sass")]
        })
    ], EllipsisDemoComponent);
    return EllipsisDemoComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation-example1/navigation-example1-nested2.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/navigation/navigation-example1/navigation-example1-nested2.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: Example2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example2Component", function() { return Example2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _navigation_example1_nested3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation-example1-nested3.component */ "./src/app/navigation/navigation-example1/navigation-example1-nested3.component.ts");




var Example2Component = /** @class */ (function () {
    function Example2Component(data, navCtrl) {
        this.data = data;
        this.navCtrl = navCtrl;
    }
    Example2Component.prototype.present = function () {
        this.navCtrl.present(_navigation_example1_nested3_component__WEBPACK_IMPORTED_MODULE_3__["Example3Component"]);
    };
    Example2Component.prototype.dismiss = function () {
        this.navCtrl.dismiss(1234);
    };
    Example2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "<h5>{{data.title}}</h5>\n  <button (click)=\"present()\">Present one more view!</button>\n  <button (click)=\"dismiss()\">Dismiss with value 1234</button>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_public_api__WEBPACK_IMPORTED_MODULE_2__["NavigationData"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, src_public_api__WEBPACK_IMPORTED_MODULE_2__["NavigationController"]])
    ], Example2Component);
    return Example2Component;
}());



/***/ }),

/***/ "./src/app/navigation/navigation-example1/navigation-example1-nested3.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/navigation/navigation-example1/navigation-example1-nested3.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: Example3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example3Component", function() { return Example3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");



var Example3Component = /** @class */ (function () {
    function Example3Component(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Example3Component.prototype.dismiss = function () {
        this.navCtrl.dismiss();
    };
    Example3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "<h5>One level deeper!</h5><button (click)=\"dismiss()\">Dismiss</button>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_public_api__WEBPACK_IMPORTED_MODULE_2__["NavigationController"]])
    ], Example3Component);
    return Example3Component;
}());



/***/ }),

/***/ "./src/app/navigation/navigation-example1/navigation-example1.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/navigation/navigation-example1/navigation-example1.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Example1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example1Component", function() { return Example1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _navigation_example1_nested2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation-example1-nested2.component */ "./src/app/navigation/navigation-example1/navigation-example1-nested2.component.ts");




var Example1Component = /** @class */ (function () {
    function Example1Component() {
        this.returnedByExample2 = -1;
    }
    Example1Component.prototype.present = function () {
        var _this = this;
        this.nav.present(_navigation_example1_nested2_component__WEBPACK_IMPORTED_MODULE_3__["Example2Component"], { title: 'Example 2 title defined by us!' })
            .then(function (v) { return _this.returnedByExample2 = v; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_public_api__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"])
    ], Example1Component.prototype, "nav", void 0);
    Example1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation-example1',
            template: "<p>Add the <code class=\"inline-code\">iw-navigation</code> element into your template.</p>\n  <div class=\"nav-container\">\n    <iw-navigation #nav>\n      <h3>Here is our first view</h3>\n      <button (click)=\"present()\">Present a new view</button>\n    </iw-navigation>\n  </div>",
            styles: [".nav-container {\n      padding: 3px 10px;\n      box-shadow: 1px 1px 1px 1px black;\n      height: 300px;\n      width: 300px;\n    }"]
        })
    ], Example1Component);
    return Example1Component;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/navigation/navigation.module.ts ***!
  \*************************************************/
/*! exports provided: NavigationDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationDemoModule", function() { return NavigationDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_docs_src_lib_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/docs/src/lib/core/core.module */ "../docs/src/lib/core/core.module.ts");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _navigation_example1_navigation_example1_nested2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation-example1/navigation-example1-nested2.component */ "./src/app/navigation/navigation-example1/navigation-example1-nested2.component.ts");
/* harmony import */ var _navigation_example1_navigation_example1_nested3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation-example1/navigation-example1-nested3.component */ "./src/app/navigation/navigation-example1/navigation-example1-nested3.component.ts");
/* harmony import */ var _navigation_example1_navigation_example1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation-example1/navigation-example1.component */ "./src/app/navigation/navigation-example1/navigation-example1.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation/navigation.component.ts");









var NavigationDemoModule = /** @class */ (function () {
    function NavigationDemoModule() {
    }
    NavigationDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
                projects_docs_src_lib_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
            ],
            declarations: [
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationdDemoComponent"],
                _navigation_example1_navigation_example1_component__WEBPACK_IMPORTED_MODULE_7__["Example1Component"], _navigation_example1_navigation_example1_nested2_component__WEBPACK_IMPORTED_MODULE_5__["Example2Component"], _navigation_example1_navigation_example1_nested3_component__WEBPACK_IMPORTED_MODULE_6__["Example3Component"]
            ],
            entryComponents: [
                _navigation_example1_navigation_example1_component__WEBPACK_IMPORTED_MODULE_7__["Example1Component"], _navigation_example1_navigation_example1_nested2_component__WEBPACK_IMPORTED_MODULE_5__["Example2Component"], _navigation_example1_navigation_example1_nested3_component__WEBPACK_IMPORTED_MODULE_6__["Example3Component"]
            ]
        })
    ], NavigationDemoModule);
    return NavigationDemoModule;
}());



/***/ }),

/***/ "./src/app/navigation/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/navigation/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Navigation'\"\n  [componentId]=\"'NavigationComponent'\"\n  [componentType]=\"'components'\"\n>\n  <ng-template docsComponentExample=\"Example\">\n    <app-navigation-example1></app-navigation-example1>\n    <docs-tabs>\n      <docs-code *docsTab=\"'Main TS'\" path=\"navigation-example1.component.ts\"></docs-code>\n      <docs-code *docsTab=\"'Nested TS #1'\" path=\"navigation-example1-nested2.component.ts\"></docs-code>\n      <docs-code *docsTab=\"'Nested TS #2'\" path=\"navigation-example1-nested3.component.ts\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/navigation/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/navigation/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/navigation/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/navigation/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationdDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationdDemoComponent", function() { return NavigationdDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var NavigationdDemoComponent = /** @class */ (function () {
    function NavigationdDemoComponent() {
    }
    NavigationdDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation/navigation.component.scss")]
        })
    ], NavigationdDemoComponent);
    return NavigationdDemoComponent;
}());



/***/ }),

/***/ "./src/app/popover/custom-popover-demo/custom-popover-demo.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/popover/custom-popover-demo/custom-popover-demo.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-popover--header\">\n  <div class=\"custom-popover--header-content\">\n    <ng-content select=\"[appCustomPopoverHeader]\"></ng-content>\n  </div>\n  <a class=\"custom-popover--close-button\" (click)=\"_close()\"><fa-icon [icon]=\"faTimes\"></fa-icon></a>\n</div>\n\n<div class=\"custom-popover--content\">\n  <ng-content select=\"[appCustomPopoverContent]\"></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/popover/custom-popover-demo/custom-popover-demo.component.sass":
/*!********************************************************************************!*\
  !*** ./src/app/popover/custom-popover-demo/custom-popover-demo.component.sass ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  max-height: 300px;\n  width: 200px;\n  border: 1px solid grey;\n  border-radius: 3px;\n  box-shadow: 2px 2px 5px 2px #7b7b7b;\n  overflow: hidden; }\n  :host .custom-popover--header {\n    padding: 0 30px 0 5px;\n    border-bottom: 1px solid grey;\n    background-color: lightgrey;\n    position: relative;\n    line-height: 30px;\n    height: 30px; }\n  :host .custom-popover--content {\n    padding: 15px 5px;\n    background: white; }\n  :host .custom-popover--close-button {\n    position: absolute;\n    right: 5px;\n    top: 0;\n    line-height: 30px;\n    text-decoration: none;\n    cursor: pointer; }\n  :host .custom-popover--close-button:hover {\n      color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9wcm9qZWN0cy9kZW1vL3NyYy9hcHAvcG9wb3Zlci9jdXN0b20tcG9wb3Zlci1kZW1vL2N1c3RvbS1wb3BvdmVyLWRlbW8uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQyxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLG9DQUFtQztFQUNuQyxpQkFBZ0IsRUF1Qk87RUE5QnhCO0lBVUcsc0JBQXFCO0lBQ3JCLDhCQUE2QjtJQUM3Qiw0QkFBMkI7SUFDM0IsbUJBQWtCO0lBQ2xCLGtCQUFpQjtJQUNqQixhQUFZLEVBQUc7RUFmbEI7SUFrQkcsa0JBQWlCO0lBQ2pCLGtCQUFpQixFQUFHO0VBbkJ2QjtJQXNCRyxtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLE9BQU07SUFDTixrQkFBaUI7SUFDakIsc0JBQXFCO0lBQ3JCLGdCQUFlLEVBR0k7RUE5QnRCO01BOEJLLGFBQVksRUFBRyIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvcG9wb3Zlci9jdXN0b20tcG9wb3Zlci1kZW1vL2N1c3RvbS1wb3BvdmVyLWRlbW8uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggIzdiN2I3YjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuY3VzdG9tLXBvcG92ZXItLWhlYWRlciB7XG4gICAgcGFkZGluZzogMCAzMHB4IDAgNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4OyB9XG5cbiAgLmN1c3RvbS1wb3BvdmVyLS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgfVxuXG4gIC5jdXN0b20tcG9wb3Zlci0tY2xvc2UtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB0b3A6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IGJsYWNrOyB9IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/popover/custom-popover-demo/custom-popover-demo.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/popover/custom-popover-demo/custom-popover-demo.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomPopoverHeaderDirective, CustomPopoverContentDirective, CustomPopoverDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPopoverHeaderDirective", function() { return CustomPopoverHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPopoverContentDirective", function() { return CustomPopoverContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPopoverDemoComponent", function() { return CustomPopoverDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var CustomPopoverHeaderDirective = /** @class */ (function () {
    function CustomPopoverHeaderDirective() {
    }
    CustomPopoverHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCustomPopoverHeader]'
        })
    ], CustomPopoverHeaderDirective);
    return CustomPopoverHeaderDirective;
}());

var CustomPopoverContentDirective = /** @class */ (function () {
    function CustomPopoverContentDirective() {
    }
    CustomPopoverContentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCustomPopoverContent]'
        })
    ], CustomPopoverContentDirective);
    return CustomPopoverContentDirective;
}());

var CustomPopoverDemoComponent = /** @class */ (function () {
    function CustomPopoverDemoComponent() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
    }
    CustomPopoverDemoComponent.prototype.ngOnInit = function () {
    };
    CustomPopoverDemoComponent.prototype._close = function () {
        this.close.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomPopoverDemoComponent.prototype, "close", void 0);
    CustomPopoverDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-popover-demo',
            template: __webpack_require__(/*! ./custom-popover-demo.component.html */ "./src/app/popover/custom-popover-demo/custom-popover-demo.component.html"),
            styles: [__webpack_require__(/*! ./custom-popover-demo.component.sass */ "./src/app/popover/custom-popover-demo/custom-popover-demo.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomPopoverDemoComponent);
    return CustomPopoverDemoComponent;
}());



/***/ }),

/***/ "./src/app/popover/popover-demo/popover-demo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/popover/popover-demo/popover-demo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Popover'\"\n  [componentId]=\"'PopoverDirective'\"\n  [componentType]=\"'directives'\"\n>\n  <ng-template docsComponentExample=\"From the template\">\n    <p>Add a template with the <code class=\"inline-code\">iwPopover</code> directive.</p>\n    <app-popover-example1></app-popover-example1>\n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"popover-example1.component.html\"></docs-code>\n      <docs-code *docsTab=\"'TS'\" path=\"popover-example1.component.ts\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n  <ng-template docsComponentExample=\"From the service\">\n    <p>\n      You can embed any of your components inside a popover. This can be very helpful to keep your templates light as well as refactoring.\n      To do so, declare the component class you want to embed as an entry component of your module.\n    </p>\n    <app-popover-example2></app-popover-example2>\n    \n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"popover-example2.component.html\"></docs-code>\n      <docs-code *docsTab=\"'TS'\" path=\"popover-example2.component.ts\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/popover/popover-demo/popover-demo.component.sass":
/*!******************************************************************!*\
  !*** ./src/app/popover/popover-demo/popover-demo.component.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host table {\n  width: 300px;\n  border-collapse: collapse; }\n  :host table th, :host table td {\n    text-align: left;\n    width: 50%;\n    padding: 5px 5px 5px 5px; }\n  :host table td {\n    line-height: 20px; }\n  :host table thead {\n    border-bottom: 1px solid lightgrey; }\n  :host .cell-right-icon {\n  position: relative;\n  padding-right: 30px; }\n  :host .cell-right-icon:hover button {\n    opacity: 1; }\n  :host .cell-right-icon button {\n    opacity: 0.2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9wcm9qZWN0cy9kZW1vL3NyYy9hcHAvcG9wb3Zlci9wb3BvdmVyLWRlbW8vcG9wb3Zlci1kZW1vLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBRUcsYUFBWTtFQWFaLDBCQUF5QixFQUFHO0VBZi9CO0lBS0ssaUJBQWdCO0lBQ2hCLFdBQVU7SUFDVix5QkFBd0IsRUFBRztFQVBoQztJQVVLLGtCQUFpQixFQUFHO0VBVnpCO0lBYUssbUNBQWtDLEVBQUc7RUFiMUM7RUFrQkcsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQU9BO0VBMUJ0QjtJQXVCTyxXQUFVLEVBQUc7RUF2QnBCO0lBMEJLLGFBQVksRUFBRyIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvcG9wb3Zlci9wb3BvdmVyLWRlbW8vcG9wb3Zlci1kZW1vLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiIDpob3N0IHtcbiAgdGFibGUge1xuICAgIHdpZHRoOiAzMDBweDtcblxuICAgIHRoLCB0ZCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDsgfVxuXG4gICAgdGQge1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7IH1cblxuICAgIHRoZWFkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7IH1cblxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuICAuY2VsbC1yaWdodC1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgb3BhY2l0eTogMTsgfSB9XG5cbiAgICBidXR0b24ge1xuICAgICAgb3BhY2l0eTogMC4yOyB9IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/popover/popover-demo/popover-demo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/popover/popover-demo/popover-demo.component.ts ***!
  \****************************************************************/
/*! exports provided: PopoverDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDemoComponent", function() { return PopoverDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PopoverDemoComponent = /** @class */ (function () {
    function PopoverDemoComponent() {
        this.persons = [];
        this.firsts = ['Mark', 'Edy', 'Jack', 'John', 'Mike'];
        this.lasts = ['Johnson', 'Willis', 'Chapman', 'Bob', 'Last'];
        for (var i = 0; i < 10; i++) {
            this.persons.push({
                first: this.firsts[Math.floor(Math.random() * this.firsts.length)],
                last: this.lasts[Math.floor(Math.random() * this.lasts.length)],
            });
        }
    }
    PopoverDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popover-demo',
            template: __webpack_require__(/*! ./popover-demo.component.html */ "./src/app/popover/popover-demo/popover-demo.component.html"),
            styles: [__webpack_require__(/*! ./popover-demo.component.sass */ "./src/app/popover/popover-demo/popover-demo.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PopoverDemoComponent);
    return PopoverDemoComponent;
}());



/***/ }),

/***/ "./src/app/popover/popover-example1/popover-example1.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/popover/popover-example1/popover-example1.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"isOpen = true\">\n  Click to open!\n\n  <ng-template iwPopover\n    popoverClass=\"demo-popover\"\n    [isOpen]=\"isOpen\"\n    (shouldClose)=\"isOpen = false\">\n  \n    <div class=\"simple-popover\">\n      Helloooo\n    </div>\n  \n  </ng-template>\n</button>\n\n"

/***/ }),

/***/ "./src/app/popover/popover-example1/popover-example1.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/popover/popover-example1/popover-example1.component.ts ***!
  \************************************************************************/
/*! exports provided: PopoverExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverExample1Component", function() { return PopoverExample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PopoverExample1Component = /** @class */ (function () {
    function PopoverExample1Component() {
        this.isOpen = false;
    }
    PopoverExample1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popover-example1',
            template: __webpack_require__(/*! ./popover-example1.component.html */ "./src/app/popover/popover-example1/popover-example1.component.html")
        })
    ], PopoverExample1Component);
    return PopoverExample1Component;
}());



/***/ }),

/***/ "./src/app/popover/popover-example2/popover-example2.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/popover/popover-example2/popover-example2.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead><tr>\n    <th>First Name</th>\n    <th>Last Name</th>\n  </tr></thead>\n  <tr *ngFor=\"let person of persons\">\n    <td class=\"cell-right-icon\">\n      {{person.first}}\n      <button (click)=\"openEditFirstNamePopover(person, $event)\">&#x270E;</button>\n    </td>\n    <td class=\"cell-right-icon\">\n      {{person.last}}\n      <button (click)=\"openEditLastNamePopover(person, $event)\">&#x270E;</button>          \n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/popover/popover-example2/popover-example2.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/popover/popover-example2/popover-example2.component.ts ***!
  \************************************************************************/
/*! exports provided: PopoverExample2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverExample2Component", function() { return PopoverExample2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _property_edit_popover_property_edit_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-edit-popover/property-edit-popover.component */ "./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.ts");




var PopoverExample2Component = /** @class */ (function () {
    function PopoverExample2Component(popoverService) {
        this.popoverService = popoverService;
        this.persons = [];
        this.firsts = ['Mark', 'Edy', 'Jack', 'John', 'Mike'];
        this.lasts = ['Johnson', 'Willis', 'Chapman', 'Bob', 'Last'];
        for (var i = 0; i < 5; i++) {
            this.persons.push({
                first: this.firsts[Math.floor(Math.random() * this.firsts.length)],
                last: this.lasts[Math.floor(Math.random() * this.lasts.length)],
            });
        }
    }
    PopoverExample2Component.prototype.openEditFirstNamePopover = function (person, $event) {
        return this.openEditPropertyPopover(person, 'First Name', 'first', $event);
    };
    PopoverExample2Component.prototype.openEditLastNamePopover = function (person, $event) {
        return this.openEditPropertyPopover(person, 'Last Name', 'last', $event);
    };
    PopoverExample2Component.prototype.openEditPropertyPopover = function (person, propertyName, p, $event) {
        this.popoverService.open(_property_edit_popover_property_edit_popover_component__WEBPACK_IMPORTED_MODULE_3__["PropertyEditPopoverComponent"], $event.target, {
            popoverClass: 'demo-popover',
            escToClose: true
        }, function (component) {
            component.value = person[p];
            component.propertyName = propertyName;
            component.onValueChange.subscribe(function (v) {
                person[p] = v;
            });
        });
    };
    PopoverExample2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popover-example2',
            template: __webpack_require__(/*! ./popover-example2.component.html */ "./src/app/popover/popover-example2/popover-example2.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_public_api__WEBPACK_IMPORTED_MODULE_2__["PopoverService"]])
    ], PopoverExample2Component);
    return PopoverExample2Component;
}());



/***/ }),

/***/ "./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-custom-popover-demo (close)=\"close()\">\n  <ng-container appCustomPopoverHeader>Edit</ng-container>\n  <ng-container appCustomPopoverContent>    \n    {{propertyName}}: <input autofocus autocomplete=\"false\" [ngModel]=\"value\" (ngModelChange)=\"onValueChange.emit($event)\" type=\"text\"/>\n  </ng-container>\n</app-custom-popover-demo>"

/***/ }),

/***/ "./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PropertyEditPopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyEditPopoverComponent", function() { return PropertyEditPopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");



var PropertyEditPopoverComponent = /** @class */ (function () {
    function PropertyEditPopoverComponent(popoverInstance) {
        this.popoverInstance = popoverInstance;
        this.onValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PropertyEditPopoverComponent.prototype.close = function () {
        this.popoverInstance.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PropertyEditPopoverComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PropertyEditPopoverComponent.prototype, "propertyName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PropertyEditPopoverComponent.prototype, "onValueChange", void 0);
    PropertyEditPopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property-edit-popover',
            template: __webpack_require__(/*! ./property-edit-popover.component.html */ "./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_public_api__WEBPACK_IMPORTED_MODULE_2__["Popover"]])
    ], PropertyEditPopoverComponent);
    return PropertyEditPopoverComponent;
}());



/***/ }),

/***/ "./src/app/popover/popover.module.ts":
/*!*******************************************!*\
  !*** ./src/app/popover/popover.module.ts ***!
  \*******************************************/
/*! exports provided: PopoverDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDemoModule", function() { return PopoverDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var projects_docs_src_lib_core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/docs/src/lib/core/core.module */ "../docs/src/lib/core/core.module.ts");
/* harmony import */ var _custom_popover_demo_custom_popover_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-popover-demo/custom-popover-demo.component */ "./src/app/popover/custom-popover-demo/custom-popover-demo.component.ts");
/* harmony import */ var _popover_demo_popover_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popover-demo/popover-demo.component */ "./src/app/popover/popover-demo/popover-demo.component.ts");
/* harmony import */ var _popover_example1_popover_example1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popover-example1/popover-example1.component */ "./src/app/popover/popover-example1/popover-example1.component.ts");
/* harmony import */ var _popover_example2_popover_example2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popover-example2/popover-example2.component */ "./src/app/popover/popover-example2/popover-example2.component.ts");
/* harmony import */ var _popover_example2_property_edit_popover_property_edit_popover_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popover-example2/property-edit-popover/property-edit-popover.component */ "./src/app/popover/popover-example2/property-edit-popover/property-edit-popover.component.ts");











var PopoverDemoModule = /** @class */ (function () {
    function PopoverDemoModule() {
    }
    PopoverDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_4__["PopoverModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                projects_docs_src_lib_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]
            ],
            declarations: [
                _popover_demo_popover_demo_component__WEBPACK_IMPORTED_MODULE_7__["PopoverDemoComponent"],
                _custom_popover_demo_custom_popover_demo_component__WEBPACK_IMPORTED_MODULE_6__["CustomPopoverHeaderDirective"],
                _custom_popover_demo_custom_popover_demo_component__WEBPACK_IMPORTED_MODULE_6__["CustomPopoverContentDirective"],
                _custom_popover_demo_custom_popover_demo_component__WEBPACK_IMPORTED_MODULE_6__["CustomPopoverDemoComponent"],
                _popover_example1_popover_example1_component__WEBPACK_IMPORTED_MODULE_8__["PopoverExample1Component"],
                _popover_example2_popover_example2_component__WEBPACK_IMPORTED_MODULE_9__["PopoverExample2Component"],
                _popover_example2_property_edit_popover_property_edit_popover_component__WEBPACK_IMPORTED_MODULE_10__["PropertyEditPopoverComponent"]
            ],
            entryComponents: [
                _popover_example2_property_edit_popover_property_edit_popover_component__WEBPACK_IMPORTED_MODULE_10__["PropertyEditPopoverComponent"]
            ]
        })
    ], PopoverDemoModule);
    return PopoverDemoModule;
}());



/***/ }),

/***/ "./src/app/tooltip/tooltip-demo/tooltip-demo-example1.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/tooltip/tooltip-demo/tooltip-demo-example1.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"value = value + 1\">\n  Try me!\n  <ng-template iwTooltip>\n    Click to go from {{value}} to {{value+1}}\n  </ng-template>\n</button>"

/***/ }),

/***/ "./src/app/tooltip/tooltip-demo/tooltip-demo-example2.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/tooltip/tooltip-demo/tooltip-demo-example2.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button>Horizontal tooltip\n  <ng-template iwTooltip [horizontal]=\"true\">\n    I show up horizontally!\n  </ng-template>\n</button>"

/***/ }),

/***/ "./src/app/tooltip/tooltip-demo/tooltip-demo-example3.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/tooltip/tooltip-demo/tooltip-demo-example3.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button>\n  Some delay ~1s\n  <ng-template iwTooltip [delay]=\"1000\">\n    Yes, you waited but it was worth it!\n  </ng-template>\n</button>"

/***/ }),

/***/ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/tooltip/tooltip-demo/tooltip-demo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Tooltip'\"\n  [componentId]=\"'TooltipDirective'\"\n  [componentType]=\"'directives'\"\n>\n  <ng-template docsComponentExample=\"Simple example\">\n    <app-tooltip-demo-example1></app-tooltip-demo-example1>\n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"tooltip-demo-example1.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n  <ng-template docsComponentExample=\"Horizontal\">\n    <app-tooltip-demo-example2></app-tooltip-demo-example2>\n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"tooltip-demo-example2.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n  <ng-template docsComponentExample=\"Delay\">\n    <app-tooltip-demo-example3></app-tooltip-demo-example3>\n    <docs-tabs>\n      <docs-code *docsTab=\"'HTML'\" path=\"tooltip-demo-example3.component.html\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.sass":
/*!******************************************************************!*\
  !*** ./src/app/tooltip/tooltip-demo/tooltip-demo.component.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9hcHAvdG9vbHRpcC90b29sdGlwLWRlbW8vdG9vbHRpcC1kZW1vLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/tooltip/tooltip-demo/tooltip-demo.component.ts ***!
  \****************************************************************/
/*! exports provided: Example1TooltipComponent, Example2TooltipComponent, Example3TooltipComponent, TooltipDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example1TooltipComponent", function() { return Example1TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example2TooltipComponent", function() { return Example2TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example3TooltipComponent", function() { return Example3TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDemoComponent", function() { return TooltipDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var Example1TooltipComponent = /** @class */ (function () {
    function Example1TooltipComponent() {
        this.value = 0;
    }
    Example1TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tooltip-demo-example1',
            template: __webpack_require__(/*! ./tooltip-demo-example1.component.html */ "./src/app/tooltip/tooltip-demo/tooltip-demo-example1.component.html")
        })
    ], Example1TooltipComponent);
    return Example1TooltipComponent;
}());

var Example2TooltipComponent = /** @class */ (function () {
    function Example2TooltipComponent() {
    }
    Example2TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tooltip-demo-example2',
            template: __webpack_require__(/*! ./tooltip-demo-example2.component.html */ "./src/app/tooltip/tooltip-demo/tooltip-demo-example2.component.html")
        })
    ], Example2TooltipComponent);
    return Example2TooltipComponent;
}());

var Example3TooltipComponent = /** @class */ (function () {
    function Example3TooltipComponent() {
    }
    Example3TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tooltip-demo-example3',
            template: __webpack_require__(/*! ./tooltip-demo-example3.component.html */ "./src/app/tooltip/tooltip-demo/tooltip-demo-example3.component.html")
        })
    ], Example3TooltipComponent);
    return Example3TooltipComponent;
}());

var TooltipDemoComponent = /** @class */ (function () {
    function TooltipDemoComponent() {
    }
    TooltipDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tooltip-demo',
            template: __webpack_require__(/*! ./tooltip-demo.component.html */ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.html"),
            styles: [__webpack_require__(/*! ./tooltip-demo.component.sass */ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.sass")]
        })
    ], TooltipDemoComponent);
    return TooltipDemoComponent;
}());



/***/ }),

/***/ "./src/app/tooltip/tooltip.module.ts":
/*!*******************************************!*\
  !*** ./src/app/tooltip/tooltip.module.ts ***!
  \*******************************************/
/*! exports provided: TooltipDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDemoModule", function() { return TooltipDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var projects_docs_src_lib_core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/docs/src/lib/core/core.module */ "../docs/src/lib/core/core.module.ts");
/* harmony import */ var src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/public_api */ "../../src/public_api.ts");
/* harmony import */ var _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tooltip-demo/tooltip-demo.component */ "./src/app/tooltip/tooltip-demo/tooltip-demo.component.ts");







var TooltipDemoModule = /** @class */ (function () {
    function TooltipDemoModule() {
    }
    TooltipDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_public_api__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                projects_docs_src_lib_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
            ],
            declarations: [
                _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_6__["TooltipDemoComponent"],
                _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_6__["Example1TooltipComponent"],
                _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_6__["Example2TooltipComponent"],
                _tooltip_demo_tooltip_demo_component__WEBPACK_IMPORTED_MODULE_6__["Example3TooltipComponent"]
            ]
        })
    ], TooltipDemoModule);
    return TooltipDemoModule;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Interfacewerk Angular UI</h1>\n\n<h2><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> Production ready, highly customizable</h2>\n<p>This library is a set of interface tools that we use everyday in our Angular projects. They are designed as single blocks, easily customizable with CSS, opinionated\n  components or directives.\n</p>\n\n<h2><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> AOT compatible</h2>\n<p>We keep this library up-to-date with the latest Angular capabilities. Therefore, we can use any of its component in your AOT ready projects.</p>\n\n<h2><i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i> UX and performance</h2>\n<p>We develop this library with the user experience in mind. Therefore, interactions must be easy to understand and none of the components should affect\n  the performance. When working with other libraries, we often face the problem that, in huge tables, a simple tooltip on each cell could greatly impact\n  the snappiness of the application.\n</p>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.sass":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 15px;\n  display: block;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbm1lcmNreC9kZXYvaXdlcmstYW5ndWxhci11aS9wcm9qZWN0cy9kZW1vL3NyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0MsY0FBYTtFQUNiLGVBQWM7RUFDZCxlQUFjLEVBQUciLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiA6aG9zdCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogYXV0bzsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.sass */ "./src/app/welcome/welcome.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kevinmerckx/dev/iwerk-angular-ui/projects/demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map