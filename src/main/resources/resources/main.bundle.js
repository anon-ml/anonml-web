webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/anonymization-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnonymizationHandlerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnonymizationHandlerService = (function () {
    function AnonymizationHandlerService() {
        this.allLabels = ['PERSON',
            'LOCATION',
            'ORGANIZATION',
            'MISC',
            'LICENCE_PLATE',
            'E_MAIL',
            'TELEPHONE_NUMBER',
            'URL',
            'IP',
            'BIRTHDATE',
            'IBAN'
        ];
        this.acceptedAnonymizations = [];
        this.reworkedAnonymizations = [];
        this.declinedAnonymizations = [];
        this.addedAnonymizations = [];
        this.temporaryAnonymization = [];
    }
    AnonymizationHandlerService.prototype.getText = function () {
        return this.text;
    };
    AnonymizationHandlerService.prototype.getAnonymizations = function () {
        return this.anonymizations.concat(this.temporaryAnonymization);
    };
    AnonymizationHandlerService.prototype.getAllTouchedAnonymizations = function () {
        return this.acceptedAnonymizations.concat(this.reworkedAnonymizations, this.addedAnonymizations);
    };
    AnonymizationHandlerService.prototype.setActualleReworking = function (actual) {
        this.actuallyReworking = actual;
    };
    AnonymizationHandlerService.prototype.getActuallyReworking = function () {
        return this.actuallyReworking;
    };
    AnonymizationHandlerService.prototype.getLabels = function () {
        return this.allLabels;
    };
    AnonymizationHandlerService.prototype.setTemporatyAnonymization = function () {
        this.temporaryAnonymization.length = 0;
        this.temporaryAnonymization.push(this.actuallyReworking);
    };
    AnonymizationHandlerService.prototype.findNextAnonymizationParam = function (text, anonymizations) {
        this.text = text;
        this.anonymizations = anonymizations;
        this.findNextAnonymization();
    };
    AnonymizationHandlerService.prototype.getMaxId = function () {
        var highestIndex = 0;
        var id;
        for (var i = 0; i < this.anonymizations.length; ++i) {
            id = this.anonymizations[i].id;
            if (id > highestIndex) {
                highestIndex = id;
            }
        }
        return highestIndex;
    };
    AnonymizationHandlerService.prototype.findNextAnonymization = function () {
        console.log('findNextAnonymization accessed.');
        var lowestIndex = Number.MAX_VALUE;
        var foundIndex;
        var nextAnonymization = -1;
        for (var i = 0; i < this.anonymizations.length; ++i) {
            if (this.getAllTouchedAnonymizations().includes(this.anonymizations[i].id)) {
                continue;
            }
            foundIndex = this.text.indexOf(this.anonymizations[i].original);
            if (foundIndex < lowestIndex) {
                lowestIndex = foundIndex;
                nextAnonymization = i;
            }
        }
        if (nextAnonymization === -1) {
            this.actuallyReworking = null;
        }
        this.actuallyReworking = this.anonymizations[nextAnonymization];
    };
    AnonymizationHandlerService.prototype.acceptedActualAnonymization = function () {
        console.log('Accepted!');
        if (this.actuallyReworking == null) {
            console.log('Document finished!');
            return;
        }
        this.acceptedAnonymizations.push(this.actuallyReworking.id);
        this.findNextAnonymization();
    };
    AnonymizationHandlerService.prototype.declineActualAnonymization = function () {
        if (this.actuallyReworking == null) {
            console.log('Document finished!');
            return;
        }
        var index = this.anonymizations.indexOf(this.actuallyReworking);
        this.declinedAnonymizations.push(this.actuallyReworking.id);
        this.anonymizations.splice(index, 1);
        this.findNextAnonymization();
    };
    AnonymizationHandlerService.prototype.reworkedActualAnonymization = function () {
        if (this.actuallyReworking == null) {
            console.log('Document finished!');
            return;
        }
        this.reworkedAnonymizations.push(this.actuallyReworking.id);
        this.findNextAnonymization();
    };
    AnonymizationHandlerService.prototype.addedNewAnonymization = function () {
        this.anonymizations.push(this.actuallyReworking);
        this.addedAnonymizations.push(this.actuallyReworking.id);
        this.findNextAnonymization();
        this.temporaryAnonymization.length = 0;
    };
    return AnonymizationHandlerService;
}());
AnonymizationHandlerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AnonymizationHandlerService);

//# sourceMappingURL=anonymization-handler.service.js.map

/***/ }),

/***/ "./src/app/anonymization.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Anonymization; });
var Anonymization = (function () {
    function Anonymization() {
    }
    return Anonymization;
}());

//# sourceMappingURL=anonymization.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Set height of the grid so .sidenav can be 100% (adjust if needed) */\r\n.row.content {\r\n\theight: 1500px\r\n}\r\n\r\n/* Set gray background color and 100% height */\r\n.sidenav {\r\n\tbackground-color: #f1f1f1;\r\n\theight: 100%;\r\n}\r\n\r\n/* Set black background color, white text and some padding */\r\nfooter {\r\n\tbackground-color: #555;\r\n\tcolor: white;\r\n\tpadding: 15px;\r\n}\r\n\r\n/* On small screens, set height to 'auto' for sidenav and grid */\r\n@media screen and (max-width: 767px) {\r\n\t.sidenav {\r\n\t\theight: auto;\r\n\t\tpadding: 15px;\r\n\t}\r\n\t.row.content {\r\n\t\theight: auto;\r\n\t}\r\n}\r\n\r\n.btn-sq-lg {\r\n  width:65px !important;\r\n  height:65px !important;\r\n}\r\n\r\n.btn-sq-sm {\r\n  width:32px !important;\r\n  height:32px !important;\r\n}\r\n\r\n/* layout.css Style */\r\n.upload-drop-zone {\r\n  height: 30%;\r\n  width: 100%;\r\n  border-width: 2px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/* skin.css Style*/\r\n.upload-drop-zone {\r\n  color: #ccc;\r\n  border-style: dashed;\r\n  border-color: #ccc;\r\n  line-height: 400px;\r\n  text-align: center\r\n}\r\n.upload-drop-zone.drop {\r\n  color: #222;\r\n  border-color: #222;\r\n}\r\n\r\n.white {\r\n\tbackground-color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row content\">\n\t\t<div *ngIf=\"!anonymizationHanlderService.text\"\n\t\t\tclass=\"col-sm-10 sidenav\">\n\t\t\t<input id=\"input-1\" type=\"file\"\n\t\t\t\tclass=\"upload-drop-zone file\" (change)=\"fileHandle($event)\">\n\t\t</div>\n\t\t<div id=\"controlId\" tabindex=\"1\" [appFocusRework]=\"focusMainArea\"\n\t\t\t(keypress)=\"keyControl($event)\"\n\t\t\t*ngIf=\"anonymizationHanlderService.text\" class=\"col-sm-10 sidenav\">\n\t\t\t{{fileName}}\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-body white\" (mouseup)=\"getSelectionText()\"\n\t\t\t\t\t*ngFor=\"let page of anonymizationHanlderService.text\">\n\t\t\t\t\t<div\n\t\t\t\t\t\t[innerHtml]=\"page | highlightAnonymization:anonymizationHanlderService.getAnonymizations():trigger\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<span>{{selectedText}}</span>\n\t\t</div>\n\t\t<div class=\"col-sm-2\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t<h4>Steuerung:</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-1\"></div>\n\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td><button type=\"button\" class=\"btn btn-sq-sm btn-default\">w</button></td>\n\t\t\t\t\t\t\t<td></td>\n\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><button type=\"button\" class=\"btn btn-sq-sm btn-default\">s</button></td>\n\t\t\t\t\t\t\t<td><button type=\"button\" class=\"btn btn-sq-sm btn-default\">a</button></td>\n\t\t\t\t\t\t\t<td><button type=\"button\" class=\"btn btn-sq-sm btn-default\">d</button></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><button type=\"button\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-sq-lg btn-default btn-lg\">a</button></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t: <b>a</b>ccept\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><button type=\"button\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-sq-lg btn-default btn-lg\">d</button></td>\n\t\t\t\t\t\t\t<td><h4>\n\t\t\t\t\t\t\t\t\t: <b>d</b>ecline\n\t\t\t\t\t\t\t\t</h4></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><button type=\"button\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-sq-lg btn-default btn-lg\">w</button></td>\n\t\t\t\t\t\t\t<td><h4>\n\t\t\t\t\t\t\t\t\t: re<b>w</b>ork\n\t\t\t\t\t\t\t\t</h4></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td><button type=\"button\"\n\t\t\t\t\t\t\t\t\tclass=\"btn btn-sq-lg btn-default btn-lg\">s</button></td>\n\t\t\t\t\t\t\t<td><h4>\n\t\t\t\t\t\t\t\t\t: <b>s</b>ave\n\t\t\t\t\t\t\t\t</h4></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<hr>\n\t\t\t<div *ngIf=\"anonymizationHanlderService.getActuallyReworking()\"\n\t\t\t\t(keyup.enter)=\"enterRework()\">\n\t\t\t\t<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><h4>Annotation:</h4></td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><mark>{{anonymizationHanlderService.getActuallyReworking().original}}</mark></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><h3>Label:</h3></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><select [appFocusRework]=\"focusReworkArea\"\n\t\t\t\t\t\t\t[(ngModel)]=\"anonymizationHanlderService.getActuallyReworking().Label\"\n\t\t\t\t\t\t\tclass=\"form-control\"><option\n\t\t\t\t\t\t\t\t\t*ngFor=\"let label of anonymizationHanlderService.getLabels()\">{{label}}</option>\n\t\t\t\t\t\t</select></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><h3>Ersetzung:</h3></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td><input type=\"text\" class=\"form-control\" id=\"ersetzung\"\n\t\t\t\t\t\t\t[(ngModel)]=\"anonymizationHanlderService.getActuallyReworking().replacement\"></td>\n\t\t\t\t\t</tr>\n\n\n\t\t\t\t</table>\n\n\t\t\t\t<a>Just hit 'Enter' to accept the changes!</a>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<footer class=\"container-fluid\">\n\t<p>AnonMl for the win!</p>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__anonymization__ = __webpack_require__("./src/app/anonymization.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__anonymization_handler_service__ = __webpack_require__("./src/app/anonymization-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload_file_service__ = __webpack_require__("./src/app/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__document__ = __webpack_require__("./src/app/document.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(uploadFileService, anonymizationHanlderService) {
        this.uploadFileService = uploadFileService;
        this.anonymizationHanlderService = anonymizationHanlderService;
        this.title = 'AnonML';
        this.trigger = 0;
        this.focusReworkArea = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* EventEmitter */]();
        this.focusMainArea = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* EventEmitter */]();
        this.focusMainArea.emit(true);
    }
    AppComponent.prototype.updatePipe = function () {
        this.trigger++;
    };
    AppComponent.prototype.fileHandle = function (event) {
        var _this = this;
        var files = event.target.files || event.srcElement.files;
        console.log(files);
        this.uploadFileService.postFile(files).then(function (response) {
            _this.fileName = response.fileName;
            _this.docId = response.id;
            _this.docFileType = response.originalFileType;
            _this.anonymizationHanlderService.findNextAnonymizationParam(response.text, response.anonymizations);
        });
    };
    AppComponent.prototype.keyControl = function (event) {
        switch (event.charCode) {
            case 97:
                console.log('pressed a');
                this.anonymizationHanlderService.acceptedActualAnonymization();
                this.updatePipe();
                break;
            case 119:
                console.log('pressed w');
                this.focusReworkArea.emit(true);
                break;
            case 100:
                console.log('pressed d');
                this.anonymizationHanlderService.declineActualAnonymization();
                this.updatePipe();
                break;
            case 115:
                console.log('pressed s');
                if (this.anonymizationHanlderService.getActuallyReworking() === undefined) {
                    var document = new __WEBPACK_IMPORTED_MODULE_4__document__["a" /* Document */]();
                    document.anonymizations = this.anonymizationHanlderService.getAnonymizations();
                    document.fileName = this.fileName;
                    document.id = this.docId;
                    document.originalFileType = this.docFileType;
                    document.text = this.anonymizationHanlderService.getText();
                    this.uploadFileService.saveFile(document);
                }
                else {
                    console.log('Document not finished!');
                }
                break;
            default:
        }
    };
    AppComponent.prototype.enterRework = function () {
        console.log('Hit Enter!');
        this.focusMainArea.emit(true);
        if (this.anonymizationHanlderService.getActuallyReworking().id === (this.anonymizationHanlderService.getMaxId() + 1)) {
            console.log('add new anonymization!');
            this.anonymizationHanlderService.addedNewAnonymization();
        }
        else {
            this.anonymizationHanlderService.reworkedActualAnonymization();
        }
        this.updatePipe();
    };
    AppComponent.prototype.getSelectionText = function () {
        console.log('getSelectionText Entered.');
        var t;
        if (window.getSelection) {
            t = window.getSelection();
        }
        else if (document.getSelection) {
            t = document.getSelection();
        }
        console.log('T: ' + t);
        this.tempAnonymization = new __WEBPACK_IMPORTED_MODULE_0__anonymization__["a" /* Anonymization */]();
        this.tempAnonymization.original = t.toString();
        this.tempAnonymization.Producer = 'HUMAN';
        this.tempAnonymization.id = this.anonymizationHanlderService.getMaxId() + 1;
        this.anonymizationHanlderService.setActualleReworking(this.tempAnonymization);
        this.anonymizationHanlderService.setTemporatyAnonymization();
        this.updatePipe();
        this.focusReworkArea.emit(true);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__upload_file_service__["a" /* UploadFileService */], __WEBPACK_IMPORTED_MODULE_1__anonymization_handler_service__["a" /* AnonymizationHandlerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__upload_file_service__["a" /* UploadFileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__upload_file_service__["a" /* UploadFileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__anonymization_handler_service__["a" /* AnonymizationHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__anonymization_handler_service__["a" /* AnonymizationHandlerService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__highlight_anonymization_pipe__ = __webpack_require__("./src/app/highlight-anonymization.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__focus_rework_directive__ = __webpack_require__("./src/app/focus-rework.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__focus_main_directive__ = __webpack_require__("./src/app/focus-main.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__highlight_anonymization_pipe__["a" /* HighlightAnonymizationPipe */],
            __WEBPACK_IMPORTED_MODULE_6__focus_rework_directive__["a" /* FocusReworkDirective */],
            __WEBPACK_IMPORTED_MODULE_7__focus_main_directive__["a" /* FocusMainDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/document.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Document; });
var Document = (function () {
    function Document() {
    }
    return Document;
}());

//# sourceMappingURL=document.js.map

/***/ }),

/***/ "./src/app/focus-main.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusMainDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var FocusMainDirective = (function () {
    function FocusMainDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    FocusMainDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.appFocusMain.subscribe(function (event) {
            _this.renderer.invokeElementMethod(_this.element.nativeElement, 'focus', []);
        });
    };
    return FocusMainDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], FocusMainDirective.prototype, "appFocusMain", void 0);
FocusMainDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[appFocusMain]'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]) === "function" && _c || Object])
], FocusMainDirective);

var _a, _b, _c;
//# sourceMappingURL=focus-main.directive.js.map

/***/ }),

/***/ "./src/app/focus-rework.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusReworkDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var FocusReworkDirective = (function () {
    function FocusReworkDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    FocusReworkDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.appFocusRework.subscribe(function (event) {
            _this.renderer.invokeElementMethod(_this.element.nativeElement, 'focus', []);
        });
    };
    return FocusReworkDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], FocusReworkDirective.prototype, "appFocusRework", void 0);
FocusReworkDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[appFocusRework]'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]) === "function" && _c || Object])
], FocusReworkDirective);

var _a, _b, _c;
//# sourceMappingURL=focus-rework.directive.js.map

/***/ }),

/***/ "./src/app/highlight-anonymization.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__anonymization_handler_service__ = __webpack_require__("./src/app/anonymization-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightAnonymizationPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HighlightAnonymizationPipe = (function () {
    function HighlightAnonymizationPipe(anonymizationHanlderService, sanitizer) {
        this.anonymizationHanlderService = anonymizationHanlderService;
        this.sanitizer = sanitizer;
    }
    HighlightAnonymizationPipe.prototype.transform = function (value, anonymizations, trigger) {
        console.log('Pipe highlightAnonymization entered.');
        var newValue = value;
        var replacement = '';
        for (var i = 0; i < anonymizations.length; ++i) {
            replacement = '';
            if (this.anonymizationHanlderService.getAllTouchedAnonymizations().includes(anonymizations[i].id)) {
                replacement = '<span style="background-color:DarkGrey">' + anonymizations[i].replacement + '</span>';
            }
            else {
                if (anonymizations[i].id === this.anonymizationHanlderService.getActuallyReworking().id) {
                    replacement = '<span style="background-color:rgb(255,0,0)">[]</span>';
                }
                var labels = this.anonymizationHanlderService.getLabels();
                var indexOfLabel = labels.indexOf(anonymizations[i].Label);
                if (indexOfLabel === -1) {
                    replacement += '<span style="background-color:rgb( 255 , 255, 255)">' + anonymizations[i].original + '</span>';
                }
                else {
                    replacement += '<span style="background-color:rgb( 0 , ' + (255 - (indexOfLabel * 25) % 255) + ', '
                        + ((indexOfLabel * 25) % 255) + ')">' + anonymizations[i].original + '</span>';
                }
            }
            newValue = newValue.replace(new RegExp(anonymizations[i].original, 'g'), replacement);
        }
        return this.sanitizer.bypassSecurityTrustHtml(newValue);
    };
    return HighlightAnonymizationPipe;
}());
HighlightAnonymizationPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* Pipe */])({
        name: 'highlightAnonymization'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__anonymization_handler_service__["a" /* AnonymizationHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__anonymization_handler_service__["a" /* AnonymizationHandlerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], HighlightAnonymizationPipe);

var _a, _b;
//# sourceMappingURL=highlight-anonymization.pipe.js.map

/***/ }),

/***/ "./src/app/upload-file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadFileService = (function () {
    function UploadFileService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({});
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UploadFileService.prototype.postFile = function (files) {
        var url = '/api/upload';
        var formData = new FormData();
        this.options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](); // 'Content-Type': 'multipart/form-data'
        for (var i = 0; i < files.length; i++) {
            formData.append('file', files[i]);
        }
        return this.http.post(url, formData, this.options)
            .toPromise().then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UploadFileService.prototype.saveFile = function (editedDocument) {
        var url = 'api/save/' + editedDocument.id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, JSON.stringify(editedDocument.anonymizations), { headers: headers })
            .toPromise().then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UploadFileService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return UploadFileService;
}());
UploadFileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UploadFileService);

var _a;
//# sourceMappingURL=upload-file.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map