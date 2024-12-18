"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var modes = ["normal", "hard"];
var printLine = function (text, breakLine) {
    if (breakLine === void 0) { breakLine = true; }
    process.stdout.write(text + (breakLine ? "\n" : ""));
};
var promptInput = function (text) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        printLine("\n".concat(text, "\n"), false);
        return [2 /*return*/, readLine()];
    });
}); };
var readLine = function () { return __awaiter(void 0, void 0, void 0, function () {
    var input;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new Promise(function (resolve) { return process.stdin.once("data", function (data) { return resolve(data.toString()); }); })];
            case 1:
                input = _a.sent();
                return [2 /*return*/, input.trim()];
        }
    });
}); };
var selectmode = function (text, values) { return __awaiter(void 0, void 0, void 0, function () {
    var input;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                printLine("-text", false);
                values.forEach(function (value) {
                    printLine("\n>".concat(value));
                });
                printLine(">");
                return [4 /*yield*/, readLine()];
            case 1:
                input = (_a.sent());
                if (values.includes(input)) {
                    return [2 /*return*/, input];
                }
                else {
                    return [2 /*return*/, selectmode(text, values)];
                }
                return [2 /*return*/];
        }
    });
}); };
var HitAndBlow = /** @class */ (function () {
    function HitAndBlow() {
        this.Answers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        this.answer = [];
        this.tryCount = 0;
        this.answerLength = 0;
        this.mode = "normal";
    }
    HitAndBlow.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, random, ans;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, selectmode("モード入力", modes)];
                    case 1:
                        _a.mode = _b.sent();
                        return [4 /*yield*/, this.levelmode()];
                    case 2:
                        _b.sent();
                        while (this.answer.length < this.answerLength) {
                            random = Math.floor(Math.random() * this.Answers.length);
                            ans = this.Answers[random];
                            if (!this.answer.includes(ans)) {
                                this.answer.push(ans);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HitAndBlow.prototype.levelmode = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (this.mode) {
                    case "normal":
                        this.answerLength = 3;
                        break;
                    case "hard":
                        this.answerLength = 4;
                        break;
                    default:
                        printLine("エラー");
                }
                return [2 /*return*/];
            });
        });
    };
    HitAndBlow.prototype.play = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, promptInput(",\u533A\u5207\u308A\u3067\u6570\u5B57\u3092".concat(this.answerLength, "\u3064\u5165\u529B"))];
                    case 1:
                        data = (_a.sent()).split(",");
                        if (!this.checkinput(data)) {
                            printLine("再入力");
                            this.play();
                        }
                        else {
                            result = this.check(data);
                            if (result.hit !== this.answerLength) {
                                printLine("---\nHit:".concat(result.hit, "\nBlow:").concat(result.blow, "\n---"));
                                this.tryCount += 1;
                                this.play();
                            }
                            else {
                                this.tryCount += 1;
                                this.end();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HitAndBlow.prototype.checkinput = function (data) {
        var _this = this;
        var checklength = data.length === this.answerLength;
        var checkinclude = data.every(function (val) { return _this.Answers.includes(val); });
        var checkcopy = data.every(function (val, index) { return data.indexOf(val) === index; });
        return checklength && checkinclude && checkcopy;
    };
    HitAndBlow.prototype.check = function (data) {
        var _this = this;
        var hitcount = 0;
        var blowcount = 0;
        data.forEach(function (value, index) {
            if (value === _this.answer[index]) {
                hitcount += 1;
            }
            else if (_this.answer.includes(value)) {
                blowcount += 1;
            }
        });
        return {
            hit: hitcount,
            blow: blowcount
        };
    };
    HitAndBlow.prototype.end = function () {
        printLine("\u6B63\u89E3\u3067\u3059\u3002\u56DE\u6570\uFF1A".concat(this.tryCount));
        process.exit();
    };
    return HitAndBlow;
}());
;
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var hitandblow;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hitandblow = new HitAndBlow();
                return [4 /*yield*/, hitandblow.setup()];
            case 1:
                _a.sent();
                return [4 /*yield*/, hitandblow.play()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
