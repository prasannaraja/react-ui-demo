"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var email_1 = require("./email");
var Credential = /** @class */ (function () {
    function Credential(email, password) {
        if (isInvalid(password)) {
            throw new Error("Your password must contains only letter and numbers");
        }
        this._password = password;
        this._email = new email_1.Email(email);
    }
    Object.defineProperty(Credential.prototype, "email", {
        get: function () {
            return this._email.address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Credential.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: true,
        configurable: true
    });
    return Credential;
}());
exports.Credential = Credential;
function isInvalid(password) {
    var passwordRegex = /^[a-zA-Z0-9_.-]*$/;
    return !passwordRegex.test(password);
}
